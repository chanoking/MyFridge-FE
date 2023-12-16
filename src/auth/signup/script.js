document.addEventListener("DOMContentLoaded", () => {
  const signupForm = document.getElementById("signup");

  signupForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const email = document.getElementById("signup-email").value;
    const password = document.getElementById("signup-password").value;
  });
});
