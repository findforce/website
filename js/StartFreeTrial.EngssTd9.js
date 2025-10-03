import { c as createAstro, a as createComponent, m as maybeRenderHead, e as addAttribute, d as renderTemplate } from "./astro/server.CL5zRllf.js";
import "kleur/colors";
import "clsx";
/* empty css                         */
const $$Astro = createAstro("https://findforce.io");
const $$StartFreeTrial = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$StartFreeTrial;
  var {
    title = "Start Your Free Trial Today",
    subtitle = "Join 500+ sales teams finding verified emails in 5 seconds",
    ctaText = "Start Free Trial →",
    background = "gradient",
    size = "medium",
    utm_source = "website",
    utm_medium = "web",
    utm_campaign = "start_free_trial",
    utm_content = "start_free_trial",
    showTestimonial = false
  } = Astro2.props;
  var backgroundClasses = {
    dark: "bg-gradient-to-r from-gray-900 to-gray-700",
    light: "bg-white",
    gradient: "bg-gradient-to-br from-gray-50 to-gray-200"
  };
  var textClasses = {
    dark: "text-white",
    light: "text-gray-900",
    gradient: "text-gray-900"
  };
  var sizeClasses = {
    small: "py-8",
    medium: "py-12",
    large: "py-16"
  };
  var titleSizes = {
    small: "text-xl md:text-2xl",
    medium: "text-2xl md:text-3xl",
    large: "text-3xl md:text-4xl"
  };
  var subtitleSizes = {
    small: "text-sm",
    medium: "text-base",
    large: "text-lg"
  };
  var ctaUrl = `https://chromewebstore.google.com/detail/ilebiijfdkmnnhkngehmiggngoeoenbg?utm_source=${utm_source}&utm_medium=${utm_medium}&utm_campaign=${utm_campaign}&utm_content=${utm_content}`;
  var testimonialData = {
    text: "Switched from Lusha last month. Saving $370/month with better accuracy. The unlimited model just makes sense.",
    author: "Amanda Foster",
    role: "Director of Sales",
    company: "TechCo"
  };
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(`${backgroundClasses[background]} ${sizeClasses[size]} relative overflow-hidden rounded-lg`, "class")} data-astro-cid-42brrvcx> <div class="absolute inset-0 opacity-30" data-astro-cid-42brrvcx> <div class="absolute top-10 left-10 w-20 h-20 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse-slow" data-astro-cid-42brrvcx></div> <div class="absolute top-20 right-20 w-32 h-32 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse-slow animation-delay-1000" data-astro-cid-42brrvcx></div> <div class="absolute bottom-10 left-20 w-24 h-24 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse-slow animation-delay-2000" data-astro-cid-42brrvcx></div> </div> <div class="container relative z-10" style="max-width: 800px; margin: 0 auto; padding: 0 1.5rem; text-align: center" data-astro-cid-42brrvcx> <div class="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold mb-6 border border-white/30" data-astro-cid-42brrvcx> <svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor" class="text-green-500" data-astro-cid-42brrvcx> <path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" data-astro-cid-42brrvcx></path> </svg> <span${addAttribute(textClasses[background], "class")} data-astro-cid-42brrvcx>Join 500+ Sales Teams</span> </div> <h2${addAttribute(`${titleSizes[size]} font-bold mb-4 ${textClasses[background]} animate-fade-in-up`, "class")} style="font-weight: 700; line-height: 1.2; margin-bottom: 1rem" data-astro-cid-42brrvcx> ${title} </h2> <p${addAttribute(`${subtitleSizes[size]} mb-6 max-w-2xl mx-auto animate-fade-in-up animation-delay-200`, "class")}${addAttribute(`color: ${background === "dark" ? "rgba(255, 255, 255, 0.9)" : "#6b7280"}; margin-bottom: 2rem; line-height: 1.6`, "style")} data-astro-cid-42brrvcx> ${subtitle} </p> <div class="cta-container animate-fade-in-up animation-delay-400" style="display: flex; flex-direction: column; gap: 1rem; justify-content: center; align-items: center; margin-bottom: 1.5rem" data-astro-cid-42brrvcx> <a${addAttribute(ctaUrl, "href")} data-pirsch-event="webstore_clicked" data-pirsch-meta-source="start_free_trial"${addAttribute(Astro2.url.pathname, "data-pirsch-meta-page_url")} data-pirsch-non-interactive${addAttribute(`btn-primary transform transition-all duration-300 hover:scale-105 hover:shadow-2xl group ${size === "large" ? "text-lg" : "text-base"}`, "class")}${addAttribute(`
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: ${background === "dark" ? "#fff" : "linear-gradient(135deg, #2563eb 0%, #3b82f6 100%)"};
          color: ${background === "dark" ? "#1a1a1a" : "#fff"};
          padding: ${size === "large" ? "18px 32px" : size === "medium" ? "16px 28px" : "14px 24px"};
          border-radius: 12px;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 8px 25px rgba(37, 99, 235, 0.3);
          border: none;
          cursor: pointer;
          position: relative;
          overflow: hidden;
        `, "style")} target="_blank" rel="noopener" data-astro-cid-42brrvcx> <span class="relative z-10" data-astro-cid-42brrvcx>${ctaText}</span> <svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor" class="transition-transform group-hover:translate-x-1" data-astro-cid-42brrvcx> <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" data-astro-cid-42brrvcx></path> </svg> <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" data-astro-cid-42brrvcx></div> </a> </div> <div class="flex items-center justify-center gap-6 text-sm animate-fade-in-up animation-delay-600" data-astro-cid-42brrvcx> <div class="flex items-center gap-2" data-astro-cid-42brrvcx> <svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor" class="text-green-500" data-astro-cid-42brrvcx> <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" data-astro-cid-42brrvcx></path> </svg> <span${addAttribute(`color: ${background === "dark" ? "rgba(255, 255, 255, 0.8)" : "#6b7280"}`, "style")} data-astro-cid-42brrvcx>No credit card</span> </div> <div class="flex items-center gap-2" data-astro-cid-42brrvcx> <svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor" class="text-green-500" data-astro-cid-42brrvcx> <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" data-astro-cid-42brrvcx></path> </svg> <span${addAttribute(`color: ${background === "dark" ? "rgba(255, 255, 255, 0.8)" : "#6b7280"}`, "style")} data-astro-cid-42brrvcx>1-click install</span> </div> <div class="flex items-center gap-2" data-astro-cid-42brrvcx> <svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor" class="text-green-500" data-astro-cid-42brrvcx> <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" data-astro-cid-42brrvcx></path> </svg> <span${addAttribute(`color: ${background === "dark" ? "rgba(255, 255, 255, 0.8)" : "#6b7280"}`, "style")} data-astro-cid-42brrvcx>Cancel anytime</span> </div> </div> ${showTestimonial && renderTemplate`<div class="testimonial-content" style="max-width: 500px; margin: 0 auto;" data-astro-cid-42brrvcx> <div class="quote-mark" style="font-size: 3rem; color: rgba(255, 255, 255, 0.4); line-height: 1; margin-bottom: 1rem;" data-astro-cid-42brrvcx>"</div> <p style="font-style: italic; font-size: 1.125rem; line-height: 1.6; margin-bottom: 1.5rem; color: rgba(255, 255, 255, 0.95);" data-astro-cid-42brrvcx> ${testimonialData.text} </p> <div class="author-info" style="display: flex; align-items: center; justify-content: center; gap: 1rem;" data-astro-cid-42brrvcx> <div class="avatar" style="width: 48px; height: 48px; border-radius: 50%; background: rgba(255, 255, 255, 0.2); display: flex; align-items: center; justify-content: center; font-weight: 700; border: 2px solid rgba(255, 255, 255, 0.3);" data-astro-cid-42brrvcx> ${testimonialData.author.split(" ").map(function getInitial(name) {
    return name.charAt(0);
  }).join("")} </div> <div style="text-align: left;" data-astro-cid-42brrvcx> <div style="font-weight: 600; color: white;" data-astro-cid-42brrvcx>${testimonialData.author}</div> <div style="font-size: 0.875rem; color: rgba(255, 255, 255, 0.8);" data-astro-cid-42brrvcx>${testimonialData.role}</div> <div style="font-size: 0.8rem; color: rgba(255, 255, 255, 0.7);" data-astro-cid-42brrvcx>${testimonialData.company}</div> </div> </div> </div>`} </div> </section> `;
}, "/home/runner/work/landing-page/landing-page/src/components/StartFreeTrial.astro", void 0);
export {
  $$StartFreeTrial as $
};
