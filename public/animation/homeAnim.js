gsap.from("#homeMh1", {
  y: 500,
  duration: 1,
  rotationZ: "45deg",
  opacity: 0,
  ease: "power4InOut",
  stagger: 0.2,
});

gsap.from(".headerAnim", {
  y: 500,
  duration: 1,
  rotation: "45deg",
  opacity: 0,
  ease: "power4InOut",
  stagger: 1,
});

gsap.from("#aboutimg1", {
  x: -200,
  duration: 1.5,
  opacity: 0,
  scrollTrigger: {
    trigger: "#aboutimg1",
    start: "top 80%", // Animation starts when the top of the box hits 80% of the viewport height
    toggleActions: "play none none reverse", // Play on enter, reverse on leave
  },
});

gsap.from("#abouth1", {
  y: 200,
  duration: 2,
  rotationZ: "10deg",
  opacity: 0,
  ease: "power4InOut",
  stagger: 0.5,
  scrollTrigger: {
    trigger: "#aboutimg1",
    start: "top 80%", // Animation starts when the top of the box hits 80% of the viewport height
    toggleActions: "play none none reverse", // Play on enter, reverse on leave
  },
});
gsap.from("#aboutimg2", {
  y: 50,
  opacity: 0,
  duration: 2,
  stagger: 1,
  scrollTrigger: {
    trigger: "#aboutimg2",
    start: "top 80%", // Animation starts when the top of the box hits 80% of the viewport height
    toggleActions: "play none none reverse", // Play on enter, reverse on leave
  },
});

gsap.from("#review", {
  y: 50,
  opacity: 0,
  duration: 2,
  stagger: 0.2,
  scrollTrigger: {
    trigger: "#review",
    start: "top bottom", // Animation starts when the top of the box hits 80% of the viewport height
    end: "bottom 80%",
    toggleActions: "play none none reverse", // Play on enter, reverse on leave
  },
});

gsap.from("#sliderh1", {
  y: 500,
  duration: 1.5,
  rotationZ: "45deg",
  opacity: 0,
  ease: "power4InOut",
  stagger: 0.2,
  scrollTrigger: {
    trigger: "#sliderh1",
    start: "top 150%", // Animation starts when the top of the box hits 80% of the viewport height
    toggleActions: "play none none reverse", // Play on enter, reverse on leave
  },
});

gsap.from("#chooseh1", {
  y: 500,
  duration: 1.5,
  rotationZ: "45deg",
  opacity: 0,
  ease: "power4InOut",
  stagger: 0.2,
  scrollTrigger: {
    trigger: "#chooseh1",
    start: "top 80%", // Animation starts when the top of the box hits 80% of the viewport height
    toggleActions: "play none none reverse", // Play on enter, reverse on leave
  },
});
gsap.from("#neckleimg1", {
  x: -100,
  duration: 2,
  opacity: 0,
  scrollTrigger: {
    trigger: "#neckleimg1",
    start: "top 70%", // Animation starts when the top of the box hits 80% of the viewport height
    toggleActions: "play none none reverse", // Play on enter, reverse on leave
  },
});
gsap.from("#neckleimg2", {
  x: 100,
  duration: 2,
  opacity: 0,
  scrollTrigger: {
    trigger: "#neckleimg2",
    start: "top 70%", // Animation starts when the top of the box hits 80% of the viewport height
    toggleActions: "play none none reverse", // Play on enter, reverse on leave
  },
});
