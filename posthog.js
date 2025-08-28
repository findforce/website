!(function (t, e) {
  var o, n, p, r;
  e.__SV ||
    ((window.posthog = e),
    (e._i = []),
    (e.init = function (i, s, a) {
      function g(t, e) {
        var o = e.split(".");
        (2 == o.length && ((t = t[o[0]]), (e = o[1])),
          (t[e] = function () {
            t.push([e].concat(Array.prototype.slice.call(arguments, 0)));
          }));
      }
      (((p = t.createElement("script")).type = "text/javascript"),
        (p.crossOrigin = "anonymous"),
        (p.async = !0),
        (p.src =
          s.api_host.replace(".i.posthog.com", "-assets.i.posthog.com") +
          "/static/array.js"),
        (r = t.getElementsByTagName("script")[0]).parentNode.insertBefore(
          p,
          r,
        ));
      var u = e;
      for (
        void 0 !== a ? (u = e[a] = []) : (a = "posthog"),
          u.people = u.people || [],
          u.toString = function (t) {
            var e = "posthog";
            return (
              "posthog" !== a && (e += "." + a),
              t || (e += " (stub)"),
              e
            );
          },
          u.people.toString = function () {
            return u.toString(1) + ".people (stub)";
          },
          o =
            "init Re Ms Fs Pe Rs Cs capture Ve calculateEventProperties Ds register register_once register_for_session unregister unregister_for_session zs getFeatureFlag getFeatureFlagPayload isFeatureEnabled reloadFeatureFlags updateEarlyAccessFeatureEnrollment getEarlyAccessFeatures on onFeatureFlags onSurveysLoaded onSessionId getSurveys getActiveMatchingSurveys renderSurvey canRenderSurvey canRenderSurveyAsync identify setPersonProperties group resetGroups setPersonPropertiesForFlags resetPersonPropertiesForFlags setGroupPropertiesForFlags resetGroupPropertiesForFlags reset get_distinct_id getGroups get_session_id get_session_replay_url alias set_config startSessionRecording stopSessionRecording sessionRecordingStarted captureException loadToolbar get_property getSessionProperty Ls As createPersonProfile Ns Is Us opt_in_capturing opt_out_capturing has_opted_in_capturing has_opted_out_capturing is_capturing clear_opt_in_out_capturing Os debug I js getPageViewId captureTraceFeedback captureTraceMetric".split(
              " ",
            ),
          n = 0;
        n < o.length;
        n++
      )
        g(u, o[n]);
      e._i.push([i, s, a]);
    }),
    (e.__SV = 1));
})(document, window.posthog || []);
function initializePostHog() {
  if (
    typeof window === "undefined" ||
    window.location.hostname === "localhost"
  ) {
    return;
  }

  var hasUserInteracted = false;

  function loadPostHog() {
    if (hasUserInteracted) return;
    hasUserInteracted = true;

    var script = document.createElement("script");
    script.src = "https://eu.i.posthog.com/static/array.js";
    script.async = true;
    script.onload = function setupPostHog() {
      if (window.posthog && typeof window.posthog.init === "function") {
        window.posthog.init("phc_project_id", {
          api_host: "https://eu.i.posthog.com",
          autocapture: false,
          capture_pageview: false,
          disable_session_recording: true,
          loaded: function onLoaded(posthog) {
            posthog.capture("page_loaded", {
              url: window.location.href,
              referrer: document.referrer,
            });
          },
        });
      }
    };

    document.head.appendChild(script);
  }

  var events = ["click", "scroll", "keydown", "touchstart"];

  function addListeners() {
    events.forEach(function addEventHandler(event) {
      document.addEventListener(event, loadPostHog, {
        once: true,
        passive: true,
      });
    });
  }

  if (document.readyState === "complete") {
    setTimeout(addListeners, 3000);
  } else {
    window.addEventListener("load", function delayedInit() {
      setTimeout(addListeners, 3000);
    });
  }
}

initializePostHog();
