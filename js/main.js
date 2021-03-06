document.addEventListener("DOMContentLoaded", () => {
  if (document.querySelector(".start-slider")) {
    const swiper = new Swiper(".start-slider", {
      slidesPerView: 1,
      loop: true,
      pagination: {
        el: ".slider-dots",
        bulletActiveClass: "active",
        bulletClass: "slider-dot",
        clickable: true,
      },
    });
  }

  /* password control */

  const passwordField = document.getElementById("password");
  const passwordCheckButton = document.querySelector(".password-control");

  if (passwordField && passwordCheckButton) {
    passwordCheckButton.addEventListener("click", (e) => {
      e.preventDefault();

      if (passwordField.getAttribute("type") === "password") {
        passwordField.setAttribute("type", "text");
      } else {
        passwordField.setAttribute("type", "password");
      }
    });
  }

  const passwordFields = document.querySelectorAll(".password-field");
  const passwordCheckButtons = document.querySelectorAll(".password-control");

  if (passwordFields) {
    passwordFields.forEach((item) => {
      if (passwordCheckButton) {
        passwordCheckButtons.forEach((button) => {
          button.addEventListener("click", (e) => {
            e.preventDefault();

            if (item.getAttribute("type") === "password") {
              item.setAttribute("type", "text");
            } else {
              item.setAttribute("type", "password");
            }
          });
        });
      }
    });
  }

  /* fixed menu */

  const sidebar = document.querySelector(".sidebar");
  const toggleMenuButton = document.querySelector(".sidebar__toogle-menu");

  if (toggleMenuButton) {
    toggleMenuButton.addEventListener("click", () => {
      sidebar.classList.toggle("active");
    });
  }

  const mediaQuery = window.matchMedia("(max-width: 991px)");

  window.addEventListener("resize", () => {
    if (mediaQuery && sidebar) {
      sidebar.classList.remove("active");
    }
  });

  /* header notifications */

  const notifications = document.querySelector(".header__notifications");
  const notificationsBtn = document.querySelector(
    ".header-notifications__trigger"
  );

  if (notificationsBtn) {
    notificationsBtn.addEventListener("click", () => {
      document.querySelector("body").classList.add("notifications-open");
      notifications.classList.add("active");
    });
  }

  if (notifications) {
    notifications.addEventListener("click", (e) => {
      let target = e.target;

      if (target.classList.contains("close-notifications")) {
        document.querySelector("body").classList.remove("notifications-open");
        notifications.classList.remove("active");
      } else if (target.classList.contains("header__notifications--overlay")) {
        document.querySelector("body").classList.remove("notifications-open");
        notifications.classList.remove("active");
      }
    });
  }

  /* header account */

  const accountWrapper = document.querySelector(".header__account");
  const accountDropdownTrigger = document.querySelector(
    ".header__account-dropdown-btn"
  );

  if (accountDropdownTrigger) {
    accountDropdownTrigger.addEventListener("click", () => {
      accountWrapper.classList.toggle("active");
    });
  }

  if (accountWrapper) {
    accountWrapper.addEventListener("click", (e) => {
      let target = e.target;

      if (target.classList.contains("header__account--overlay")) {
        accountWrapper.classList.remove("active");
      }
    });
  }

  /* mobile menu */

  const burgerBtn = document.querySelector(".burger-menu");
  const mobileMenu = document.querySelector(".mobile-menu-wrapper");
  const closeMobileMenuBtn = document.querySelector(".mobile-menu__close-icon");

  if (burgerBtn) {
    burgerBtn.addEventListener("click", () => {
      mobileMenu.classList.add("show", "fade-in");
    });
  }

  if (closeMobileMenuBtn) {
    closeMobileMenuBtn.addEventListener("click", () => {
      mobileMenu.classList.remove("show");
    });
  }

  /* slider brands in catalog page */

  if (document.querySelector(".brands__cards--slider")) {
    const swiper = new Swiper(".brands__cards--slider", {
      slidesPerView: "auto",
      spaceBetween: 10,
      loop: true,
      pagination: {
        el: ".slider-dots",
        bulletActiveClass: "active",
        bulletClass: "slider-dot",
        clickable: true,
      },
      breakpoints: {
        630: {
          loop: false,
        },
      },
    });
  }

  /* slider cards in analytics page */
  (function() {
    const initializeSliderOrDestroy = (instance) => {
      let swiper = instance || undefined;

      if (document.querySelector(".analytics_level__cards--slider")) {
        if (window.matchMedia('(max-width: 768px)')) {
          swiper = new Swiper(".analytics_level__cards--slider", {
            slidesPerView: "auto",
            spaceBetween: 10,
            loop: false,
            pagination: {
              el: ".slider-dots",
              bulletActiveClass: "active",
              bulletClass: "slider-dot",
              clickable: true,
            }
          });
        } else {
          swiper && swiper.destroy(true, true);
        }
      }

      return swiper;
    }

    let analyticsLevelCardsSlider = initializeSliderOrDestroy();
    window.addEventListener('resize', initializeSliderOrDestroy(analyticsLevelCardsSlider));
  })();

  /* dropdown edit profile */

  const editProfileDropdownTrigger = document.querySelector(
    ".edit-profile__drodown--mobile"
  );
  const editProfileDropdownMenu = document.querySelector(
    ".edit-profile__drodown"
  );

  if (editProfileDropdownTrigger && editProfileDropdownMenu) {
    editProfileDropdownTrigger.addEventListener("click", () => {
      editProfileDropdownMenu.classList.toggle("active");

      window.addEventListener("click", (e) => {
        let target = e.target;

        if (!target.closest(".edit-profile__drodown--mobile")) {
          document
            .querySelector(".edit-profile__drodown")
            .classList.remove("active");
        }
      });
    });
  }

  /* dropdown table */

  

});
