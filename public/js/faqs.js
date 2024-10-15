let faqs = document.querySelectorAll("#faqs");

faqs.forEach((items) => {
  let clutter = "closed";
  items.addEventListener("click", () => {
    if (clutter == "closed") {
      items.style.height = "100%";
      clutter = "open";
    } else {
      items.style.height = "48px";
      clutter = "closed";
    }
  });
});
