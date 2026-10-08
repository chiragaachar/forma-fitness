# Verification

Checked with Node.js 24 and a Chromium browser in the build environment.

## Planning tests

`npm test` passes all six dependency-free regression suites:

1. BMR arithmetic, activity estimates, goal adjustments and adult/health guardrails.
2. Vegetarian, eggetarian and non-vegetarian menus with multiple exclusion combinations across seven days.
3. Exact grocery-quantity aggregation from generated weekly menus and selected swaps.
4. Recovery adaptation from low energy, high soreness and low/zero sleep; no punitive calorie adjustment.
5. Unavailable ingredients, no-match menus and allowed replacement suggestions.
6. Consecutive-date streaks, date rollover and logged nutrition snapshots.

## Application checks

Automated DOM and browser interaction checks passed for:

- Three-step onboarding and profile persistence.
- Adding water and retaining the total after a browser reload.
- Logging a planned meal and swapping a menu while preserving already logged nutrition.
- Generating weekly groceries and checking shopping items.
- Viewing recipes and ingredient replacements.
- Generating an eat-now recommendation and logging it.
- Saving a low-recovery daily check-in.
- Starting and resetting the rest timer.
- Adding measurements and producing a weight chart.
- Uploading and locally compressing a progress photo.
- Exporting a JSON backup and successfully restoring it.
- Rendering all six main views without JavaScript errors.
- Checking all main views for page-width overflow at 320, 390, 768, 1024 and 1440 pixels.

The desktop and mobile dashboard layouts were visually inspected. Example preview screenshots use a fictional test profile, and no test data is bundled into the app itself.

## Deployment scope

The production `dist` build has been generated. The app has no external runtime dependencies or API requests. Vercel configuration and deployment instructions are included.

This project has **not** been deployed to the user's Vercel account. Hosting-account permissions, Vercel's production response headers, Safari/iOS-specific behavior and long-term storage behavior have not been verified in a live deployment. Nutrition estimates and exercise recommendations have not undergone clinical review.

After deploying, open the production URL, complete a profile, log water, refresh, and export/restore a backup on the intended browser. Use the production domain consistently because browser storage is specific to each origin.
