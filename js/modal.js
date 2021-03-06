!(function (e) {
  "function" != typeof e.matches &&
    (e.matches =
      e.msMatchesSelector ||
      e.mozMatchesSelector ||
      e.webkitMatchesSelector ||
      function (e) {
        for (
          var t = this,
            o = (t.document || t.ownerDocument).querySelectorAll(e),
            n = 0;
          o[n] && o[n] !== t;

        )
          ++n;
        return Boolean(o[n]);
      }),
    "function" != typeof e.closest &&
      (e.closest = function (e) {
        for (var t = this; t && 1 === t.nodeType; ) {
          if (t.matches(e)) return t;
          t = t.parentNode;
        }
        return null;
      });
})(window.Element.prototype);

document.addEventListener("DOMContentLoaded", function () {
  var modalButtons = document.querySelectorAll(".js-open-modal"),
    overlay = document.querySelector(".js-overlay-modal"),
    closeButtons = document.querySelectorAll(".js-modal-close");

  modalButtons.forEach(function (item) {
    item.addEventListener("click", function (e) {
      e.preventDefault();

      var modalId = this.getAttribute("data-modal"),
        modalElem = document.querySelector(
          '.modal[data-modal="' + modalId + '"]'
        );

      /* close other modals */
      document.querySelectorAll(".modal").forEach((item) => {
        item.classList.remove('active');
      });

      modalElem.classList.add("active");
      overlay.classList.add("active");
      document.querySelector("body").classList.add("modal-show");
      if (document.querySelector('.modal.edit-profile.active')) {
        document.querySelector("body").classList.remove("modal-show");
      }
    });
  });

  closeButtons.forEach(function (item) {
    item.addEventListener("click", function (e) {
      var parentModal = this.closest(".modal");
      var modalName = parentModal.getAttribute('data-modal');

      if(modalName === "cart--modal") {
        document.querySelector(".cart__order-results").classList.add('cart__order-results--shown-qr');
      }

      parentModal.classList.remove("active");
      overlay.classList.remove("active");
      document.querySelector("body").classList.remove("modal-show");
    });
  });

  document.body.addEventListener(
    "keyup",
    function (e) {
      var key = e.keyCode;

      if (key == 27 && document.querySelector(".modal.active")) {
        document.querySelector(".modal.active").classList.remove("active");
        document.querySelector(".overlay").classList.remove("active");
        document.querySelector("body").classList.remove("modal-show");
      }
    },
    false
  );

  overlay.addEventListener("click", function () {
    var modalName = document.querySelector('.modal.active').getAttribute('data-modal');

    if(modalName === "cart--modal") {
      document.querySelector(".cart__order-results").classList.add('cart__order-results--shown-qr');
    }
    document.querySelector(".modal.active").classList.remove("active");
    document.querySelector("body").classList.remove("modal-show");
    this.classList.remove("active");
  });
});
