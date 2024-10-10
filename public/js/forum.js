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

const fileInput = document.getElementById("fileInput");
const imagePreview = document.getElementById("imagePreview");
const protext = document.getElementById("protext");
fileInput.addEventListener("change", function () {
  const file = fileInput.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      imagePreview.src = e.target.result;
      imagePreview.classList.remove("hidden"); // Show image
      protext.classList.add("hidden"); // Show image
    };
    reader.readAsDataURL(file);
  }
});
