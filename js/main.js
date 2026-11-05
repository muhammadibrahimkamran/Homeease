// js/main.js - Shared UI helpers for HomeEase (navbar, footer, icons, animations).

// Inline SVG icons (no emojis). Returns SVG markup string.
function icon(name, size) {
  size = size || 24;
  const s = `width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"`;
  const icons = {
    home: `<svg ${s}><path d="M3 11l9-8 9 8"/><path d="M5 10v10h14V10"/></svg>`,
    services: `<svg ${s}><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>`,
    user: `<svg ${s}><circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 4-6 8-6s8 2 8 6"/></svg>`,
    provider: `<svg ${s}><path d="M14.7 6.3a4 4 0 1 1 3 3L9 18l-4 1 1-4 8.7-8.7z"/></svg>`,
    logout: `<svg ${s}><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>`,
    bolt: `<svg ${s}><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`,
    drop: `<svg ${s}><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/></svg>`,
    snow: `<svg ${s}><line x1="12" y1="2" x2="12" y2="22"/><line x1="2" y1="12" x2="22" y2="12"/><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"/><line x1="19.07" y1="4.93" x2="4.93" y2="19.07"/></svg>`,
    fridge: `<svg ${s}><rect x="6" y="2" width="12" height="20" rx="2"/><line x1="6" y1="12" x2="18" y2="12"/><line x1="9" y1="6" x2="9" y2="8"/><line x1="9" y1="15" x2="9" y2="18"/></svg>`,
    hammer: `<svg ${s}><path d="M15 12l-8.5 8.5a2.12 2.12 0 0 1-3-3L12 9"/><path d="M17.64 6.36l-1.28-1.28a2 2 0 0 1 2.83-2.83l1.28 1.28"/><path d="M21 3l-6 6"/></svg>`,
    brush: `<svg ${s}><path d="M18.37 2.63L14 7l-1.5-1.5L14 4l4.37-1.37z"/><path d="M14 7l-8 8a3 3 0 0 0 4.24 4.24l8-8"/><path d="M2 22c2-1 3-3 2-5"/></svg>`,
    check: `<svg ${s}><polyline points="20 6 9 17 4 12"/></svg>`,
    calendar: `<svg ${s}><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>`,
    location: `<svg ${s}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>`,
    clock: `<svg ${s}><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,
    shield: `<svg ${s}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
    star: `<svg ${s}><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`,
    wallet: `<svg ${s}><rect x="2" y="6" width="20" height="14" rx="2"/><path d="M2 10h20"/><circle cx="17" cy="15" r="1.5"/></svg>`,
    menu: `<svg ${s}><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>`,
    eye: `<svg ${s}><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>`,
    eyeOff: `<svg ${s}><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/></svg>`,
    arrow: `<svg ${s}><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>`,
    inbox: `<svg ${s}><polyline points="22 12 16 12 14 15 10 15 8 12 2 12"/><path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/></svg>`,
  };
  return icons[name] || icons.services;
}

function serviceIcon(id) {
  const map = {
    electrician: "bolt", plumber: "drop", ac: "snow", fridge: "fridge",
    carpenter: "hammer", painter: "brush", cctv: "shield", handyman: "hammer"
  };
  return icon(map[id] || "services", 40);
}

function navbarHTML(base) {
  const current = (typeof getCurrentUser === "function") ? getCurrentUser() : null;
  const servicesItems = ["Electrician","Plumber","AC Repair","Fridge & Kitchen Appliances","Carpenter","Painter","CCTV & Security","Handyman"];
  const areas = ["Gulshan-e-Iqbal","DHA","Clifton","North Nazimabad","Gulistan-e-Jauhar","PECHS","Saddar","Malir"];
  const serviceLinks = servicesItems.map(function(s){ return '<a href="' + base + 'pages/services.html">' + s + '</a>'; }).join("");
  const areaLinks = areas.map(function(a){ return '<a href="' + base + 'pages/services.html">' + a + '</a>'; }).join("");

  let overlayLinks = '<a href="' + base + 'index.html">Home</a><a href="' + base + 'index.html#about">About</a><a href="' + base + 'pages/services.html">Services</a><a href="' + base + 'index.html#techs">Technicians</a><a href="' + base + 'index.html#how">How it works</a><a href="' + base + 'index.html#faq">FAQ</a><a href="' + base + 'index.html#contact">Contact</a><a href="' + base + 'pages/user-login.html">User Login</a><a href="' + base + 'pages/provider-login.html">Provider Login</a><a href="' + base + 'pages/admin-login.html">Admin Login</a>';
  if (current) {
    const dash = current.role === "user" ? "user-dashboard.html" : current.role === "provider" ? "provider-dashboard.html" : "admin-dashboard.html";
    overlayLinks += '<a href="' + base + 'pages/' + dash + '">Dashboard</a><a href="#" onclick="logout();return false;">Logout</a>';
  }

  const annItems = ["Same-day booking available","Verified and background-checked technicians","Transparent pricing, pay after the job","Serving all of Karachi"];
  const annHTML = annItems.map(function(i){ return '<span class="ann-item"><span class="ann-dot"></span>' + i + '</span>'; }).join("");

  return '<div class="announcement-bar"><div class="ann-track">' + annHTML + annHTML + '</div></div>' +
  '<nav class="navbar">' +
    '<div class="nav-inner">' +
      '<a class="brand" href="' + base + 'index.html"><img src="' + base + 'images/logo.png" alt="HomeEase logo" class="site-logo"><span>HomeEase</span></a>' +
      '<div class="nav-pillbar">' +
        '<a href="' + base + 'index.html" class="active"><span class="dot"></span>Home</a>' +
        '<a href="' + base + 'index.html#about"><span class="dot"></span>About</a>' +
        '<div class="nav-dropdown"><a href="' + base + 'pages/services.html"><span class="dot"></span>Services ▾</a><div class="dropdown-menu">' + serviceLinks + '</div></div>' +
        '<div class="nav-dropdown"><a href="' + base + 'pages/services.html"><span class="dot"></span>Areas ▾</a><div class="dropdown-menu">' + areaLinks + '</div></div>' +
        '<a href="' + base + 'index.html#how"><span class="dot"></span>How it works</a>' +
        '<a href="' + base + 'index.html#faq"><span class="dot"></span>FAQ</a>' +
        '<a href="' + base + 'index.html#contact"><span class="dot"></span>Contact</a>' +
      '</div>' +
      '<div class="nav-right">' +
        '<a href="tel:+923000000000" class="btn btn-primary btn-sm nav-call">Call Now</a>' +
        '<button class="icon-btn menu-btn" onclick="toggleMenu()" aria-label="Menu">' + icon("menu",18) + ' Menu</button>' +
      '</div>' +
    '</div>' +
  '</nav>' +
  '<div class="overlay-menu" id="mobileMenu">' +
    '<button class="overlay-close" onclick="toggleMenu()" aria-label="Close">✕</button>' +
    overlayLinks +
  '</div>';
}

function footerHTML(base) {
  return `
  <footer class="footer">
    <div class="footer-inner">
      <div class="footer-grid">
        <div>
          <div class="footer-brand"><img src="${base}images/logo.png" alt="HomeEase logo" class="site-logo"><span>HomeEase</span></div>
          <p>Connecting households with trusted, skilled professionals across Karachi.</p>
        </div>
        <div>
          <h4>Links</h4>
          <ul>
            <li><a href="${base}index.html">Home</a></li>
            <li><a href="${base}pages/services.html">Services</a></li>
            <li><a href="${base}pages/user-login.html">User Login</a></li>
            <li><a href="${base}pages/provider-login.html">Provider Login</a></li>
          </ul>
        </div>
        <div>
          <h4>Services</h4>
          <ul>
            <li><a href="${base}pages/services.html">Electrician</a></li>
            <li><a href="${base}pages/services.html">Plumber</a></li>
            <li><a href="${base}pages/services.html">AC Repair</a></li>
            <li><a href="${base}pages/services.html">Carpenter</a></li>
          </ul>
        </div>
        <div>
          <h4>Contact</h4>
          <ul>
            <li><a href="mailto:hello@homeease.pk">hello@homeease.pk</a></li>
            <li><a href="tel:+923000000000">+92 300 0000000</a></li>
            <li>Karachi, Pakistan</li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <span>&copy; 2026 HomeEase</span>
        <a href="${base}pages/admin-login.html">Admin Login</a>
      </div>
    </div>
  </footer>`;
}

function toggleMenu() {
  const m = document.getElementById("mobileMenu");
  if (m) m.classList.toggle("open");
  document.body.style.overflow = m && m.classList.contains("open") ? "hidden" : "";
}

function initLayout() {
  const base = getBasePath();
  const nav = document.getElementById("navbar");
  if (nav) nav.innerHTML = navbarHTML(base);
  const foot = document.getElementById("footer");
  if (foot) foot.innerHTML = footerHTML(base);
  document.querySelectorAll(".photo-placeholder").forEach(el => { if (!el.innerHTML.trim()) el.innerHTML = icon("home", 48); });
  document.querySelectorAll("[data-icon]").forEach(el => { const name = el.getAttribute("data-icon"); const size = parseInt(el.getAttribute("data-size") || "24", 10); el.innerHTML = icon(name, size); });
  initScrollAnimations();
}

document.addEventListener("DOMContentLoaded", initLayout);

// ---------- Global polish ----------
(function globalPolish() {
  // Page fade
  document.body.classList.add("page-fade");

  // Preloader
  const preloader = document.createElement("div");
  preloader.id = "preloader";
  preloader.innerHTML = '<img src="' + getBasePath() + 'images/logo.png" alt="HomeEase">';
  document.body.appendChild(preloader);
  setTimeout(() => preloader.classList.add("hide"), 900);
  setTimeout(() => preloader.remove(), 1400);

  // Scroll progress bar
  const progress = document.createElement("div");
  progress.id = "scrollProgress";
  document.body.appendChild(progress);

  // Back to top
  const btt = document.createElement("button");
  btt.id = "backToTop";
  btt.setAttribute("aria-label", "Back to top");
  btt.innerHTML = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="18 15 12 9 6 15"/></svg>';
  document.body.appendChild(btt);
  btt.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

  // (FABs removed)

  // Toast container
  const toastWrap = document.createElement("div");
  toastWrap.id = "toastContainer";
  document.body.appendChild(toastWrap);

  function updateProgress() {
    const h = document.documentElement;
    const scrolled = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100;
    progress.style.width = (isNaN(scrolled) ? 0 : scrolled) + "%";
    if (window.scrollY > 300) btt.classList.add("show"); else btt.classList.remove("show");
  }
  window.addEventListener("scroll", updateProgress);
  updateProgress();

  // (no cursor glow in light theme)
})();

// Toast helper
function showToast(message, type) {
  type = type || "info";
  const wrap = document.getElementById("toastContainer");
  if (!wrap) return;
  const t = document.createElement("div");
  t.className = "toast " + type;
  t.textContent = message;
  wrap.appendChild(t);
  setTimeout(() => { t.style.opacity = 0; t.style.transform = "translateX(20px)"; setTimeout(() => t.remove(), 300); }, 2800);
}


// Scroll fade-in via IntersectionObserver
function initScrollAnimations() {
  const els = document.querySelectorAll(".fade-in");
  if (!("IntersectionObserver" in window)) { els.forEach(e => e.classList.add("visible")); return; }
  const io = new IntersectionObserver((entries) => {
    entries.forEach(en => { if (en.isIntersecting) { en.target.classList.add("visible"); io.unobserve(en.target); } });
  }, { threshold: 0.15 });
  els.forEach(e => io.observe(e));
}

// Render service cards
function renderServiceCards(containerId, buttonLabel, onClick, withImage) {
  const container = document.getElementById(containerId);
  if (!container) return;
  const base = (typeof getBasePath === "function") ? getBasePath() : "";
  container.innerHTML = SERVICES.map(s => {
    const imgSrc = s.image ? (base + "images/" + s.image) : "";
    const alt = s.name + " service in Karachi";
    const media = imgSrc
      ? `<div class="service-media img-wrap"><img src="${imgSrc}" alt="${alt}" loading="lazy" onload="this.classList.add('loaded')" onerror="this.style.display='none';this.parentElement.innerHTML='${serviceIcon(s.id).replace(/'/g, "\\'")}'"></div>`
      : `<div class="service-media">${serviceIcon(s.id)}</div>`;
    return `
    <div class="card service-card fade-in" id="service-${s.id}">
      ${media}
      <div class="service-body">
        <h3>${s.name}</h3>
        <p>${s.desc}</p>
        ${onClick ? `<a class="service-link" href="#" onclick="${onClick}('${s.id}');return false;">${buttonLabel} ${icon("arrow",14)}</a>` : ""}
      </div>
      ${onClick ? `<div class="book-float"><button class="btn btn-primary btn-sm" style="width:100%" onclick="${onClick}('${s.id}')">${buttonLabel}</button></div>` : ""}
    </div>`;
  }).join("");
  initScrollAnimations();
}

function populateServiceSelect(selectId) {
  const sel = document.getElementById(selectId);
  if (!sel) return;
  SERVICES.forEach(s => {
    const opt = document.createElement("option");
    opt.value = s.name;
    opt.textContent = s.name;
    sel.appendChild(opt);
  });
}

function populateTechSelect(selectId, serviceName) {
  const sel = document.getElementById(selectId);
  if (!sel) return;
  sel.innerHTML = '<option value="">Select technician</option>';
  getProviders().filter(p => !serviceName || p.service === serviceName).forEach(p => {
    const opt = document.createElement("option");
    opt.value = p.id;
    opt.textContent = `${p.name} (${p.service}) - ${p.city}`;
    sel.appendChild(opt);
  });
}

function statusBadge(status) {
  const cls = "badge-" + (status || "pending");
  return `<span class="badge ${cls}">${status}</span>`;
}

// Navbar shrink on scroll
window.addEventListener("scroll", function() {
  const nav = document.querySelector(".navbar");
  if (!nav) return;
  if (window.scrollY > 40) nav.classList.add("scrolled");
  else nav.classList.remove("scrolled");
});

// Hero typing/rotating word
document.addEventListener("DOMContentLoaded", function() {
  const el = document.getElementById("rotatingWord");
  if (el) {
    const words = ["Electrician", "Plumber", "AC Repair", "Carpenter", "Painter"];
    let i = 0;
    setInterval(function() {
      i = (i + 1) % words.length;
      el.style.opacity = 0;
      setTimeout(function() { el.textContent = words[i]; el.style.opacity = 1; }, 150);
    }, 2000);
    el.style.transition = "opacity 0.15s ease";
  }

  // Count-up stats (hero runs on load, strip on scroll)
  function animateCounter(el) {
    const target = parseFloat(el.getAttribute("data-target"));
    const decimals = parseInt(el.getAttribute("data-decimals") || "0", 10);
    const suffix = el.getAttribute("data-suffix") || "";
    const duration = 2000;
    const start = performance.now();
    function easeOutCubic(t) { return 1 - Math.pow(1 - t, 3); }
    function frame(now) {
      const t = Math.min((now - start) / duration, 1);
      const val = target * easeOutCubic(t);
      let formatted = decimals > 0 ? val.toFixed(decimals) : Math.floor(val).toLocaleString();
      el.textContent = formatted + suffix;
      if (t < 1) requestAnimationFrame(frame);
      else {
        let final = decimals > 0 ? target.toFixed(decimals) : Math.floor(target).toLocaleString();
        el.textContent = final + suffix;
      }
    }
    requestAnimationFrame(frame);
  }
  document.querySelectorAll(".hero .num[data-target]").forEach(animateCounter);

  const io = new IntersectionObserver(function(entries) {
    entries.forEach(function(en) {
      if (en.isIntersecting) {
        en.target.querySelectorAll("[data-target]").forEach(animateCounter);
        io.unobserve(en.target);
      }
    });
  }, { threshold: 0.4 });
  document.querySelectorAll(".stats-strip").forEach(function(s) { io.observe(s); });
});

// Show/hide password helper
function togglePassword(inputId, btn) {
  const input = document.getElementById(inputId);
  if (!input) return;
  if (input.type === "password") {
    input.type = "text";
    btn.innerHTML = icon("eyeOff", 18);
  } else {
    input.type = "password";
    btn.innerHTML = icon("eye", 18);
  }
}
