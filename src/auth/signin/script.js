document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("login");

  loginForm.addEventListener("submit", async (e) => {
    const email = document.getElementById("login-email").value;
    const password = docuemnt.getElementById("login-password").value;

    console.log("Logging in...", email, password);
  });
});
