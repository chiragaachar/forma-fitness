# Forma — your personal transformation mentor

A complete, browser-based fitness companion with an Indian-food focus. It runs on Vercel without a paid API, a database, or a server. The interface uses a calm cream-and-green design, a desktop sidebar, and mobile bottom navigation.

## Put it online with Vercel

You only need a GitHub account and a Vercel account. You do not need to install anything on your computer for this method.

1. **Extract this ZIP** on your computer. Open the `forma` folder. You should see `package.json`, `index.html`, `app.js`, `engine.js`, `styles.css`, and `vercel.json`.
2. Open **https://github.com/new**, create a repository named `forma-fitness`, and choose **Private** if you prefer. Do not add a template or license during creation.
3. In the new repository, choose **uploading an existing file** (or **Add file → Upload files**). Drag the **contents inside the `forma` folder** into GitHub. Do not upload the ZIP itself. Commit the files.
4. Open **https://vercel.com**, sign in with GitHub, and choose **Add New → Project**.
5. Find `forma-fitness` and click **Import**. If it is not listed, allow Vercel access to that repository through the GitHub integration.
6. Confirm the settings below. The included `vercel.json` already sets the framework, build command and output directory.

| Setting | Value |
| --- | --- |
| Framework Preset | **Other** |
| Root Directory | **./** if `package.json` is at the repository root |
| Build Command | **npm run build** |
| Output Directory | **dist** |
| Install Command | Leave the default |
| Node.js version | **24.x**, or another supported version at least 20 |
| Environment Variables | **None** |

7. Click **Deploy**. Once it finishes, open the production `*.vercel.app` URL shown by Vercel.
8. Complete the setup, log a glass of water, and refresh. Your water log should remain saved. Open the same link on your phone to start a separate personal profile there.

If you uploaded the outer `forma` folder into the repository instead of its contents, set **Root Directory = forma**. A missing `package.json` error usually means the root directory is wrong.

**Free hosting:** Vercel's Hobby plan is free for personal, non-commercial use, subject to its usage limits. A business, paid service, or other commercial launch needs a plan that permits that use. The app has no API or database bills, but hosting is not an unlimited-use guarantee. A free `vercel.app` address is sufficient; buying a domain is optional.

**Future updates:** Edit the source files in GitHub and commit them. Vercel automatically builds another deployment. Keep the same production domain to keep access to that domain's browser-local data. Export a backup before moving to another domain.

Official hosting references, checked 8 October 2026:

- https://vercel.com/docs/plans/hobby
- https://vercel.com/docs/deployments
- https://vercel.com/docs/builds/configure-a-build
- https://vercel.com/docs/project-configuration/vercel-json

## What works

| Area | Included behavior |
| --- | --- |
| Personal setup | Age, gender, formula sex, height, weight, target, goal, activity, food preference, food exclusions, daily budget, training level, equipment, time, steps, sleep and health considerations |
| Meal planning | Breakfast, lunch, snack and dinner with Indian ingredients, weighed quantities, recipes, approximate calories, protein, carbs, fat and cost |
| Food preferences | Vegetarian, eggetarian and non-vegetarian; exclusions for dairy, wheat/gluten, soy, peanuts, eggs and fish; ingredient-name avoidance |
| Swaps | Whole-meal alternatives with recalculated totals; ingredient replacement suggestions with matching portions and nutrition differences |
| Grocery planning | This week's seven menus combined into quantities, grouped categories, persistent checkboxes and a downloadable shopping list |
| Eat-now assistant | Ranks meals using remaining logged calories/protein, selected meal, meal budget, preferences, exclusions and unavailable ingredients |
| Training | Beginner/intermediate/advanced home strength sessions, bodyweight/bands/dumbbells, sets, reps, cues, rest timer, warm-up and recovery days |
| Daily tracking | Planned and custom food entries, water, steps, sleep, exercise completion and workout completion |
| Check-ins | Energy, food adherence, soreness, sleep, workout status and notes; low recovery makes the next day easier; difficult meals favor faster recipes |
| Progress | Weight, waist, hips and chest entries; weight/waist graphs; target milestones; before/latest photo journal; streaks and achievements |
| Mentor | Contextual daily guidance, food habits, sleep/recovery prompts, BMI/BMR/maintenance estimates and transparent calculation methods |
| Data controls | Export/restore a JSON backup, delete local data, bounded photo compression and validation of backup files |

## How to use it

Start with **Build my personal plan**. The dashboard then shows your targets and the next planned meal. In **Nutrition**, select a day, view preparation and quantities, swap a recipe, or mark it as eaten. Swapping a planned recipe does not alter nutrition already logged; undo that logged meal and log the new recipe if necessary.

The grocery list always covers the **current Monday–Sunday week**, including all seven planned days and your swaps. It is a full-week shopping list, not a remaining-days list. Cost estimates use ingredient amounts, not whole retail packs.

Use **What should I eat now?** whenever you need a choice. It uses your food log, so log earlier meals for useful remaining-target suggestions. Logging a suggestion creates a custom food entry; it does not replace the planned menu. Ingredient alternatives are suggestions; use a whole-meal swap for an automatic grocery recalculation.

Complete a **Daily check-in** before the day ends. A low-energy score, high soreness, or under 6 hours of sleep makes the next day's workout a recovery session. Difficult diet adherence prioritizes quicker meals. Calories are never cut as punishment for missed workouts or meals.

Weight entries update your charts and milestones. They do **not** silently change calorie targets. To recalculate with a new body weight or goal, use **Profile & settings → Edit profile**. Editing the profile regenerates planned menus and clears menu swaps; logged food remains unchanged.

## Your data and multiple visitors

- Each visitor has a separate profile saved in their own browser's local storage. Many people can visit the same website, subject to hosting limits.
- **No accounts, cloud database, owner dashboard, automatic device sync, or authentication are included.** The website owner cannot see visitors' plans or logs through this app.
- People using the same browser profile on the same device share that browser's Forma data. Use a separate browser profile for another person.
- Clearing browser data, using a different browser, private browsing, or changing the site domain can remove or separate access to saved data. Export regular backups.
- Backups include health details and photos and are not encrypted. Store them privately. To move devices, export on one device and restore on the other.
- Progress photos are compressed locally to JPEG, with a maximum of 12. The app requests no camera access.
- The app sends no profile, log or photo data to an API. Vercel still handles normal page requests according to its own hosting/privacy policies.

## What the recommendations mean

This is a transparent **rules-based wellness mentor**, not an AI chat service, a qualified personal trainer, or a clinician. There are no API keys or paid model calls. It uses a curated catalog of 23 recipes and 21 ingredients. New recipes, prices and foods can be added in `engine.js`.

Nutrition is approximate. Ingredient weights are dry/raw unless labeled otherwise; milk is in ml. Prices are editable sample Indian costs, not live market prices. The app displays budget/protein/calorie gaps instead of claiming every plan meets every target. Food exclusions do not guarantee allergen-free manufacturing or cross-contact safety.

Targets are starting estimates rather than exact needs. Full formulas, adaptation rules and links to reference sources appear in **Profile & settings → Method & sources**. Training is scheduled on Monday, Wednesday and Friday with recovery between full-body sessions. Session volume depends on level and available time.

Personalized planning is limited to ages 18–80. It pauses when the user flags relevant health considerations or current/target BMI is below 18.5, while keeping habit tracking available. There are no promised weight-loss dates or clinical treatment plans.

## Run it locally (optional)

Install Node.js 24 LTS, open a terminal in this folder, then run:

```sh
npm run build
npm start
```

Open **http://localhost:3000**. No `npm install` is necessary for the app: it has no third-party runtime or build dependencies. Do not double-click `index.html`; ES modules should be served through HTTP.

Run the engine checks with:

```sh
npm test
```

## Files and customization

| File | Purpose |
| --- | --- |
| `index.html` | Page shell, metadata and app loading |
| `app.js` | Views, onboarding, interactions and local persistence |
| `engine.js` | Foods, recipes, formulas, recommendations and workouts |
| `styles.css` | Colors, components and responsive layouts |
| `favicon.svg` | Forma icon |
| `build.mjs` | Copies public assets into `dist` |
| `serve.mjs` | Local preview server |
| `vercel.json` | Deployment settings and security headers |
| `tests/engine.test.mjs` | Dependency-free planning regression tests |
| `dist/` | Ready-built website; rebuilt automatically on Vercel |

To rename the app, replace Forma/forma in the interface and metadata. Keep the storage key unchanged if existing visitors should retain their data. Change colors through the CSS variables at the start of `styles.css`. Adjust sample ingredient prices with `FOODS[id].price` in `engine.js` (rupees per 100 g/ml).

## Troubleshooting

- **404 after deployment:** check Root Directory and that Output Directory is `dist`.
- **Blank page after uploading:** upload all source files, not only `index.html`. Check the browser console for missing `app.js` or `engine.js`.
- **Different data on phone and laptop:** expected. Use export/restore; there is no automatic sync.
- **No suitable meal appears:** the exclusions may remove all recipes for that meal. Log a custom meal or revise exclusions if appropriate.
- **A target is paused:** review health considerations and current/target BMI. Habit tracking still works.
- **Photo or storage warning:** export a backup and remove some photos. Browser storage is limited, especially in private/restricted browsing.
- **Vercel asks for paid features:** this app needs only static hosting. It does not need Analytics, Blob storage, a database, an AI provider or a custom domain.

The project is ready for deployment. It has not been published to your Vercel account.
