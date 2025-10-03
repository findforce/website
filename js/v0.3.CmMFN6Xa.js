import { n as createVNode, F as Fragment, _ as __astro_tag_component__ } from "./astro/server.CL5zRllf.js";
import "clsx";
const frontmatter = {
  "version": "v0.3",
  "title": "Performance & Reliability Improvements v0.3",
  "description": "Faster email verification, improved accuracy with top 3 results, and enhanced user history tracking for better transparency.",
  "seoTitle": "FindForce v0.3.0 - Faster Email Finding & Better Results",
  "seoDescription": "New update brings faster email verification, cleaner results with top 3 matches, and complete verification history for transparency.",
  "releaseDate": "2025-08-30T00:00:00.000Z",
  "downloadUrl": "https://chromewebstore.google.com/detail/ilebiijfdkmnnhkngehmiggngoeoenbg?utm_source=website&utm_medium=web&utm_campaign=changelog_v0.3.0&utm_content=footer",
  "highlights": ["Faster email verification with 10-second timeout", "Cleaner results - only top 3 most accurate emails shown", "Complete verification history for full transparency"],
  "draft": false
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "whats-new",
    "text": "What’s New"
  }, {
    "depth": 2,
    "slug": "performance-improvements",
    "text": "Performance Improvements"
  }, {
    "depth": 2,
    "slug": "whats-next",
    "text": "What’s Next"
  }];
}
function _createMdxContent(props) {
  const _components = {
    h2: "h2",
    p: "p",
    strong: "strong",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.h2, {
      id: "whats-new",
      children: "What’s New"
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "Faster Email Verification"
      }), "\nWe’ve optimized our verification process with a 10-second timeout, ensuring you get results quickly without waiting for slow responses."]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "Cleaner Results"
      }), "\nWhen multiple emails are found, we now show only the top 3 most accurate results to reduce confusion and help you focus on the best options."]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "Complete Verification History"
      }), "\nTrack every email verification you’ve made with our new history feature. See what you’ve searched for and when, giving you complete transparency and control over your data."]
    }), "\n", createVNode(_components.h2, {
      id: "performance-improvements",
      children: "Performance Improvements"
    }), "\n", createVNode(_components.p, {
      children: "Behind the scenes, we’ve made significant improvements to make FindForce faster and more reliable. The extension now handles background processes more efficiently, resulting in a smoother user experience."
    }), "\n", createVNode(_components.h2, {
      id: "whats-next",
      children: "What’s Next"
    }), "\n", createVNode(_components.p, {
      children: "We’re continuing to focus on speed and accuracy improvements. Stay tuned for more features that will make your email finding even more efficient!"
    })]
  });
}
function MDXContent(props = {}) {
  const { wrapper: MDXLayout } = props.components || {};
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}
const url = "src/content/changelogs/v0.3.mdx";
const file = "/home/runner/work/landing-page/landing-page/src/content/changelogs/v0.3.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment, ...props.components }
});
Content[Symbol.for("mdx-component")] = true;
Content[Symbol.for("astro.needsHeadRendering")] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/runner/work/landing-page/landing-page/src/content/changelogs/v0.3.mdx";
__astro_tag_component__(Content, "astro:jsx");
export {
  Content,
  Content as default,
  file,
  frontmatter,
  getHeadings,
  url
};
