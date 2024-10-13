let faqs = document.querySelectorAll("#faqs");

faqs.forEach((items) => {
  items.addEventListener("click", () => {
    items.style.height = "100%";
  });
});
