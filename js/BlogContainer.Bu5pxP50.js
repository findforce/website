import { c as createAstro, a as createComponent, m as maybeRenderHead, e as addAttribute, b as renderScript, d as renderTemplate } from "./astro/server.CL5zRllf.js";
import "kleur/colors";
import "clsx";
/* empty css                        */
const $$Astro = createAstro("https://findforce.io");
const $$BlogContainer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BlogContainer;
  var defaultAuthor = "FindForce Team";
  var {
    posts,
    showImages = true,
    showTags = true,
    showAuthor = true,
    showDescription = true,
    maxPosts,
    layout = "list",
    imagePosition = "left",
    className = ""
  } = Astro2.props;
  var displayPosts = maxPosts ? posts.slice(0, maxPosts) : posts;
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(`blog-container ${layout} ${className}`, "class")} aria-label="Blog posts" data-astro-cid-koyrrpkx> <div class="posts-wrapper" data-astro-cid-koyrrpkx> ${displayPosts.map(function renderPost(post) {
    return renderTemplate`<article class="post-card" data-astro-cid-koyrrpkx> <a${addAttribute(`/blog/${post.slug}`, "href")} class="post-card-link"${addAttribute(`Read article: ${post.data.title}`, "aria-label")} data-astro-cid-koyrrpkx> ${showImages && post.data.coverImage && renderTemplate`<div class="post-image" data-astro-cid-koyrrpkx> <img${addAttribute(post.data.coverImage, "src")}${addAttribute(post.data.title, "alt")} loading="lazy" width="300" height="200" data-astro-cid-koyrrpkx> </div>`} <div class="post-content" data-astro-cid-koyrrpkx> <div class="post-header" data-astro-cid-koyrrpkx> <h3 class="post-title" data-astro-cid-koyrrpkx>${post.data.title}</h3> ${showDescription && post.data.description && renderTemplate`<p class="post-description" data-astro-cid-koyrrpkx>${post.data.description}</p>`} </div> <div class="post-meta" data-astro-cid-koyrrpkx> <div class="meta-left" data-astro-cid-koyrrpkx> <time class="post-date"${addAttribute(post.data.publishDate.toISOString(), "datetime")} data-astro-cid-koyrrpkx> ${post.data.publishDate.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric"
    })} </time> ${showAuthor && renderTemplate`<span class="post-author" data-astro-cid-koyrrpkx>by ${post.data.author || defaultAuthor}</span>`} </div> ${showTags && post.data.tags && post.data.tags.length > 0 && renderTemplate`<div class="post-tags" data-tags-container data-astro-cid-koyrrpkx> ${post.data.tags.slice(0, 3).map(function createTag(tag) {
      return renderTemplate`<span class="tag"${addAttribute(tag, "data-tag")} data-tag-link role="button" tabindex="0" data-astro-cid-koyrrpkx> ${tag} </span>`;
    })} </div>`} </div> </div> </a> </article>`;
  })} </div> </section> ${renderScript($$result, "/home/runner/work/landing-page/landing-page/src/components/BlogContainer.astro?astro&type=script&index=0&lang.ts")} `;
}, "/home/runner/work/landing-page/landing-page/src/components/BlogContainer.astro", void 0);
export {
  $$BlogContainer as $
};
