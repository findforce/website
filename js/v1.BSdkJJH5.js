import { n as createVNode, F as Fragment, _ as __astro_tag_component__ } from "./astro/server.CL5zRllf.js";
import "clsx";
const frontmatter = {
  "version": "v1.0.0",
  "title": "FindForce v1 - Major Release",
  "description": "Search and manage your email history, faster results with caching, and improved email validation for better accuracy.",
  "seoTitle": "FindForce v1.0.0 - Email History & Performance Improvements",
  "seoDescription": "Major update with email search history, faster results, improved validation, and better user experience.",
  "releaseDate": "2025-09-14T00:00:00.000Z",
  "downloadUrl": "https://chromewebstore.google.com/detail/ilebiijfdkmnnhkngehmiggngoeoenbg?utm_source=website&utm_medium=web&utm_campaign=changelog_v1.0.0&utm_content=footer",
  "highlights": ["Search and delete your email history", "Faster results with result caching", "Better email validation prevents checking invalid emails", "Improved interface stability"],
  "draft": false
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "whats-new",
    "text": "What’s New"
  }, {
    "depth": 2,
    "slug": "improvements",
    "text": "Improvements"
  }, {
    "depth": 2,
    "slug": "under-the-hood",
    "text": "Under the Hood"
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
        children: "Email History Management"
      }), "\nYou can now search through your email finding history and delete entries you no longer need. Keep your workspace clean and find past searches quickly."]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "Faster Results"
      }), "\nWe now cache your email searches for 7 days, which means if you search for the same person again, you’ll get instant results without waiting."]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "Smarter Email Validation"
      }), "\nThe extension now checks if an email looks valid before trying to verify it, saving you time and improving accuracy by not wasting checks on obviously broken email addresses."]
    }), "\n", createVNode(_components.h2, {
      id: "improvements",
      children: "Improvements"
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "Better Interface Stability"
      }), "\nFixed layout issues where elements would shift around when you select different options, making the extension feel more polished and predictable."]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "Improved Domain Handling"
      }), "\nBetter support for international domains and complex domain structures, ensuring more accurate email finding across different regions."]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "Enhanced User Plan Loading"
      }), "\nYour subscription details now load faster, and we’ve fixed issues where your quota wouldn’t update properly after purchases."]
    }), "\n", createVNode(_components.h2, {
      id: "under-the-hood",
      children: "Under the Hood"
    }), "\n", createVNode(_components.p, {
      children: "We’ve made the extension more reliable and responsive with various performance improvements and bug fixes that make your email finding experience smoother."
    }), "\n", createVNode(_components.h2, {
      id: "whats-next",
      children: "What’s Next"
    }), "\n", createVNode(_components.p, {
      children: "We’re continuing to focus on making FindForce faster and more accurate. More features for managing your email history and additional performance improvements are coming soon!"
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
const url = "src/content/changelogs/v1.mdx";
const file = "/home/runner/work/landing-page/landing-page/src/content/changelogs/v1.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment, ...props.components }
});
Content[Symbol.for("mdx-component")] = true;
Content[Symbol.for("astro.needsHeadRendering")] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/runner/work/landing-page/landing-page/src/content/changelogs/v1.mdx";
__astro_tag_component__(Content, "astro:jsx");
export {
  Content,
  Content as default,
  file,
  frontmatter,
  getHeadings,
  url
};
