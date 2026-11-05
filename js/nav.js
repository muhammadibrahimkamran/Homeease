// js/nav.js - shared floating pill navbar injected into #site-header on every page

(function () {
  function getBase() {
    return window.location.pathname.indexOf("/pages/") !== -1 ? "../" : "";
  }

  function isHome() {
    const p = window.location.pathname;
    return p.endsWith("index.html") || p.endsWith("/") || p === "";
  }

  const base = getBase();
  const header = document.getElementById("site-header");
  if (!header) return;

  const current = (typeof getCurrentUser === "function") ? getCurrentUser() : null;

  let rightPart = "";
  if (current) {
    const dash = current.role === "user" ? "user-dashboard.html" : current.role === "provider" ? "provider-dashboard.html" : "admin-dashboard.html";
    rightPart = '<a href="' + base + 'pages/' + dash + '" class="nav-pill-btn">Dashboard</a>' +
                '<a href="#" onclick="logout();return false;" class="nav-logout">Logout</a>';
  } else {
    rightPart = '<div class="nav-signin">' +
      '<button class="signin-trigger" type="button">Sign in</button>' +
      '<div class="signin-menu">' +
        '<a href="' + base + 'pages/user-login.html">Sign in as User</a>' +
        '<a href="' + base + 'pages/provider-login.html">Sign in as Service Provider</a>' +
        '<a href="' + base + 'pages/user-signup.html">Sign up as User</a>' +
        '<a href="' + base + 'pages/provider-signup.html">Sign up as Service Provider</a>' +
        '<div class="signin-divider"></div>' +
        '<a href="' + base + 'pages/admin-login.html" class="signin-admin">Admin login</a>' +
      '</div>' +
    '</div>';
  }

  const servicesActive = (window.location.pathname.indexOf("services") !== -1) ? "active" : "";
  const homeActive = isHome() ? "active" : "";

  const html =
    '<div class="site-nav-pill" id="siteNavPill">' +
      '<div class="site-nav-left">' +
        '<a href="' + base + 'index.html#about" class="site-nav-link">About</a>' +
        '<a href="' + base + 'pages/services.html" class="site-nav-link ' + servicesActive + '">Services</a>' +
        '<a href="' + base + 'index.html#areas" class="site-nav-link">Areas</a>' +
      '</div>' +
      '<a class="site-nav-brand" href="' + base + 'index.html">' +
        '<img src="' + base + 'images/logo.png" alt="HomeEase logo" class="site-nav-logo">' +
        '<span>HOMEEASE</span>' +
      '</a>' +
      '<div class="site-nav-right">' +
        '<a href="' + base + 'index.html#how" class="site-nav-link">How it works</a>' +
        '<a href="' + base + 'index.html#faq" class="site-nav-link">FAQ</a>' +
        '<a href="' + base + 'index.html#contact" class="site-nav-link">Contact</a>' +
        rightPart +
      '</div>' +
      '<button class="site-nav-hamburger" id="siteNavHamburger" type="button" aria-label="Menu">&#9776;</button>' +
    '</div>' +
    '<div class="site-nav-overlay" id="siteNavOverlay">' +
      '<button class="site-nav-overlay-close" id="siteNavOverlayClose" type="button" aria-label="Close">&times;</button>' +
      '<div class="site-nav-overlay-links">' +
        '<a href="' + base + 'index.html">Home</a>' +
        '<a href="' + base + 'index.html#about">About</a>' +
        '<a href="' + base + 'pages/services.html">Services</a>' +
        '<a href="' + base + 'index.html#how">How it works</a>' +
        '<a href="' + base + 'index.html#faq">FAQ</a>' +
        '<a href="' + base + 'index.html#contact">Contact</a>' +
      '</div>' +
      '<div class="site-nav-overlay-auth">' +
        '<a href="' + base + 'pages/user-login.html" class="btn btn-primary">Sign in as User</a>' +
        '<a href="' + base + 'pages/user-signup.html" class="btn btn-secondary">Sign up as User</a>' +
        '<a href="' + base + 'pages/provider-login.html" class="btn btn-secondary">Sign in as Provider</a>' +
        '<a href="' + base + 'pages/provider-signup.html" class="btn btn-secondary">Sign up as Provider</a>' +
        '<a href="' + base + 'pages/admin-login.html" class="site-nav-overlay-admin">Admin login</a>' +
      '</div>' +
    '</div>';

  header.innerHTML = html;

  const pill = document.getElementById("siteNavPill");
  function onScroll() {
    if (window.scrollY > 40) pill.classList.add("scrolled");
    else pill.classList.remove("scrolled");
  }
  window.addEventListener("scroll", onScroll);
  onScroll();

  const signin = header.querySelector(".nav-signin");
  if (signin) {
    const trigger = signin.querySelector(".signin-trigger");
    trigger.addEventListener("click", function (e) {
      e.stopPropagation();
      signin.classList.toggle("open");
    });
    document.addEventListener("click", function () {
      signin.classList.remove("open");
    });
  }

  const hamburger = document.getElementById("siteNavHamburger");
  const overlay = document.getElementById("siteNavOverlay");
  const closeBtn = document.getElementById("siteNavOverlayClose");
  function openOverlay() { overlay.classList.add("open"); document.body.style.overflow = "hidden"; }
  function closeOverlay() { overlay.classList.remove("open"); document.body.style.overflow = ""; }
  if (hamburger) hamburger.addEventListener("click", openOverlay);
  if (closeBtn) closeBtn.addEventListener("click", closeOverlay);

  // active section highlighting on home
  if (isHome() && "IntersectionObserver" in window) {
    const sections = ["about", "services", "areas", "how", "faq", "contact"];
    const links = header.querySelectorAll(".site-nav-link");
    const io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          links.forEach(function (l) {
            const href = l.getAttribute("href") || "";
            if (href.indexOf("#" + en.target.id) !== -1) l.classList.add("active");
            else if (href.indexOf("#") !== -1) l.classList.remove("active");
          });
        }
      });
    }, { threshold: 0.4 });
    sections.forEach(function (id) {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
  }
})();
PYEOF
