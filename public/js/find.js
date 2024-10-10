const marquee = document.querySelector(".marquee2");
const totalWidth = marquee.scrollWidth;

// Duplicate the text for seamless scrolling
marquee.innerHTML += marquee.innerHTML;

gsap.to(marquee, {
  x: -totalWidth,
  duration: 17, // Adjust speed as needed
  ease: "linear",
  repeat: -1,
  modifiers: {
    x: (x) => {
      const offset = parseFloat(x) % (totalWidth / 2);
      return offset + "px";
    },
  },
});
