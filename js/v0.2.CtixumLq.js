import { n as createVNode, F as Fragment, _ as __astro_tag_component__ } from "./astro/server.DeFkX6hJ.js";
import "clsx";
const frontmatter = {
  "version": "v0.2",
  "title": "What's New in FindForce v0.2",
  "description": "Latest updates and improvements in FindForce v0.2 - see what's new in your favorite email finder.",
  "seoTitle": "What's New in FindForce v0.2 | Changelog",
  "seoDescription": "Latest updates and improvements in FindForce v0.2 - enhanced accuracy, authentication module, and better user experience.",
  "releaseDate": "2025-08-27T00:00:00.000Z",
  "downloadUrl": "https://chromewebstore.google.com/detail/ilebiijfdkmnnhkngehmiggngoeoenbg?utm_source=website&utm_medium=changelog&utm_campaign=v0.2&utm_content=footer",
  "highlights": ["Added authentication module", "Improved accuracy rate to 97%", "Enhanced domain verification algorithms", "Client-side form validation", "New confidence score indicator"],
  "draft": false
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "new-features",
    "text": "New Features"
  }, {
    "depth": 2,
    "slug": "improvements",
    "text": "Improvements"
  }, {
    "depth": 2,
    "slug": "bug-fixes",
    "text": "Bug Fixes"
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
      id: "new-features",
      children: "New Features"
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "Authentication Module"
      }), "\nAdded comprehensive authentication system for better security and user management."]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "Confidence Score Indicator"
      }), "\nNew confidence score indicator shows verification strength for each email found, helping you make better decisions about email quality."]
    }), "\n", createVNode(_components.h2, {
      id: "improvements",
      children: "Improvements"
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "Enhanced Accuracy"
      }), "\nImproved accuracy rate to 97% with enhanced domain verification algorithms, ensuring you get the most reliable email addresses."]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "Better User Experience"
      }), "\nAdded client-side form validation for better user experience, reducing errors and improving workflow efficiency."]
    }), "\n", createVNode(_components.h2, {
      id: "bug-fixes",
      children: "Bug Fixes"
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "LinkedIn Integration"
      }), "\nFixed autofill issues on LinkedIn profile pages, ensuring seamless integration with your prospecting workflow."]
    }), "\n", createVNode(_components.h2, {
      id: "whats-next",
      children: "What’s Next"
    }), "\n", createVNode(_components.p, {
      children: "We’re continuously working to improve FindForce. Stay tuned for more updates and new features coming soon!"
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
const url = "src/content/changelogs/v0.2.mdx";
const file = "/home/runner/work/landing-page/landing-page/src/content/changelogs/v0.2.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment, ...props.components }
});
Content[Symbol.for("mdx-component")] = true;
Content[Symbol.for("astro.needsHeadRendering")] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/runner/work/landing-page/landing-page/src/content/changelogs/v0.2.mdx";
__astro_tag_component__(Content, "astro:jsx");
export {
  Content,
  Content as default,
  file,
  frontmatter,
  getHeadings,
  url
};
