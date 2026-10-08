// Curated estimates per 100 g (or 100 ml). Dry/raw weights unless marked otherwise.
// Recipe estimates, not a clinical food database. Prices are editable assumptions.
export const FOODS={
 oats:{name:'Rolled oats',k:389,p:16.9,c:66,f:6.9,price:18,tags:['gluten'],group:'Grains & staples'},
 atta:{name:'Whole-wheat atta',k:340,p:13,c:72,f:2.5,price:6,tags:['gluten'],group:'Grains & staples'},
 rice:{name:'Rice (dry)',k:360,p:7,c:80,f:0.6,price:7,tags:[],group:'Grains & staples'},
 poha:{name:'Poha (dry)',k:350,p:7,c:77,f:1,price:8,tags:[],group:'Grains & staples'},
 besan:{name:'Besan',k:387,p:22,c:58,f:6.7,price:12,tags:[],group:'Pulses & protein'},
 dal:{name:'Moong / masoor dal (dry)',k:350,p:24,c:60,f:1.2,price:14,tags:[],group:'Pulses & protein'},
 rajma:{name:'Rajma (dry)',k:333,p:24,c:60,f:1,price:16,tags:[],group:'Pulses & protein'},
 chana:{name:'Roasted chana',k:370,p:22,c:60,f:6,price:16,tags:[],group:'Pulses & protein'},
 soy:{name:'Soya chunks (dry)',k:345,p:52,c:33,f:0.5,price:16,tags:['soy'],group:'Pulses & protein'},
 tofu:{name:'Firm tofu',k:100,p:12,c:2,f:5,price:35,tags:['soy'],group:'Pulses & protein'},
 paneer:{name:'Paneer',k:265,p:18,c:3,f:21,price:40,tags:['dairy'],group:'Dairy & eggs'},
 curd:{name:'Plain curd',k:61,p:3.5,c:4.7,f:3.3,price:10,tags:['dairy'],group:'Dairy & eggs'},
 milk:{name:'Toned milk',k:58,p:3.1,c:4.8,f:3,price:6,tags:['dairy'],unit:'ml',group:'Dairy & eggs'},
 egg:{name:'Egg (edible weight)',k:143,p:12.6,c:0.7,f:9.5,price:14,tags:['egg'],group:'Dairy & eggs'},
 chicken:{name:'Chicken breast (raw)',k:120,p:22.5,c:0,f:2.6,price:30,tags:['meat'],group:'Pulses & protein'},
 fish:{name:'Lean fish (raw)',k:100,p:20,c:0,f:2,price:40,tags:['fish','meat'],group:'Pulses & protein'},
 veg:{name:'Seasonal vegetables',k:35,p:2,c:6,f:0.4,price:6,tags:[],group:'Fruit & vegetables'},
 fruit:{name:'Seasonal fruit',k:55,p:0.5,c:14,f:0.2,price:10,tags:[],group:'Fruit & vegetables'},
 banana:{name:'Banana (edible portion)',k:89,p:1.1,c:23,f:0.3,price:6,tags:[],group:'Fruit & vegetables'},
 peanuts:{name:'Peanuts',k:567,p:26,c:16,f:49,price:16,tags:['peanut'],group:'Pantry'},
 oil:{name:'Cooking oil',k:884,p:0,c:0,f:100,price:15,tags:[],group:'Pantry'}
};
const recipe=(name,slot,ingredients,method,minutes=20)=>({name,slot,ingredients,method,minutes});
export const RECIPES=[
 recipe('Besan chilla & curd','breakfast',{besan:75,veg:100,oil:5,curd:150},'Mix besan with water and chopped vegetables. Cook thin chillas in the measured oil. Serve with plain curd.'),
 recipe('Banana overnight oats','breakfast',{oats:60,milk:200,banana:100,peanuts:15},'Soak oats in milk overnight in the fridge. Add sliced banana and peanuts before eating.',5),
 recipe('Vegetable poha & chana','breakfast',{poha:65,veg:120,peanuts:15,chana:40,oil:5},'Rinse poha. Sauté vegetables in measured oil, add poha and spices. Serve roasted chana on the side.',15),
 recipe('Egg bhurji & roti','breakfast',{egg:100,atta:70,veg:100,oil:5},'Scramble eggs with vegetables until fully set. Make rotis using the measured dry atta.'),
 recipe('Moong dal chilla','breakfast',{dal:90,veg:120,oil:5,fruit:120},'Soak dal, blend with water and spices, then cook as thin chillas. Serve fruit separately.',20),
 recipe('Rajma rice bowl','lunch',{rajma:75,rice:60,veg:150,oil:7},'Soak rajma overnight, discard soaking water and boil thoroughly until soft. Simmer with spices. Serve with cooked rice and vegetables.',35),
 recipe('Soya keema & roti','lunch',{soy:55,atta:85,veg:180,oil:8},'Boil and squeeze soya, mince and simmer with vegetables and spices. Serve with rotis.',25),
 recipe('Paneer roti plate','lunch',{paneer:100,atta:70,veg:180,oil:5},'Sauté paneer and vegetables with spices. Serve with rotis made from the measured atta.',20),
 recipe('Home-style chicken rice','lunch',{chicken:150,rice:80,veg:180,oil:8},'Cook chicken thoroughly with spices. Serve with steamed rice and sautéed vegetables.',30),
 recipe('Egg curry & rice','lunch',{egg:150,rice:70,veg:180,oil:7},'Hard-boil eggs and simmer in a vegetable masala. Serve with cooked rice.',25),
 recipe('Dal, rice & vegetables','lunch',{dal:90,rice:65,veg:200,oil:7},'Pressure-cook dal until soft. Season with spices and measured oil; serve with rice and vegetables.',25),
 recipe('Fruit & roasted chana','snack',{chana:55,fruit:180},'Pair seasonal fruit with plain roasted chana. Keep a portion packed for a busy afternoon.',2),
 recipe('Curd, banana & peanuts','snack',{curd:200,banana:100,peanuts:15},'Top chilled plain curd with sliced banana and peanuts.',3),
 recipe('Boiled eggs & fruit','snack',{egg:100,fruit:180},'Boil eggs until fully set. Serve with a piece of seasonal fruit.',12),
 recipe('Chana peanut chaat','snack',{chana:45,peanuts:15,veg:100},'Toss roasted chana and peanuts with washed chopped vegetables, lemon and spices.',5),
 recipe('Moong dal khichdi','dinner',{dal:85,rice:55,veg:200,oil:7},'Pressure-cook rice, dal and vegetables with water and spices until soft. Finish with measured oil.',25),
 recipe('Tofu stir-fry & roti','dinner',{tofu:180,atta:70,veg:200,oil:7},'Sauté tofu and vegetables with spices. Serve with freshly made rotis.',20),
 recipe('Soya vegetable pulao','dinner',{soy:55,rice:75,veg:200,oil:7},'Boil and squeeze soya. Cook together with rice, vegetables and spices until tender.',25),
 recipe('Grilled fish & rice','dinner',{fish:170,rice:75,veg:200,oil:7},'Cook fish thoroughly with spices. Serve with rice and vegetables.',25),
 recipe('Chicken roti plate','dinner',{chicken:160,atta:80,veg:200,oil:7},'Cook chicken thoroughly in a simple masala. Serve with rotis and seasonal vegetables.',25),
 recipe('Egg bhurji rice bowl','dinner',{egg:150,rice:70,veg:200,oil:6},'Scramble eggs until fully set with vegetables. Serve over steamed rice.',20),
 recipe('Dal & vegetable roti plate','dinner',{dal:95,atta:65,veg:200,oil:7},'Cook dal until soft, temper with measured oil and spices. Serve with rotis and vegetables.',25)
];
export const SLOTS=['breakfast','lunch','snack','dinner'];
export const GOALS={fat_loss:'Fat loss',lean_bulk:'Lean bulk',muscle_gain:'Muscle gain',maintain:'Maintain weight'};
export const DEFAULT_PROFILE={name:'',age:25,gender:'prefer',sex:'male',height:170,weight:70,targetWeight:65,goal:'fat_loss',activity:1.375,diet:'veg',budget:220,time:30,equipment:'bodyweight',level:'beginner',allergies:[],avoid:'',health:false,steps:7000,sleep:8};
export function dateKey(d=new Date()){return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;}
export function shiftDate(key,days){const d=new Date(key+'T12:00:00');d.setDate(d.getDate()+days);return dateKey(d);}
export function dayIndex(key){const [y,m,d]=key.split('-').map(Number);return Math.floor(Date.UTC(y,m-1,d)/86400000);}
export function validateProfile(p){
 const errors=[];for(const [key,min,max] of [['age',18,80],['height',120,230],['weight',35,250],['targetWeight',35,250],['budget',60,1500],['time',15,60],['steps',1000,25000],['sleep',6,10]]) if(!Number.isFinite(+p[key])||+p[key]<min||+p[key]>max)errors.push(`${key}: enter a number between ${min} and ${max}.`);
 if(!GOALS[p.goal]||!['male','female'].includes(p.sex)||!['veg','eggetarian','nonveg'].includes(p.diet)||!['bodyweight','bands','dumbbells'].includes(p.equipment)||!['beginner','intermediate','advanced'].includes(p.level)||![1.2,1.375,1.55,1.725].includes(+p.activity))errors.push('Select valid profile options.');
 if(typeof p.name!=='string'||p.name.length>40||typeof p.avoid!=='string'||p.avoid.length>200||!Array.isArray(p.allergies)||p.allergies.some(a=>!['dairy','gluten','soy','peanut','egg','fish'].includes(a))) errors.push('Check name and food exclusions.');
 if(p.goal==='fat_loss'&&+p.targetWeight>+p.weight)errors.push('For fat loss, target weight must not be above current weight.');
 if(['lean_bulk','muscle_gain'].includes(p.goal)&&+p.targetWeight<+p.weight)errors.push('For a gain goal, target weight must not be below current weight.');
 return errors;
}
export function targets(p){
 const bmi=p.weight/(p.height/100)**2;
 const bmr=Math.round(10*p.weight+6.25*p.height-5*p.age+(p.sex==='male'?5:-161));
 const maintenance=Math.round(bmr*p.activity);
 const limited=!!p.health||bmi<18.5||p.targetWeight/(p.height/100)**2<18.5||p.age<18;
 const change={fat_loss:-Math.min(350,maintenance*.15),lean_bulk:150,muscle_gain:250,maintain:0}[p.goal];
 const calories=limited?null:Math.round(Math.max(p.sex==='male'?1500:1200,maintenance+change)/10)*10;
 const protein=limited?null:Math.round(p.weight*(p.goal==='maintain'?1.2:1.6));
 return {bmi:+bmi.toFixed(1),bmr,maintenance,calories,protein,water:limited?null:Math.round(Math.min(3500,Math.max(1800,p.weight*30))/250)*250,limited};
}
export function allowed(id,p){const f=FOODS[id];return !!f&&!f.tags.some(t=>(p.allergies||[]).includes(t))&&!(p.diet!=='nonveg'&&f.tags.includes('meat'))&&!(p.diet==='veg'&&f.tags.includes('egg'))&&!(p.avoid||'').toLowerCase().split(',').map(s=>s.trim()).filter(Boolean).some(s=>f.name.toLowerCase().includes(s)||id.includes(s));}
export function totals(ingredients){return Object.entries(ingredients).reduce((a,[id,g])=>{const f=FOODS[id];for(const v of ['k','p','c','f','price'])a[v]+=f[v]*g/100;return a;},{k:0,p:0,c:0,f:0,price:0});}
const rounded=x=>Object.fromEntries(Object.entries(x).map(([k,v])=>[k,Math.round(v)]));
function portion(r,kcal,protein){
 let ing={...r.ingredients},t=totals(ing);
 // Increase the existing protein component before scaling, while keeping realistic caps.
 const caps={soy:70,dal:120,rajma:100,besan:110,chana:90,paneer:160,tofu:250,chicken:220,fish:220,egg:200};
 const proteinId=Object.keys(ing).filter(id=>caps[id]).sort((a,b)=>FOODS[b].p/FOODS[b].k-FOODS[a].p/FOODS[a].k)[0];
 if(proteinId&&t.p<protein)ing[proteinId]=Math.min(caps[proteinId],ing[proteinId]+(protein-t.p)/FOODS[proteinId].p*100);
 t=totals(ing);const scale=Math.min(1.65,Math.max(.65,kcal/t.k));
 ing=Object.fromEntries(Object.entries(ing).map(([id,g])=>[id,id==='egg'?Math.max(50,Math.round(g*scale/50)*50):Math.max(id==='oil'?3:5,Math.round(g*scale/(id==='oil'?1:5))*(id==='oil'?1:5))]));
 return {...r,ingredients:ing,...rounded(totals(ing))};
}
export function mealOptions(p,slot,kcal,protein,remainingBudget){
 return RECIPES.filter(r=>r.slot===slot&&Object.keys(r.ingredients).every(id=>allowed(id,p))).map(r=>portion(r,kcal,protein)).sort((a,b)=>{
 const score=r=>Math.abs(r.k-kcal)/Math.max(kcal,1)+Math.max(0,protein-r.p)/Math.max(protein,1)*.75+Math.max(0,r.price-remainingBudget)/Math.max(remainingBudget,1)*1.6;
 return score(a)-score(b);
 });
}
export function dayPlan(p,key,swaps={},previousCheck=null){
 const t=targets(p);if(t.limited)return {meals:[],total:{k:0,p:0,c:0,f:0,price:0},...t};
 const fractions=[.25,.3,.15,.3];
 const meals=SLOTS.map((slot,i)=>{let options=mealOptions(p,slot,t.calories*fractions[i],t.protein*fractions[i],p.budget*fractions[i]);if(previousCheck?.diet==='hard')options.sort((a,b)=>a.minutes-b.minutes);const index=swaps[slot]??(dayIndex(key)+i)%Math.min(3,options.length);return options.length?{...options[index%options.length],id:slot,alternatives:options.length}:null;}).filter(Boolean);
 const total=rounded(meals.reduce((a,m)=>{for(const v of ['k','p','c','f','price'])a[v]+=m[v];return a;},{k:0,p:0,c:0,f:0,price:0}));
 return {meals,total,...t};
}
export function grocery(plans){const quantities={};for(const plan of plans)for(const m of plan.meals)for(const [id,g]of Object.entries(m.ingredients))quantities[id]=(quantities[id]||0)+g;return Object.entries(quantities).map(([id,g])=>({id,...FOODS[id],quantity:Math.round(g),cost:Math.round(g*FOODS[id].price/100)})).sort((a,b)=>a.group.localeCompare(b.group));}
export function replacementOptions(id,g,p){const old=FOODS[id];return Object.entries(FOODS).filter(([key,f])=>key!==id&&allowed(key,p)&&(old.p>=10?f.p>=10:(old.group===f.group))).map(([key,f])=>{const quantity=old.p>=10?Math.round(old.p*g/f.p/5)*5:Math.round(old.k*g/f.k/5)*5;return {id:key,...f,quantity,...rounded(totals({[key]:quantity}))};}).filter(f=>f.quantity>=5&&f.quantity<=300).sort((a,b)=>a.price-b.price).slice(0,4);}
const exercises={
 squat:['Chair squat','Sit back toward a stable chair, keep feet planted and stand tall.'],push:['Wall / incline push-up','Use a stable wall or counter. Keep your body straight and elbows comfortable.'],hinge:['Glute bridge','Lie on your back, feet flat. Lift hips without arching your lower back.'],row:['Prone W raise','Lie face down. Lift your arms into a W gently, squeezing shoulder blades.'],core:['Dead bug','Keep your lower back comfortably down. Slowly extend opposite arm and leg.'],lunge:['Supported split squat','Hold a stable support and lower straight down through a comfortable range.'],calf:['Standing calf raise','Hold a stable support. Rise onto the balls of your feet and lower slowly.'],
 dbsquat:['Dumbbell goblet squat','Hold one dumbbell near your chest, sit between your hips and stand.'],dbpush:['Dumbbell floor press','Lie on the floor, elbows at a comfortable angle. Press dumbbells upward.'],dbhinge:['Dumbbell Romanian deadlift','Keep weights close, soften knees, push hips back and stand tall.'],dbrow:['Dumbbell bent-over row','Hinge at your hips, brace your trunk and draw elbows back.'],
 bandsquat:['Band squat','Stand securely on the band, hold ends at shoulders and squat comfortably.'],bandpush:['Band chest press','Loop an intact band around your upper back and press forward.'],bandrow:['Seated band row','Loop an intact band around shoe-covered feet, stay tall and pull elbows back.'],bandhinge:['Band Romanian deadlift','Stand securely on the band. Hinge with a neutral back and stand.']
};
export function workout(p,key,previousCheck=null){
 const dow=new Date(key+'T12:00:00').getDay(),recovery=targets(p).limited||previousCheck?.energy<=2||previousCheck?.soreness==='high'||(previousCheck?.sleep!=null&&previousCheck.sleep<6);
 const trainDays=[1,3,5];
 if(recovery||!trainDays.includes(dow))return {rest:true,recovery,title:recovery?'Recovery comes first':'Active recovery',minutes:Math.min(p.time,20),exercises:[],note:targets(p).limited?'Personalized exercise is paused. Follow movement advice from your healthcare professional.':'Choose an easy walk and gentle mobility if comfortable. Keep the effort easy enough to hold a conversation.'};
 const prefix={bodyweight:'',dumbbells:'db',bands:'band'}[p.equipment];
 const alt=dayIndex(key)%2===0;
 let ids=alt?['squat','push','row','core','calf']:['hinge','push','row','lunge','core'];
 const rest=p.goal==='muscle_gain'||p.goal==='lean_bulk'?90:60;
 const maxSets=Math.max(4,Math.floor((p.time*60-300+rest)/(40+rest)));
 const count=Math.min(p.time<=20?3:p.time<=30?4:5,Math.floor(maxSets/2));
 ids=ids.slice(0,count);
 const sets=Math.max(2,Math.min({beginner:2,intermediate:3,advanced:4}[p.level],Math.floor(maxSets/ids.length)));
 return {rest:false,recovery:false,title:alt?'Full body · strength A':'Full body · strength B',minutes:p.time,note:p.goal==='fat_loss'?'Keep strength work consistent; add comfortable walks when you can.':'Finish each set with 2–3 good repetitions still possible. Add reps first, then a little resistance.',exercises:ids.map(id=>{const key=exercises[prefix+id]?prefix+id:id;return {id:key,name:exercises[key][0],cue:exercises[key][1],sets,reps:id==='core'?'6–10 / side':p.level==='advanced'?'10–15':'8–12',rest};})};
}
export function streak(logs,today){let n=0,key=logs[today]?.checkin?today:shiftDate(today,-1);while(logs[key]?.checkin){n++;key=shiftDate(key,-1);}return n;}
export function consumed(log){return (log?.food||[]).reduce((a,m)=>({k:a.k+m.k,p:a.p+m.p}),{k:0,p:0});}
export function mentor(p,logs,key){const t=targets(p),today=logs[key]||{},prev=logs[shiftDate(key,-1)]?.checkin,used=consumed(today);
 if(t.limited)return {title:'Your wellbeing comes first.',text:'Use Forma to record habits and reflect. A qualified clinician or dietitian should set your nutrition and exercise targets for your health needs.'};
 if(prev?.energy<=2||prev?.soreness==='high'||(prev?.sleep!=null&&prev.sleep<6))return {title:'A lighter day is a smart day.',text:'Your last check-in suggests you need recovery. Today’s workout is an easy recovery session. Keep regular meals; there is no need to compensate by eating less.'};
 if(prev?.diet==='hard')return {title:'Let’s make food feel easier.',text:'Today’s meals favor quicker preparation. Batch-cook dal, keep roasted chana handy and aim for consistency over perfection.'};
 if(used.p<t.protein*.5)return {title:'Build your next meal around protein.',text:`You have logged ${used.p} g so far. Try dal, soya${p.diet==='veg'?', paneer':', eggs'}${p.diet==='nonveg'?' or chicken':''}, alongside vegetables and a grain you enjoy.`};
 return {title:'You’re building something that lasts.',text:'Keep your next step small: a balanced meal, a short walk, or an earlier bedtime. Your habits matter more than any one number.'};
}
