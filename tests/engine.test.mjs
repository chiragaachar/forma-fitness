import test from 'node:test';
import assert from 'node:assert/strict';
import {DEFAULT_PROFILE as D,FOODS,targets,validateProfile,allowed,dayPlan,grocery,workout,streak,shiftDate,mealOptions,replacementOptions,consumed} from '../engine.js';
test('Mifflin equation, conservative goals, and adult guardrails',()=>{
 const p={...D,age:30,height:175,weight:80,targetWeight:75,activity:1.2};
 assert.equal(targets(p).bmr,1749);assert.equal(targets(p).maintenance,2099);
 assert.equal(targets({...p,goal:'maintain'}).calories,2100);
 assert.ok(targets(p).calories<targets({...p,goal:'maintain'}).calories);
 assert.ok(targets({...p,goal:'lean_bulk'}).calories>targets({...p,goal:'maintain'}).calories);
 assert.equal(targets({...p,health:true}).calories,null);
 assert.equal(targets({...p,targetWeight:45}).limited,true);
 assert.ok(validateProfile({...p,age:17}).length);
 assert.ok(validateProfile({...p,goal:'lean_bulk',targetWeight:70}).length);
});
test('diet and allergen exclusions hold across an entire week',()=>{
 for(const diet of ['veg','eggetarian','nonveg'])for(const allergies of [[],['dairy'],['soy','peanut'],['gluten','egg','fish']]){
  const p={...D,diet,allergies};
  for(let n=0;n<7;n++)for(const m of dayPlan(p,shiftDate('2026-10-05',n)).meals){
   assert.ok(Number.isFinite(m.k)&&m.k>0);
   for(const id of Object.keys(m.ingredients)){assert.ok(allowed(id,p));assert.ok(!FOODS[id].tags.some(t=>allergies.includes(t)));if(diet==='veg')assert.ok(!['egg','chicken','fish'].includes(id));if(diet==='eggetarian')assert.ok(!['chicken','fish'].includes(id));}
  }
 }
});
test('weekly grocery aggregation matches exact generated quantities',()=>{
 const plans=Array.from({length:7},(_,n)=>dayPlan(D,shiftDate('2026-10-05',n))),list=grocery(plans);
 for(const item of list){const expected=plans.flatMap(p=>p.meals).reduce((sum,m)=>sum+(m.ingredients[item.id]||0),0);assert.equal(item.quantity,expected);}
 assert.equal(plans[0].total.k,plans[0].meals.reduce((sum,m)=>sum+m.k,0));
 assert.equal(plans[0].meals.length,4);
 const changed=dayPlan(D,'2026-10-05',{breakfast:1});assert.equal(changed.meals[0].name,mealOptions(D,'breakfast',changed.calories*.25,changed.protein*.25,D.budget*.25)[1].name);
});
test('check-in changes recovery and meal preparation without punitive calories',()=>{
 const regular=workout(D,'2026-10-05');assert.equal(regular.rest,false);
 for(const prev of [{energy:1},{soreness:'high'},{sleep:4},{sleep:0}])assert.equal(workout(D,'2026-10-05',prev).rest,true);
 assert.equal(workout(D,'2026-10-06').rest,true);
 assert.equal(dayPlan(D,'2026-10-05',{}, {diet:'hard'}).calories,dayPlan(D,'2026-10-05').calories);
 for(const level of ['beginner','intermediate','advanced'])for(const equipment of ['bodyweight','bands','dumbbells']){const w=workout({...D,level,equipment},'2026-10-05');assert.ok(w.exercises.length>0);assert.ok(w.exercises.every(x=>x.sets>=2&&x.rest>=60));}
});
test('unavailable ingredients, extreme filters, and alternatives are handled',()=>{
 const p={...D,avoid:'banana, rice',allergies:['soy','dairy','gluten','peanut','egg','fish']};
 const pl=dayPlan(p,'2026-10-05');for(const m of pl.meals)for(const id of Object.keys(m.ingredients))assert.ok(allowed(id,p));
 const none=dayPlan({...D,avoid:Object.keys(FOODS).join(',')},'2026-10-05');assert.equal(none.meals.length,0);assert.equal(none.total.k,0);
 for(const f of replacementOptions('paneer',100,p))assert.ok(allowed(f.id,p));
});
test('streaks use consecutive local dates and consumption uses logged snapshots',()=>{
 assert.equal(shiftDate('2026-01-01',-1),'2025-12-31');
 const logs={'2026-10-06':{checkin:{}},'2026-10-07':{checkin:{}}};
 assert.equal(streak(logs,'2026-10-08'),2);assert.equal(streak(logs,'2026-10-09'),0);
 assert.deepEqual(consumed({food:[{k:350,p:20},{k:200,p:10}]}),{k:550,p:30});
});
