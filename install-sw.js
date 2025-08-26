function registerServiceWorker() {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker
      .register("/sw.js")
      .then(function handleRegistration(registration) {
        console.log("SW registered:", registration.scope);

        registration.addEventListener("updatefound", function handleUpdate() {
          var newWorker = registration.installing;
          if (newWorker) {
            newWorker.addEventListener(
              "statechange",
              function handleStateChange() {
                if (
                  newWorker.state === "installed" &&
                  navigator.serviceWorker.controller
                ) {
                  showUpdateAvailable();
                }
              }
            );
          }
        });
      })
      .catch(function handleError(error) {
        console.log("SW registration failed:", error);
      });

    navigator.serviceWorker.addEventListener(
      "message",
      function handleMessage(event) {
        if (event.data && event.data.type === "SW_UPDATE_AVAILABLE") {
          showUpdateAvailable();
        }
      }
    );
  }
}

function showUpdateAvailable() {
  var updateBanner = document.createElement("div");
  updateBanner.style.cssText = `
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          background: #2563eb;
          color: white;
          padding: 12px 20px;
          text-align: center;
          z-index: 10000;
          font-size: 14px;
          font-weight: 600;
        `;
  updateBanner.innerHTML = `
          New version available!
          <button onclick="window.location.reload()" style="background: white; color: #2563eb; border: none; padding: 4px 12px; border-radius: 4px; margin-left: 8px; cursor: pointer; font-weight: 600;">
            Update Now
          </button>
        `;
  document.body.insertBefore(updateBanner, document.body.firstChild);
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", registerServiceWorker);
} else {
  registerServiceWorker();
}
