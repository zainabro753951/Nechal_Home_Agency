const images = document.querySelectorAll(".image");
let currentIndex = 0;

// Set the first image to be visible
images[currentIndex].classList.add("opacity-100");

function changeImage() {
  // Hide current image
  images[currentIndex].classList.remove("opacity-100");
  images[currentIndex].classList.add("opacity-0");

  // Update index
  currentIndex = (currentIndex + 1) % images.length;

  // Show next image
  images[currentIndex].classList.remove("opacity-0");
  images[currentIndex].classList.add("opacity-100");
}

// Change image every 3 seconds
setInterval(changeImage, 3000);

window.addEventListener("scroll", () => {
  let stickyNav = document.getElementById("stickyNav");
  if (window.scrollY > 100) {
    stickyNav.classList.add("bg-black");
  } else {
    stickyNav.classList.remove("bg-black");
  }
});

let openMenu = document.getElementById("openMenu");
let closeMenu = document.getElementById("closeMenu");
openMenu.addEventListener("click", () => {
  gsap.to("#menu", {
    x: "0%",
    duration: 1,
    ease: "power4",
  });
});
closeMenu.addEventListener("click", () => {
  gsap.to("#menu", {
    x: "-100%",
    duration: 1,
    ease: "elastic",
  });
});

const marquee = document.querySelector(".marquee");
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

// auto increament text

const clientCountElement = document.querySelectorAll("#clientCount");
console.log(clientCountElement);

clientCountElement.forEach((items) => {
  let count = 0;
  let isCounting = false; // To check if counting is active

  const checkVisibility = () => {
    const rect = items.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    // Check if the client counter is in the viewport
    return rect.top < windowHeight && rect.bottom > 0;
  };

  const incrementCount = () => {
    if (isCounting && count < 100) {
      // Change 100 to your desired maximum
      count++;
      items.textContent = count + "k+";
      requestAnimationFrame(incrementCount);
    }
  };

  window.addEventListener("scroll", () => {
    if (checkVisibility() && !isCounting) {
      isCounting = true;
      incrementCount();
    }
  });
});

const marquee2 = document.querySelector(".marquee2");
const totalWidth2 = marquee.scrollWidth;

// Duplicate the text for seamless scrolling
marquee2.innerHTML += marquee2.innerHTML;

gsap.to(marquee2, {
  x: -totalWidth2,
  duration: 30, // Adjust speed as needed
  ease: "linear",
  repeat: -1,
  modifiers: {
    x: (x) => {
      const offset = parseFloat(x) % (totalWidth2 / 2);
      return offset + "px";
    },
  },
});
