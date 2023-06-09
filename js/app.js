(() => {
  "use strict";
  let n = {
    Android: function () {
      return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
      return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
      return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
      return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
      return (
        n.Android() || n.BlackBerry() || n.iOS() || n.Opera() || n.Windows()
      );
    },
  };
  let e = !1;
  setTimeout(() => {
    if (e) {
      let n = new Event("windowScroll");
      window.addEventListener("scroll", function (e) {
        document.dispatchEvent(n);
      });
    }
  }, 0),
    (window.FLS = !0),
    (function (n) {
      let e = new Image();
      (e.onload = e.onerror =
        function () {
          n(2 == e.height);
        }),
        (e.src =
          "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA");
    })(function (n) {
      let e = !0 === n ? "webp" : "no-webp";
      document.documentElement.classList.add(e);
    }),
    n.any() && document.documentElement.classList.add("touch"),
    (function () {
      if (document.querySelectorAll("[data-fullscreen]").length && n.any()) {
        function e() {
          let n = 0.01 * window.innerHeight;
          document.documentElement.style.setProperty("--vh", `${n}px`);
        }
        window.addEventListener("resize", e), e();
      }
    })();
})();
