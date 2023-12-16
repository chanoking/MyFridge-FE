document.addEventListener("DOMContentLoaded", () => {
  const signupForm = document.getElementById("signup");
  const loginForm = document.getElementById("login");

  signupForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const email = document.getElementById("signup-email").value;
    const password = document.getElementById("signup-password").value;

    // TODO: Send signup data to the backend
    console.log("Signing up...", email, password);
  });

  loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;

    // TODO: Send login data to the backend
    console.log("Logging in...", email, password);
  });
});
