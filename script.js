document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const error = document.getElementById("error");

  const validUsername = "doctor";
  const validPassword = "med2025";

  if (username === validUsername && password === validPassword) {
    window.location.href = "dashboard.html";
  } else {
    error.textContent = "Account not found. Please try again.";
  }
});
