// ===============================
// Part 1: Event Handling Example
// ===============================
document.getElementById("greetBtn").addEventListener("click", function() {
  document.getElementById("greetMessage").textContent = "Hello, welcome to my page!";
});

// ===============================
// Part 2: Interactive Elements
// ===============================

// Theme Toggle
document.getElementById("toggleTheme").addEventListener("click", function() {
  document.body.classList.toggle("dark");
});

// Counter Game
let count = 0;
document.getElementById("increaseBtn").addEventListener("click", function() {
  count++;
  document.getElementById("counter").textContent = count;
});

document.getElementById("resetBtn").addEventListener("click", function() {
  count = 0;
  document.getElementById("counter").textContent = count;
});

// FAQ Toggle
document.querySelector(".faq-toggle").addEventListener("click", function() {
  const answer = document.querySelector(".faq-answer");
  answer.style.display = answer.style.display === "block" ? "none" : "block";
});

// ===============================
// Part 3: Form Validation
// ===============================
document.getElementById("signupForm").addEventListener("submit", function(event) {
  event.preventDefault(); // stop form from submitting

  // Get values
  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let password = document.getElementById("password").value.trim();

  // Errors
  let valid = true;

  // Name Validation
  if (name.length < 3) {
    document.getElementById("nameError").textContent = "Name must be at least 3 characters";
    valid = false;
  } else {
    document.getElementById("nameError").textContent = "";
  }

  // Email Validation
  let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.match(emailPattern)) {
    document.getElementById("emailError").textContent = "Enter a valid email";
    valid = false;
  } else {
    document.getElementById("emailError").textContent = "";
  }

  // Password Validation
  if (password.length < 6) {
    document.getElementById("passwordError").textContent = "Password must be at least 6 characters";
    valid = false;
  } else {
    document.getElementById("passwordError").textContent = "";
  }

  // Success
  if (valid) {
    document.getElementById("formSuccess").textContent = "Form submitted successfully!";
  } else {
    document.getElementById("formSuccess").textContent = "";
  }
});

