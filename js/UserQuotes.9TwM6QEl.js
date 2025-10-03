import { a as createComponent, c as createAstro, m as maybeRenderHead, e as addAttribute, g as renderSlot, d as renderTemplate } from "./astro/server.CL5zRllf.js";
import "kleur/colors";
import "clsx";
/* empty css                                                                 */
const $$Astro = createAstro("https://findforce.io");
const $$UserQuotes = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$UserQuotes;
  var { source, rating, author, text, class: className = "" } = Astro2.props;
  var hasProps = source || rating || author || text;
  var quotesClasses = `user-quotes ${className}`.trim();
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(quotesClasses, "class")} data-astro-cid-xfya2352> ${hasProps ? renderTemplate`<blockquote class="single-quote" data-astro-cid-xfya2352> ${text && renderTemplate`<div class="quote-text" data-astro-cid-xfya2352>${text}</div>`} ${renderSlot($$result, $$slots["default"])} <footer class="quote-footer" data-astro-cid-xfya2352> ${author && renderTemplate`<div class="quote-author" data-astro-cid-xfya2352>${author}</div>`} ${source && renderTemplate`<div class="quote-source" data-astro-cid-xfya2352> ${source} ${rating && renderTemplate`<span class="quote-rating" data-astro-cid-xfya2352> - ${rating}</span>`} </div>`} </footer> </blockquote>` : renderTemplate`<div class="quotes-grid" data-astro-cid-xfya2352> ${renderSlot($$result, $$slots["default"])} </div>`} </div> `;
}, "/home/runner/work/landing-page/landing-page/src/components/UserQuotes.astro", void 0);
export {
  $$UserQuotes as $
};
