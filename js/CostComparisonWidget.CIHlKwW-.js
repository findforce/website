import { a as createComponent, c as createAstro, m as maybeRenderHead, e as addAttribute, d as renderTemplate } from "./astro/server.CL5zRllf.js";
import "kleur/colors";
import "clsx";
/* empty css                                                                           */
const $$Astro = createAstro("https://findforce.io");
const $$CostComparisonWidget = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$CostComparisonWidget;
  var {
    title,
    competitorName,
    data,
    theme = "default",
    showPercentage = true,
    subtitle,
    highlight = false
  } = Astro2.props;
  var slug = Astro2.url.pathname.split("/").filter(Boolean).pop() || "comparison";
  slug = slug.toLowerCase().replace(/\s+/g, "_").replace(/[^\w-]/g, "").replaceAll("-", "_");
  var ctaLink = `https://chromewebstore.google.com/detail/ilebiijfdkmnnhkngehmiggngoeoenbg?utm_source=comparison&utm_medium=web&utm_campaign=${slug}&utm_content=start_saving_today`;
  function formatPrice(price, currency = "$") {
    return `${currency}${price.toLocaleString()}`;
  }
  function calculateSavings(competitorPrice, findforcePrice, showPercent = true) {
    var savings = competitorPrice - findforcePrice;
    var savingsPercent = Math.round(savings / competitorPrice * 100);
    return {
      amount: savings,
      percent: savingsPercent,
      display: showPercent ? `${savingsPercent}% less` : ""
    };
  }
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`cost-comparison-widget theme-${theme} ${highlight ? "highlight" : ""}`, "class")} data-astro-cid-4xmrxf4z> <div class="widget-header" data-astro-cid-4xmrxf4z> <h3 data-astro-cid-4xmrxf4z>${title}</h3> ${subtitle && renderTemplate`<p class="subtitle" data-astro-cid-4xmrxf4z>${subtitle}</p>`} </div> <div class="comparison-container" data-astro-cid-4xmrxf4z> <div class="comparison-table" data-astro-cid-4xmrxf4z> <div class="table-header" data-astro-cid-4xmrxf4z> <div class="volume-col" data-astro-cid-4xmrxf4z> <span class="header-text" data-astro-cid-4xmrxf4z>Volume</span> </div> <div class="competitor-col" data-astro-cid-4xmrxf4z> <span class="header-text" data-astro-cid-4xmrxf4z>${competitorName}</span> <span class="header-badge competitor-badge" data-astro-cid-4xmrxf4z>Current Cost</span> </div> <div class="findforce-col" data-astro-cid-4xmrxf4z> <span class="best-value-badge" data-astro-cid-4xmrxf4z>✓ BEST VALUE</span> <span class="header-text" data-astro-cid-4xmrxf4z>FindForce</span> <span class="header-badge findforce-badge" data-astro-cid-4xmrxf4z>Unlimited</span> </div> <div class="savings-col" data-astro-cid-4xmrxf4z> <span class="header-text" data-astro-cid-4xmrxf4z>You Save</span> <span class="header-badge savings-badge" data-astro-cid-4xmrxf4z>Monthly</span> </div> </div> ${data.map(function renderRow(row, index) {
    var savings = calculateSavings(
      row.competitor.price,
      row.findforce.price,
      showPercentage
    );
    var competitorCurrency = row.competitor.currency || "$";
    var findforceCurrency = row.findforce.currency || "$";
    return renderTemplate`<div${addAttribute(`table-row ${index % 2 === 0 ? "even" : "odd"}`, "class")} data-astro-cid-4xmrxf4z> <div class="volume-col" data-astro-cid-4xmrxf4z> <div class="volume-content" data-astro-cid-4xmrxf4z> <strong data-astro-cid-4xmrxf4z>${row.volume}</strong> </div> </div> <div class="competitor-col" data-astro-cid-4xmrxf4z> <div class="price-card competitor-card" data-astro-cid-4xmrxf4z> <div class="plan-name" data-astro-cid-4xmrxf4z>${row.competitor.plan}</div> <div class="price-display" data-astro-cid-4xmrxf4z> <span class="price" data-astro-cid-4xmrxf4z> ${formatPrice(row.competitor.price, competitorCurrency)} </span> <span class="period" data-astro-cid-4xmrxf4z>/mo</span> </div> ${row.competitor.credits && renderTemplate`<div class="credits" data-astro-cid-4xmrxf4z> ${row.competitor.credits.toLocaleString()} credits
</div>`} ${row.competitor.note && renderTemplate`<div class="note" data-astro-cid-4xmrxf4z>${row.competitor.note}</div>`} </div> </div> <div class="findforce-col" data-astro-cid-4xmrxf4z> <div class="price-card findforce-card" data-astro-cid-4xmrxf4z> <div class="plan-name" data-astro-cid-4xmrxf4z> ${row.findforce.plan || "Unlimited"} </div> <div class="price-display" data-astro-cid-4xmrxf4z> <span class="price" data-astro-cid-4xmrxf4z> ${formatPrice(row.findforce.price, findforceCurrency)} </span> <span class="period" data-astro-cid-4xmrxf4z>/mo</span> </div> <div class="credits unlimited" data-astro-cid-4xmrxf4z>∞ verifications</div> </div> </div> <div class="savings-col" data-astro-cid-4xmrxf4z> <div class="savings-card" data-astro-cid-4xmrxf4z> <div class="savings-display" data-astro-cid-4xmrxf4z> <span class="savings-amount" data-astro-cid-4xmrxf4z> ${formatPrice(savings.amount, competitorCurrency)} </span> <span class="savings-period" data-astro-cid-4xmrxf4z>/mo</span> </div> ${showPercentage && renderTemplate`<div class="savings-percent" data-astro-cid-4xmrxf4z>${savings.display}</div>`} </div> </div> </div>`;
  })} </div> </div> <div class="comparison-footer" data-astro-cid-4xmrxf4z> <div class="footer-content" data-astro-cid-4xmrxf4z> <p class="disclaimer" data-astro-cid-4xmrxf4z>
* Prices based on publicly available information as of 2025
</p> <div class="cta-section" data-astro-cid-4xmrxf4z> <a${addAttribute(ctaLink, "href")} target="_blank" rel="noopener" class="cta-button" data-astro-cid-4xmrxf4z>
Start Saving Today - Free Trial
</a> <span class="guarantee" data-astro-cid-4xmrxf4z>No credit card required</span> </div> </div> </div> </div> `;
}, "/home/runner/work/landing-page/landing-page/src/components/CostComparisonWidget.astro", void 0);
export {
  $$CostComparisonWidget as $
};
