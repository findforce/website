import { c as createAstro, a as createComponent, m as maybeRenderHead, e as addAttribute, d as renderTemplate } from "./astro/server.CL5zRllf.js";
import "kleur/colors";
import "clsx";
import "./CTAButton_astro_astro_type_style_index_0_lang.6db35ec8.l0sNRNKZ.js";
const $$Astro = createAstro("https://findforce.io");
const $$CTAButton = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$CTAButton;
  var {
    headline,
    subheadline,
    primaryAction,
    secondaryAction,
    guarantees,
    testimonial,
    urgency,
    stats,
    riskReversal
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="conversion-cta" data-astro-cid-pxxnplno> <div class="cta-container" data-astro-cid-pxxnplno> ${stats && renderTemplate`<div class="stats-bar" data-astro-cid-pxxnplno> ${stats.users && renderTemplate`<div class="stat-item" data-astro-cid-pxxnplno> <span class="stat-number" data-astro-cid-pxxnplno>${stats.users}</span> <span class="stat-label" data-astro-cid-pxxnplno>Teams Trust Us</span> </div>`} ${stats.accuracy && renderTemplate`<div class="stat-item" data-astro-cid-pxxnplno> <span class="stat-number" data-astro-cid-pxxnplno>${stats.accuracy}</span> <span class="stat-label" data-astro-cid-pxxnplno>Accuracy Rate</span> </div>`} ${stats.satisfaction && renderTemplate`<div class="stat-item" data-astro-cid-pxxnplno> <span class="stat-number" data-astro-cid-pxxnplno>${stats.satisfaction}</span> <span class="stat-label" data-astro-cid-pxxnplno>Satisfaction</span> </div>`} </div>`} <div class="main-content" data-astro-cid-pxxnplno> <div class="cta-content" data-astro-cid-pxxnplno> <h2 data-astro-cid-pxxnplno>${headline}</h2> <p class="subheadline" data-astro-cid-pxxnplno>${subheadline}</p> ${urgency && renderTemplate`<div${addAttribute(`urgency-badge ${urgency.type}`, "class")} data-astro-cid-pxxnplno> <span class="urgency-icon" data-astro-cid-pxxnplno>⚡</span> ${urgency.text} </div>`} <div class="cta-actions" data-astro-cid-pxxnplno> <a${addAttribute(primaryAction.href, "href")} class="primary-button" data-astro-cid-pxxnplno> <span class="button-content" data-astro-cid-pxxnplno> ${primaryAction.text} <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" class="arrow-icon" data-astro-cid-pxxnplno> <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" data-astro-cid-pxxnplno></path> </svg> </span> </a> ${secondaryAction && renderTemplate`<a${addAttribute(secondaryAction.href, "href")} class="secondary-button" data-astro-cid-pxxnplno> ${secondaryAction.text} </a>`} </div> ${riskReversal && renderTemplate`<div class="risk-reversal" data-astro-cid-pxxnplno> <span class="shield-icon" data-astro-cid-pxxnplno>🛡️</span> ${riskReversal} </div>`} <div class="guarantees" data-astro-cid-pxxnplno> ${guarantees.map(function renderGuarantee(guarantee) {
    return renderTemplate`<div class="guarantee-item" data-astro-cid-pxxnplno> <span class="checkmark" data-astro-cid-pxxnplno>✓</span> ${guarantee} </div>`;
  })} </div> </div> ${testimonial && renderTemplate`<div class="testimonial-section" data-astro-cid-pxxnplno> <div class="testimonial" data-astro-cid-pxxnplno> <div class="quote-icon" data-astro-cid-pxxnplno>"</div> <p data-astro-cid-pxxnplno>${testimonial.text}</p> <footer data-astro-cid-pxxnplno> <div class="author-avatar" data-astro-cid-pxxnplno> ${testimonial.author.split(" ").map(function getInitial(name) {
    return name.charAt(0);
  }).join("")} </div> <div class="author-info" data-astro-cid-pxxnplno> <strong data-astro-cid-pxxnplno>${testimonial.author}</strong> <span data-astro-cid-pxxnplno>${testimonial.role}</span> <span class="company" data-astro-cid-pxxnplno>${testimonial.company}</span> </div> </footer> </div> </div>`} </div> </div> </section> `;
}, "/home/runner/work/landing-page/landing-page/src/components/CTAButton.astro", void 0);
