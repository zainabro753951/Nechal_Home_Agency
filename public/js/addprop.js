const fileInput = document.getElementById("fileInput");
const show = document.getElementById("show");

fileInput.addEventListener("change", function () {
  const files = fileInput.files;
  if (files.length > 0) {
    show.classList.remove("hidden"); // Show image preview
    show.innerHTML = ""; // Clear any previous images

    Array.from(files).forEach((file) => {
      const reader = new FileReader();

      reader.onload = function (e) {
        const img = document.createElement("img");
        img.src = e.target.result; // Set the image source
        img.alt = "Image Preview"; // Alt text for accessibility
        img.classList.add(
          "w-[150px]",
          "h-[150px]",
          "object-top",
          "object-cover",
          "rounded-md",
          "m-2"
        ); // Add margin for spacing

        show.appendChild(img); // Append the image to the show element
      };

      reader.readAsDataURL(file);
    });
  }
});

// Profile

const fileInput2 = document.getElementById("fileInput2");
const show2 = document.getElementById("show2");

fileInput2.addEventListener("change", function () {
  const files = fileInput2.files;
  if (files.length > 0) {
    show2.classList.remove("hidden"); // Show image preview
    show2.innerHTML = ""; // Clear any previous images

    Array.from(files).forEach((file) => {
      const reader = new FileReader();

      reader.onload = function (e) {
        const img = document.createElement("img");
        img.src = e.target.result; // Set the image source
        img.alt = "Image Preview"; // Alt text for accessibility
        img.classList.add(
          "w-[150px]",
          "h-[150px]",
          "object-top",
          "object-cover",
          "rounded-md",
          "m-2"
        ); // Add margin for spacing

        show2.appendChild(img); // Append the image to the show element
      };

      reader.readAsDataURL(file);
    });
  }
});
