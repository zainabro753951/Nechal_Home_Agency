let content = document.querySelector("#content");
let profilePage = document.getElementById("profile");
let profileBtn = document.getElementById("profileBtn");
let forgetpass = document.getElementById("forgetPassword");
let forgetBtn = document.getElementById("forgetBtn");
let profile = (button) => {
  if (button == "forgetPass") {
    profilePage.style.display = "none";
    profileBtn.classList.remove("bg-white");
    profileBtn.classList.remove("text-golden");
    forgetpass.style.display = "block";
    forgetBtn.classList.add("bg-white");
    forgetBtn.classList.add("text-dgolden");
  } else {
    profilePage.style.display = "block";
    forgetpass.style.display = "none";
    profileBtn.classList.add("bg-white");
    profileBtn.classList.add("text-dgolden");
    forgetBtn.classList.remove("bg-white");
    forgetBtn.classList.remove("text-dgolden");
  }
};

const togglePassword = document.getElementById("togglePassword");
const passwordInput = document.getElementById("password");

togglePassword.addEventListener("click", function () {
  // Password field ka type toggle karein
  const type =
    passwordInput.getAttribute("type") === "password" ? "text" : "password";
  passwordInput.setAttribute("type", type);
  // Button text ko toggle karein
  let cluter = "hide";
  if (togglePassword.innerHTML === '<i class="fa-regular fa-eye-slash"></i>') {
    togglePassword.innerHTML = '<i class="fa-regular fa-eye"></i>'; // Dusra togglePassword
  } else {
    togglePassword.innerHTML = '<i class="fa-regular fa-eye-slash"></i>'; // Wapas pehla togglePassword
  }
});

const togglePassword2 = document.getElementById("togglePassword2");
const passwordInput2 = document.getElementById("password2");

togglePassword2.addEventListener("click", function () {
  // Password field ka type toggle karein
  const type =
    passwordInput2.getAttribute("type") === "password" ? "text" : "password";
  passwordInput2.setAttribute("type", type);
  // Button text ko toggle karein
  let cluter = "hide";
  if (togglePassword2.innerHTML === '<i class="fa-regular fa-eye-slash"></i>') {
    togglePassword2.innerHTML = '<i class="fa-regular fa-eye"></i>'; // Dusra togglePassword
  } else {
    togglePassword2.innerHTML = '<i class="fa-regular fa-eye-slash"></i>'; // Wapas pehla togglePassword
  }
});

const togglePassword3 = document.getElementById("togglePassword3");
const passwordInput3 = document.getElementById("password3");

togglePassword3.addEventListener("click", function () {
  // Password field ka type toggle karein
  const type =
    passwordInput3.getAttribute("type") === "password" ? "text" : "password";
  passwordInput3.setAttribute("type", type);
  // Button text ko toggle karein
  let cluter = "hide";
  if (togglePassword3.innerHTML === '<i class="fa-regular fa-eye-slash"></i>') {
    togglePassword3.innerHTML = '<i class="fa-regular fa-eye"></i>'; // Dusra togglePassword
  } else {
    togglePassword3.innerHTML = '<i class="fa-regular fa-eye-slash"></i>'; // Wapas pehla togglePassword
  }
});
