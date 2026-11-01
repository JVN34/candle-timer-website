CANDLE TIMER WEBSITE — DEPLOYMENT AND APP STORE CONNECT NOTES

This is a static website (HTML, CSS, JavaScript and the app icon). It requires no server-side code, database, analytics or paid hosting.

BEFORE PUBLISHING — REQUIRED CONFIGURATION
1. Open site-config.js.
2. Replace SUPPORT_EMAIL with a real email address that you own and monitor.
   Example: support@yourdomain.com (only use an address you control).
3. After App Store Connect gives you the public Candle Timer product-page URL,
   paste that full URL into appStoreUrl. Until then, the button links to Apple's
   general Mac App Store page.
4. Do not publish with the support email still set to SUPPORT_EMAIL.

HOSTING FOR FREE
A straightforward option is GitHub Pages:
1. Create or sign in to a GitHub account.
2. Create a public repository, for example: candle-timer-website.
3. Upload the CONTENTS of this folder (index.html, privacy.html, support.html,
   terms.html, acknowledgements.html, styles.css, site-config.js, site.js and
   ). Do not upload just the ZIP file.
4. In the repository, open Settings → Pages.
5. Under Build and deployment, choose Deploy from a branch; select main and
   /(root), then Save.
6. GitHub Pages will publish a public HTTPS URL, usually:
   https://YOUR-GITHUB-USERNAME.github.io/candle-timer-website/
7. Test the homepage, /privacy.html and /support.html in a private/incognito
   browser window, signed out of GitHub. Check them on mobile and desktop.

Other static hosts can also work. Whichever host you choose, the pages must be
public, stable, HTTPS-accessible and not require a login.

APP STORE CONNECT URLS
Once the site is live, use the exact public URLs from your host:
- Privacy Policy URL: https://YOUR-SITE/privacy.html
- macOS Support URL: https://YOUR-SITE/support.html
- Marketing URL (optional): https://YOUR-SITE/

The Privacy Policy URL is required for macOS apps. The Support URL must lead to
actual contact information. Keep the policy and contact information current.
Apple references:
- App privacy: https://developer.apple.com/help/app-store-connect/manage-app-information/manage-app-privacy/
- Platform version information: https://developer.apple.com/help/app-store-connect/reference/app-information/platform-version-information
- App Review Guidelines: https://developer.apple.com/app-store/review/guidelines/

IMPORTANT: PRIVACY LINK INSIDE THE MAC APP
Apple's review guidelines also require a privacy-policy link within the app in
an easily accessible place. Your current AboutView.swift displays the text
“Private by design: no data collected, no network connections.” but does not
currently include a clickable link to the policy. After the website is live,
add the snippet in IN-APP-PRIVACY-LINK-SNIPPET.swift.txt to the app's About view,
replace its placeholder with the exact same https://YOUR-SITE/privacy.html URL,
and rebuild the app. Do this before submitting.

APP PRIVACY DECLARATION
Based on the uploaded source code, the app has no network connections, accounts,
analytics, advertising or tracking, and stores only app preferences locally.
If the final shipped build and any added dependencies have the same behaviour,
select “No, we do not collect data from this app” in App Store Connect. Recheck
if you add analytics, crash reporting, cloud sync or any network feature.

WHAT IS INCLUDED
- index.html: product/about page
- privacy.html: app privacy policy
- support.html: support contact and FAQ
- terms.html: usage terms and timing/financial disclaimer
- acknowledgements.html: MIT attribution for Kline Timer
- site-config.js: support email and App Store product URL settings
- styles.css / site.js: responsive design and small site behaviours
- candle-timer-icon.png: app icon from the uploaded project

The website is a supporting compliance asset. It does not itself guarantee App
Review approval. Ensure the website accurately reflects the submitted build.

ICON UPDATE (1 NOVEMBER 2026)
The website uses the root-level candle-timer-icon.png for the navigation logo, footer logo,
browser favicon and Apple touch icon. The supplied 1024x1024 AppIcon-1024.png is
included at that path. The HTML references include a version query to refresh
browser caches. When updating an existing GitHub Pages repository, upload and
commit the complete contents of this folder, choosing to replace existing files.
Ensure candle-timer-icon.png is uploaded into the repository root, alongside index.html.
