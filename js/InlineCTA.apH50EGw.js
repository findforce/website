import { a as createComponent, c as createAstro, m as maybeRenderHead, e as addAttribute, d as renderTemplate } from "./astro/server.CL5zRllf.js";
import "kleur/colors";
import "clsx";
/* empty css                                                                */
const $$Astro = createAstro("https://findforce.io");
const $$InlineCTA = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$InlineCTA;
  var {
    savingsAmount,
    title,
    description,
    buttonText,
    buttonHref,
    guarantee = "7-day money-back guarantee",
    class: className = ""
  } = Astro2.props;
  var inlineClasses = `inline-cta ${className}`.trim();
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(inlineClasses, "class")} data-astro-cid-og5vuuoo> <div class="savings-highlight" data-astro-cid-og5vuuoo> <h3 data-astro-cid-og5vuuoo>💰 ${savingsAmount}</h3> <p data-astro-cid-og5vuuoo>${description}</p> <a${addAttribute(buttonHref, "href")} target="_blank" rel="noopener" class="cta-button" data-astro-cid-og5vuuoo>${buttonText}</a> <span class="guarantee" data-astro-cid-og5vuuoo>${guarantee}</span> </div> </div> `;
}, "/home/runner/work/landing-page/landing-page/src/components/InlineCTA.astro", void 0);
export {
  $$InlineCTA as $
};
