import { n as createVNode, F as Fragment, _ as __astro_tag_component__ } from "./astro/server.DeFkX6hJ.js";
import "clsx";
const frontmatter = {
  "version": "v0.4",
  "title": "Billing & Payments v0.4",
  "description": "Secure payment processing with Creem MoR integration and enhanced transaction reliability for premium features.",
  "seoTitle": "FindForce v0.4.0 - Secure Billing & Payment Processing",
  "seoDescription": "New billing system with secure payment processing, transaction tracking, and reliable checkout experience.",
  "releaseDate": "2025-09-07T00:00:00.000Z",
  "downloadUrl": "https://chromewebstore.google.com/detail/ilebiijfdkmnnhkngehmiggngoeoenbg?utm_source=website&utm_medium=changelog&utm_campaign=v0.4.0&utm_content=footer",
  "highlights": ["Secure payment processing with Creem MoR integration", "Reliable checkout experience with callback verification", "Complete transaction audit trail for transparency"],
  "draft": false
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "whats-new",
    "text": "What’s New"
  }, {
    "depth": 2,
    "slug": "security-improvements",
    "text": "Security Improvements"
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
        children: "Secure Payment Integration"
      }), "\nWe’ve added a comprehensive billing system with Creem MoR payment processing, ensuring your transactions are secure and reliable."]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "Reliable Checkout Experience"
      }), "\nOur new checkout system includes callback verification and secure payment processing, giving you confidence in every transaction."]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "Transaction Transparency"
      }), "\nComplete audit trail of all your transactions and payments, providing full transparency and easy access to your billing history."]
    }), "\n", createVNode(_components.h2, {
      id: "security-improvements",
      children: "Security Improvements"
    }), "\n", createVNode(_components.p, {
      children: "We’ve implemented secure signature verification for all payment transactions, ensuring your payment data is protected against unauthorized access and misuse."
    }), "\n", createVNode(_components.h2, {
      id: "whats-next",
      children: "What’s Next"
    }), "\n", createVNode(_components.p, {
      children: "We’re working on additional payment options and enhanced billing features to give you more flexibility in how you pay for FindForce premium features."
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
const url = "src/content/changelogs/v0.4.mdx";
const file = "/home/runner/work/landing-page/landing-page/src/content/changelogs/v0.4.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment, ...props.components }
});
Content[Symbol.for("mdx-component")] = true;
Content[Symbol.for("astro.needsHeadRendering")] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/runner/work/landing-page/landing-page/src/content/changelogs/v0.4.mdx";
__astro_tag_component__(Content, "astro:jsx");
export {
  Content,
  Content as default,
  file,
  frontmatter,
  getHeadings,
  url
};
