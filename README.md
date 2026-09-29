# Theoria Analytics website

Static site for GitHub Pages. No build step: upload these files and it works.

## Structure

```
index.html                         Home
services/index.html                All services
services/excel-dashboards/         Dashboards & reports
services/budget-finance-spreadsheets/
services/excel-trackers/
services/excel-calculators/
services/excel-automation/         Power Query & automation
services/excel-repair/             Excel Fix package
pricing/  how-it-works/  faq/  about/  contact/  privacy/
404.html                           Custom "page not found"
sitemap.xml  robots.txt            For search engines
assets/css/style.css               All styles (one file)
assets/js/main.js                  Mobile menu + quote form
assets/img/                        Favicon, logo, social share image
```

## Before you go live (required)

1. **Replace the domain.** Every page uses `https://theoriaanalytics.com` for canonical
   URLs, social previews, the sitemap and the 404 page. Find-and-replace it across all
   files with your real address:
   - Custom domain: `https://yourdomain.com`
   - No custom domain: `https://USERNAME.github.io/REPO` (no trailing slash)
2. **Check the currency.** Structured data lists prices in `CAD`. If you charge in USD,
   find-and-replace `"priceCurrency": "CAD"` with `"priceCurrency": "USD"`.

## Deploy on GitHub Pages

1. Create a repository and upload everything in this folder to the root.
2. Settings → Pages → Source: *Deploy from a branch* → `main` / `root` → Save.
3. Custom domain (recommended): enter it under Settings → Pages, then add the DNS
   records GitHub shows you at your domain registrar. Tick *Enforce HTTPS*.

## After it's live

1. **Google Search Console** (search.google.com/search-console): add your site, verify,
   then submit `sitemap.xml` under *Sitemaps*.
2. **Bing Webmaster Tools**: import from Search Console in one click.
3. **Google Business Profile**: create one as a service-area business. It's free and is
   the biggest local visibility boost available.
4. Test pages at search.google.com/test/rich-results and share a link on LinkedIn/Facebook
   to confirm the preview image shows.

## Optional: receive form submissions directly

The contact form currently opens the visitor's email app with their request pre-filled.
To receive submissions without that step, create a free form at formspree.io, then in
`contact/index.html` change the form tag to:

```html
<form class="form" id="quote-form" action="https://formspree.io/f/YOUR_ID" method="POST">
```

(Removing `data-mode="mailto"` turns off the email-app behaviour.) Update the privacy
page to mention Formspree if you do this.

## If you add Google Analytics

Update `privacy/index.html`. The current policy says the site uses no cookies or analytics.
