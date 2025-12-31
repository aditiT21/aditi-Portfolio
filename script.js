// Optional: Smooth scroll for nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
particlesJS("particles-js", {
  particles: {
    number: { value: 70 },
    color: { value: "#ffffff" },
    opacity: { value: 0.2 },
    size: { value: 2 },
    move: { enable: true, speed: 0.6 }
  },
  interactivity: {
    events: {
      onhover: { enable: true, mode: "repulse" }
    }
  },
  retina_detect: true
});
