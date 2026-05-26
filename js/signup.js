function showSignup(){
  document.getElementById("loginForm").classList.add("hide");
  document.getElementById("signupForm").classList.remove("hide");
}

function showLogin(){
  document.getElementById("signupForm").classList.add("hide");
  document.getElementById("loginForm").classList.remove("hide");
}

document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("loginForm");
  const signupForm = document.getElementById("signupForm");

  // Get redirect param
  const urlParams = new URLSearchParams(window.location.search);
  const redirect = urlParams.get('redirect') || 'index.html';

  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    // Simple client-side login: just set logged in
    localStorage.setItem('loggedIn', 'true');
    alert("Logged in successfully!");
    window.location.href = redirect;
  });

  signupForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const password = signupForm.querySelector('input[name="password"]').value;
    const cpassword = signupForm.querySelector('input[name="cpassword"]').value;
    if (password !== cpassword) {
      alert("Passwords do not match!");
      return;
    }
    // Simple signup: set logged in
    localStorage.setItem('loggedIn', 'true');
    alert("Signed up successfully!");
    window.location.href = redirect;
  });
});
