import { c as createAstro, a as createComponent, d as renderTemplate, e as addAttribute, m as maybeRenderHead, g as renderSlot, k as renderHead, r as renderComponent, b as renderScript, s as spreadAttributes, u as unescapeHTML } from "./astro/server.DeFkX6hJ.js";
/* empty css                         */
import "kleur/colors";
import "clsx";
var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(cooked.slice()) }));
var _a$1;
const $$Astro$1 = createAstro("https://findforce.io");
const $$Header = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Header;
  return renderTemplate(_a$1 || (_a$1 = __template$1(["", '<div style="\n    background: linear-gradient(90deg, #dc2626 0%, #991b1b 100%);\n    color: #fff;\n    text-align: center;\n    padding: 8px 12px;\n    font-weight: 600;\n    font-size: 14px;\n    line-height: 1.4;\n  " data-astro-cid-3ef6ksr2>\n🚀 JUST LAUNCHED • First 100 users get founder pricing FOR LIFE\n</div> <header role="banner" style="\n    background: #fff;\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n    position: sticky;\n    top: 0;\n    z-index: 100;\n  " data-astro-cid-3ef6ksr2> <div class="container" data-astro-cid-3ef6ksr2> <div class="header-content" data-astro-cid-3ef6ksr2> <div class="logo-section" data-astro-cid-3ef6ksr2> <a href="/" style="text-decoration: none; display: flex; align-items: center" aria-label="FindForce Home" data-astro-cid-3ef6ksr2> <svg role="img" aria-label="FindForce logo" width="150" height="36" viewBox="0 0 150 36" fill="none" data-astro-cid-3ef6ksr2> <rect x="2" y="2" width="32" height="32" rx="8" fill="#2563eb" data-astro-cid-3ef6ksr2></rect> <circle cx="18" cy="18" r="10" fill="#fff" data-astro-cid-3ef6ksr2></circle> <text x="18" y="23" text-anchor="middle" fill="#2563eb" font-family="system-ui" font-size="14" font-weight="700" data-astro-cid-3ef6ksr2>\n@\n</text> <text x="42" y="24" fill="#1a1a1a" font-family="system-ui" font-size="20" font-weight="700" data-astro-cid-3ef6ksr2>\nFindForce\n</text> </svg> </a> <span style="\n            background: #fbbf24;\n            color: #451a03;\n            padding: 4px 12px;\n            border-radius: 20px;\n            font-size: 12px;\n            font-weight: 600;\n            margin-left: 16px;\n          " data-astro-cid-3ef6ksr2>LIVE NOW</span> </div> <nav aria-label="Primary Navigation" class="desktop-nav" data-astro-cid-3ef6ksr2> <a href="/blog" style="\n            color: #4b5563;\n            text-decoration: none;\n            font-weight: 500;\n            font-size: 14px;\n          " data-astro-cid-3ef6ksr2>Blog</a> <a href="/changelog" style="\n            color: #4b5563;\n            text-decoration: none;\n            font-weight: 500;\n            font-size: 14px;\n          " data-astro-cid-3ef6ksr2>Changelog</a> <a href="/#guarantee" style="\n            color: #4b5563;\n            text-decoration: none;\n            font-weight: 500;\n            font-size: 14px;\n          " data-astro-cid-3ef6ksr2>Our Guarantee</a> <a href="/#pricing" style="\n            color: #4b5563;\n            text-decoration: none;\n            font-weight: 500;\n            font-size: 14px;\n          " data-astro-cid-3ef6ksr2>Pricing</a> <a href="https://chromewebstore.google.com/detail/ilebiijfdkmnnhkngehmiggngoeoenbg?utm_source=website&utm_medium=header&utm_campaign=launch" data-pirsch-event="webstore_clicked" data-pirsch-meta-source="header_desktop"', ' data-pirsch-non-interactive class="btn-primary" style="font-size: 12px; padding: 8px 16px" target="_blank" rel="noopener" data-astro-cid-3ef6ksr2>\nInstall from Chrome Store →\n</a> </nav> <button class="hamburger" id="hamburger-btn" aria-label="Toggle mobile menu" aria-expanded="false" data-astro-cid-3ef6ksr2> <span data-astro-cid-3ef6ksr2></span> <span data-astro-cid-3ef6ksr2></span> <span data-astro-cid-3ef6ksr2></span> </button> </div> </div> <div class="mobile-menu" id="mobileMenu" data-astro-cid-3ef6ksr2> <div style="display: flex; flex-direction: column; gap: 20px" data-astro-cid-3ef6ksr2> <a href="/blog" style="\n          color: #1a1a1a;\n          text-decoration: none;\n          font-weight: 500;\n          padding: 15px 0;\n          border-bottom: 1px solid #e5e7eb;\n          font-size: 16px;\n        " class="mobile-link" data-astro-cid-3ef6ksr2>Blog</a> <a href="/changelog" style="\n          color: #1a1a1a;\n          text-decoration: none;\n          font-weight: 500;\n          padding: 15px 0;\n          border-bottom: 1px solid #e5e7eb;\n          font-size: 16px;\n        " class="mobile-link" data-astro-cid-3ef6ksr2>Changelog</a> <a href="#guarantee" style="\n          color: #1a1a1a;\n          text-decoration: none;\n          font-weight: 500;\n          padding: 15px 0;\n          border-bottom: 1px solid #e5e7eb;\n          font-size: 16px;\n        " class="mobile-link" data-astro-cid-3ef6ksr2>Our Guarantee</a> <a href="#pricing" style="\n          color: #1a1a1a;\n          text-decoration: none;\n          font-weight: 500;\n          padding: 15px 0;\n          border-bottom: 1px solid #e5e7eb;\n          font-size: 16px;\n        " class="mobile-link" data-astro-cid-3ef6ksr2>Pricing</a> <a href="https://chromewebstore.google.com/detail/ilebiijfdkmnnhkngehmiggngoeoenbg?utm_source=website&utm_medium=mobile_header&utm_campaign=launch" data-pirsch-event="webstore_clicked" data-pirsch-meta-source="header_mobile"', ` data-pirsch-non-interactive class="btn-primary" style="margin-top: 10px; font-size: 16px; padding: 14px 20px" target="_blank" rel="noopener" data-astro-cid-3ef6ksr2>
Install from Chrome Store →
</a> </div> </div> </header> <script type="module">
  function initializeHeader() {
    var menu = document.getElementById("mobileMenu");
    var hamburger = document.getElementById("hamburger-btn");
    var mobileLinks = document.querySelectorAll(".mobile-link");

    if (!menu || !hamburger) {return;}

    function toggleMobileMenu() {
      var isActive = menu.classList.contains("active");
      menu.classList.toggle("active");
      hamburger.classList.toggle("active");
      hamburger.setAttribute("aria-expanded", (!isActive).toString());
    }

    function closeMobileMenu() {
      menu.classList.remove("active");
      hamburger.classList.remove("active");
      hamburger.setAttribute("aria-expanded", "false");
    }

    hamburger.addEventListener("click", toggleMobileMenu, { passive: true });

    mobileLinks.forEach(function addListener(link) {
      link.addEventListener("click", closeMobileMenu, { passive: true });
    });

    document.addEventListener("click", function handleOutsideClick(event) {
      var isClickInsideMenu = menu.contains(event.target);
      var isClickOnHamburger = hamburger.contains(event.target);

      if (!isClickInsideMenu && !isClickOnHamburger && menu.classList.contains("active")) {
        closeMobileMenu();
      }
    }, { passive: true });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeHeader);
  } else {
    initializeHeader();
  }
<\/script> `])), maybeRenderHead(), addAttribute(Astro2.url.pathname, "data-pirsch-meta-page_url"), addAttribute(Astro2.url.pathname, "data-pirsch-meta-page_url"));
}, "/home/runner/work/landing-page/landing-page/src/components/Header.astro", void 0);
const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="footer" data-astro-cid-sz7xmlte> <div class="container" data-astro-cid-sz7xmlte> <p class="copyright" data-astro-cid-sz7xmlte>
© FindForce by Developer Friendly OÜ. All rights reserved.
<span class="flag" data-astro-cid-sz7xmlte>🇪🇪</span> </p> <div class="footer-links" data-astro-cid-sz7xmlte> <div class="footer-column" data-astro-cid-sz7xmlte> <h4 class="column-title" data-astro-cid-sz7xmlte>Legal & Policies</h4> <a href="/terms" class="footer-link" data-astro-cid-sz7xmlte>Terms</a> <a href="/privacy" class="footer-link" data-astro-cid-sz7xmlte>Privacy</a> <a href="/dpa" class="footer-link" data-astro-cid-sz7xmlte>Data Processing Agreement</a> <a href="/cookie-policy" class="footer-link" data-astro-cid-sz7xmlte>Cookie Policy</a> <a href="/security" class="footer-link" data-astro-cid-sz7xmlte>Security</a> </div> <div class="footer-column" data-astro-cid-sz7xmlte> <h4 class="column-title" data-astro-cid-sz7xmlte>Free Resources</h4> <a href="/complete-gdpr-compliant-guide" class="footer-link" data-astro-cid-sz7xmlte>Complete GDPR Email Finding Guide 2025</a> <a href="/roi-calculator" class="footer-link" data-astro-cid-sz7xmlte>Sales Productivity ROI Calculator</a> <a href="/benchmark-report" class="footer-link" data-astro-cid-sz7xmlte>Sales Productivity Benchmark Report</a> <a href="/download-gdpr-checklist" class="footer-link" data-astro-cid-sz7xmlte>Download GDPR Checklist</a> </div> <div class="footer-column" data-astro-cid-sz7xmlte> <h4 class="column-title" data-astro-cid-sz7xmlte>Connect</h4> <a href="mailto:contact@findforce.io" class="footer-link" data-astro-cid-sz7xmlte>contact@findforce.io</a> <a href="/blog" class="footer-link" data-astro-cid-sz7xmlte>Blog</a> <a href="/changelog" class="footer-link" data-astro-cid-sz7xmlte>Changelog</a> <a href="https://www.youtube.com/@findforce" class="footer-link" rel="noopener" target="_blank" data-astro-cid-sz7xmlte>YouTube</a> <a href="https://blog.findforce.io" class="footer-link" rel="noopener" target="_blank" data-astro-cid-sz7xmlte>Medium</a> <a href="https://x.com/findforce" class="footer-link" rel="noopener" target="_blank" data-astro-cid-sz7xmlte>X</a> <a href="http://linkedin.com/company/findforce" class="footer-link" rel="noopener" target="_blank" data-astro-cid-sz7xmlte>LinkedIn</a> </div> </div> </div> </footer> `;
}, "/home/runner/work/landing-page/landing-page/src/components/Footer.astro", void 0);
var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://findforce.io");
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  var {
    title = "FindForce - Just Launched on Chrome Store | Be First to 95% Email Accuracy",
    description = "Brand new on Chrome Store. Join the first 100 users and lock in founder pricing forever. 95% email accuracy or your money back.",
    keywords = "chrome extension launch, new sales tool, email finder chrome store, early adopter sales software",
    ogImage = "https://findforce.io/og-image.png",
    ogTitle,
    ogDescription,
    twitterCard = "summary_large_image",
    twitterTitle,
    twitterDescription,
    twitterImage,
    twitterImageAlt = "FindForce - Email finder Chrome extension preview",
    canonical = "https://findforce.io/",
    noindex = false,
    additionalMeta = [],
    structuredData
  } = Astro2.props;
  var finalOgTitle = ogTitle || title;
  var finalOgDescription = ogDescription || description;
  var finalTwitterTitle = twitterTitle || title;
  var finalTwitterDescription = twitterDescription || description;
  var finalTwitterImage = twitterImage || ogImage;
  return renderTemplate`<html lang="en" data-astro-cid-37fxchfa> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>${title}</title><link rel="dns-prefetch" href="//chromewebstore.google.com"><link rel="dns-prefetch" href="//analytics.findforce.io"><link rel="preconnect" href="https://analytics.findforce.io" crossorigin><meta name="description"${addAttribute(description, "content")}><meta name="keywords"${addAttribute(keywords, "content")}><meta name="robots"${addAttribute(noindex ? "noindex, nofollow" : "index, follow", "content")}><link rel="canonical"${addAttribute(canonical || Astro2.url.href, "href")}><link rel="sitemap" href="/sitemap-index.xml"><meta property="og:title"${addAttribute(finalOgTitle, "content")}><meta property="og:description"${addAttribute(finalOgDescription, "content")}><meta property="og:image"${addAttribute(ogImage, "content")}><meta property="og:image:width" content="1200"><meta property="og:image:height" content="630"><meta property="og:type" content="website"><meta property="og:url"${addAttribute(Astro2.url.href, "content")}><meta property="og:site_name" content="FindForce"><meta name="twitter:card"${addAttribute(twitterCard, "content")}><meta name="twitter:title"${addAttribute(finalTwitterTitle, "content")}><meta name="twitter:description"${addAttribute(finalTwitterDescription, "content")}><meta name="twitter:image"${addAttribute(finalTwitterImage, "content")}><meta name="twitter:image:alt"${addAttribute(twitterImageAlt, "content")}><meta name="twitter:site" content="@findforce"><meta name="twitter:creator" content="@findforce">${additionalMeta.map(function renderMeta(meta) {
    return renderTemplate`<meta${spreadAttributes(meta, void 0, { "class": "astro-37fxchfa" })}>`;
  })}<link rel="icon" type="image/x-icon" href="/favicon.ico"><link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"><link rel="manifest" href="/site.webmanifest"><meta name="theme-color" content="#2563eb"><meta name="msapplication-TileColor" content="#2563eb">${structuredData && renderTemplate(_a || (_a = __template(['<script type="application/ld+json">', "<\/script>"])), unescapeHTML(JSON.stringify(structuredData)))}${renderSlot($$result, $$slots["head"])}${renderHead()}</head> <body data-astro-cid-37fxchfa> <div class="page-wrapper" data-astro-cid-37fxchfa> ${renderComponent($$result, "Header", $$Header, { "data-astro-cid-37fxchfa": true })} <main class="main-content" role="main" id="main-content" data-astro-cid-37fxchfa> ${renderSlot($$result, $$slots["default"])} </main> ${renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-37fxchfa": true })} </div> ${renderScript($$result, "/home/runner/work/landing-page/landing-page/src/layouts/BaseLayout.astro?astro&type=script&index=0&lang.ts")} </body> </html> `;
}, "/home/runner/work/landing-page/landing-page/src/layouts/BaseLayout.astro", void 0);
export {
  $$BaseLayout as $
};
