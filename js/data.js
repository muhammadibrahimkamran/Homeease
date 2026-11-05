// js/data.js - Shared data and localStorage helpers for HomeEase.
// Holds dummy technicians and helper functions used by all pages.

// List of services offered by HomeEase.
const SERVICES = [
  { id: "electrician", name: "Electrician", desc: "Wiring, switches, fans, lighting and more." },
  { id: "plumber", name: "Plumber", desc: "Leaks, taps, pipes and bathroom fittings." },
  { id: "ac", name: "AC Repair", desc: "AC servicing, gas refill and installation." },
  { id: "fridge", name: "Fridge & Kitchen Appliances", desc: "Fridge, washing machine, microwave repair." },
  { id: "carpenter", name: "Carpenter", desc: "Furniture repair, doors, windows and woodwork." },
  { id: "painter", name: "Painter", desc: "Interior and exterior painting services." }
];

// Dummy service providers (technicians) seeded on first load.
const DUMMY_PROVIDERS = [
  { id: 1, name: "Ahmed Raza", email: "ahmed@homeease.pk", phone: "03001234567", password: "provider123", role: "provider", service: "Electrician", city: "Gulshan-e-Iqbal", experience: 5, rating: 4.8 },
  { id: 2, name: "Imran Qureshi", email: "imran@homeease.pk", phone: "03001234568", password: "provider123", role: "provider", service: "Plumber", city: "North Nazimabad", experience: 7, rating: 4.6 },
  { id: 3, name: "Bilal Khan", email: "bilal@homeease.pk", phone: "03001234569", password: "provider123", role: "provider", service: "AC Repair", city: "DHA", experience: 4, rating: 4.7 },
  { id: 4, name: "Usman Ali", email: "usman@homeease.pk", phone: "03001234570", password: "provider123", role: "provider", service: "Fridge & Kitchen Appliances", city: "Gulistan-e-Jauhar", experience: 6, rating: 4.9 },
  { id: 5, name: "Hamza Sheikh", email: "hamza@homeease.pk", phone: "03001234571", password: "provider123", role: "provider", service: "Carpenter", city: "Clifton", experience: 8, rating: 4.5 },
  { id: 6, name: "Faisal Ahmed", email: "faisal@homeease.pk", phone: "03001234572", password: "provider123", role: "provider", service: "Painter", city: "PECHS", experience: 3, rating: 4.7 }
];

// --- localStorage helpers ---

// Get all users (customers) from localStorage.
function getUsers() {
  return JSON.parse(localStorage.getItem("users") || "[]");
}

// Save users array back to localStorage.
function saveUsers(users) {
  localStorage.setItem("users", JSON.stringify(users));
}

// Get all providers (technicians) from localStorage.
function getProviders() {
  return JSON.parse(localStorage.getItem("providers") || "[]");
}

// Save providers array back to localStorage.
function saveProviders(providers) {
  localStorage.setItem("providers", JSON.stringify(providers));
}

// Get all bookings from localStorage.
function getBookings() {
  return JSON.parse(localStorage.getItem("bookings") || "[]");
}

// Save bookings array back to localStorage.
function saveBookings(bookings) {
  localStorage.setItem("bookings", JSON.stringify(bookings));
}

// Currently logged-in person (object with role) or null.
function getCurrentUser() {
  return JSON.parse(localStorage.getItem("currentUser") || "null");
}

function setCurrentUser(user) {
  localStorage.setItem("currentUser", JSON.stringify(user));
}

function logout() {
  localStorage.removeItem("currentUser");
  window.location.href = getBasePath() + "index.html";
}

// Figure out the base path so links work from root or /pages/.
function getBasePath() {
  // If we are inside /pages/, go up one level.
  if (window.location.pathname.indexOf("/pages/") !== -1) {
    return "../";
  }
  return "";
}

// Seed dummy providers only once.
function seedData() {
  if (!localStorage.getItem("providers")) {
    saveProviders(DUMMY_PROVIDERS);
  }
  if (!localStorage.getItem("users")) {
    saveUsers([]);
  }
  if (!localStorage.getItem("bookings")) {
    saveBookings([]);
  }
}

// Run seeding on load.
seedData();
