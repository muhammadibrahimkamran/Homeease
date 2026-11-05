// js/auth.js - Authentication logic for HomeEase (signup, login, validation).

// Validate an email address format.
function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// Show an error message in an element with given id.
function showError(id, msg) {
  const el = document.getElementById(id);
  if (el) { el.textContent = msg; el.style.display = "block"; }
}

function hideError(id) {
  const el = document.getElementById(id);
  if (el) { el.textContent = ""; el.style.display = "none"; }
}

// --- User signup ---
function handleUserSignup(event) {
  event.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim().toLowerCase();
  const phone = document.getElementById("phone").value.trim();
  const password = document.getElementById("password").value;
  const confirm = document.getElementById("confirm").value;

  // Reset errors
  ["errName","errEmail","errPhone","errPassword","errConfirm"].forEach(hideError);

  let ok = true;
  if (!name) { showError("errName", "Name is required."); ok = false; }
  if (!isValidEmail(email)) { showError("errEmail", "Enter a valid email."); ok = false; }
  if (!phone) { showError("errPhone", "Phone is required."); ok = false; }
  if (password.length < 6) { showError("errPassword", "Password must be at least 6 characters."); ok = false; }
  if (password !== confirm) { showError("errConfirm", "Passwords do not match."); ok = false; }

  const users = getUsers();
  if (users.some(u => u.email === email)) {
    showError("errEmail", "This email is already registered.");
    ok = false;
  }

  if (!ok) return;

  const newUser = { id: Date.now(), name, email, phone, password, role: "user" };
  users.push(newUser);
  saveUsers(users);
  if (typeof showToast === "function") showToast("Signup successful! Please log in.", "success");
  window.location.href = getBasePath() + "pages/user-login.html";
}

// --- Provider signup ---
function handleProviderSignup(event) {
  event.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim().toLowerCase();
  const phone = document.getElementById("phone").value.trim();
  const password = document.getElementById("password").value;
  const confirm = document.getElementById("confirm").value;
  const service = document.getElementById("service").value;
  const city = document.getElementById("city").value.trim();
  const experience = document.getElementById("experience").value.trim();

  ["errName","errEmail","errPhone","errPassword","errConfirm","errService","errCity","errExp"].forEach(hideError);

  let ok = true;
  if (!name) { showError("errName", "Name is required."); ok = false; }
  if (!isValidEmail(email)) { showError("errEmail", "Enter a valid email."); ok = false; }
  if (!phone) { showError("errPhone", "Phone is required."); ok = false; }
  if (password.length < 6) { showError("errPassword", "Password must be at least 6 characters."); ok = false; }
  if (password !== confirm) { showError("errConfirm", "Passwords do not match."); ok = false; }
  if (!service) { showError("errService", "Select a service type."); ok = false; }
  if (!city) { showError("errCity", "City/area is required."); ok = false; }
  if (!experience) { showError("errExp", "Years of experience is required."); ok = false; }

  const providers = getProviders();
  if (providers.some(p => p.email === email)) {
    showError("errEmail", "This email is already registered.");
    ok = false;
  }

  if (!ok) return;

  const newProvider = {
    id: Date.now(), name, email, phone, password, role: "provider",
    service, city, experience: Number(experience), rating: 4.5
  };
  providers.push(newProvider);
  saveProviders(providers);
  if (typeof showToast === "function") showToast("Signup successful! Please log in.", "success");
  window.location.href = getBasePath() + "pages/provider-login.html";
}

// --- User login ---
function handleUserLogin(event) {
  event.preventDefault();
  const email = document.getElementById("email").value.trim().toLowerCase();
  const password = document.getElementById("password").value;
  hideError("errLogin");

  const users = getUsers();
  const user = users.find(u => u.email === email && u.password === password);
  if (!user) {
    showError("errLogin", "Invalid email or password.");
    if (typeof showToast === "function") showToast("Invalid email or password.", "error");
    return;
  }
  setCurrentUser({ id: user.id, name: user.name, email: user.email, role: "user" });
  window.location.href = getBasePath() + "pages/user-dashboard.html";
}

// --- Provider login ---
function handleProviderLogin(event) {
  event.preventDefault();
  const email = document.getElementById("email").value.trim().toLowerCase();
  const password = document.getElementById("password").value;
  hideError("errLogin");

  const providers = getProviders();
  const provider = providers.find(p => p.email === email && p.password === password);
  if (!provider) {
    showError("errLogin", "Invalid email or password.");
    if (typeof showToast === "function") showToast("Invalid email or password.", "error");
    return;
  }
  setCurrentUser({ id: provider.id, name: provider.name, email: provider.email, role: "provider", service: provider.service });
  window.location.href = getBasePath() + "pages/provider-dashboard.html";
}

// --- Admin login ---
function handleAdminLogin(event) {
  event.preventDefault();
  const email = document.getElementById("email").value.trim().toLowerCase();
  const password = document.getElementById("password").value;
  hideError("errLogin");

  if (email === "admin@homeease.com" && password === "admin123") {
    setCurrentUser({ id: 0, name: "Admin", email, role: "admin" });
    window.location.href = getBasePath() + "pages/admin-dashboard.html";
  } else {
    showError("errLogin", "Invalid admin credentials.");
    if (typeof showToast === "function") showToast("Invalid admin credentials.", "error");
  }
}

// Guard: redirect to login if not logged in or wrong role.
function requireRole(role) {
  const current = getCurrentUser();
  if (!current || current.role !== role) {
    const base = getBasePath();
    let target = "index.html";
    if (role === "user") target = "pages/user-login.html";
    else if (role === "provider") target = "pages/provider-login.html";
    else if (role === "admin") target = "pages/admin-login.html";
    window.location.href = base + target;
    return false;
  }
  return true;
}
