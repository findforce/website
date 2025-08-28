function addResourceHints() {
  var hints = [
    {
      rel: "dns-prefetch",
      href: "//chromewebstore.google.com",
    },
    {
      rel: "preconnect",
      href: "https://chromewebstore.google.com",
      crossorigin: true,
    },
  ];

  hints.forEach(function addHint(hint) {
    var link = document.createElement("link");
    link.rel = hint.rel;
    link.href = hint.href;
    if (hint.crossorigin) {
      link.crossOrigin = "anonymous";
    }
    document.head.appendChild(link);
  });
}

function optimizeInteractions() {
  var buttons = document.querySelectorAll(".btn-primary");
  var hasPreloaded = false;

  buttons.forEach(function optimizeButton(button) {
    button.addEventListener(
      "mouseenter",
      function preloadOnHover() {
        if (hasPreloaded) {
          return;
        }
        hasPreloaded = true;

        var link = document.createElement("link");
        link.rel = "prefetch";
        link.href = button.href;
        document.head.appendChild(link);
      },
      { once: true, passive: true },
    );
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", function initialize() {
    setTimeout(addResourceHints, 100);
    setTimeout(optimizeInteractions, 200);
  });
} else {
  setTimeout(addResourceHints, 100);
  setTimeout(optimizeInteractions, 200);
}
