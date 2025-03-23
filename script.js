document.addEventListener("DOMContentLoaded", function () {
    // Initialize AOS (Animation on Scroll)
    AOS.init();
  
    // Customer Counter Animation
    const counter = document.getElementById("customer-count");
    let current = 0;
    const target = 250;
  
    function animateCount() {
      if (current < target) {
        current += 5;
        counter.textContent = current + "+";
        requestAnimationFrame(animateCount);
      } else {
        counter.textContent = target + "+";
      }
    }
    animateCount();
  
    // Toast Message on Form Submit
    const form = document.getElementById("contact-form");
    const toast = document.getElementById("toast");
  
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      toast.classList.add("show");
      setTimeout(() => toast.classList.remove("show"), 3000);
      form.reset();
    });
  
    // Dark Mode Toggle
    const toggle = document.getElementById("toggle-dark");
    const icon = toggle.querySelector("i");
  
    const updateIcon = () => {
      icon.className = document.body.classList.contains("dark-mode") ? "fas fa-sun" : "fas fa-moon";
    };
  
    if (localStorage.getItem("dark-mode") === "enabled") {
      document.body.classList.add("dark-mode");
      updateIcon();
    }
  
    toggle.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");
      localStorage.setItem("dark-mode",
        document.body.classList.contains("dark-mode") ? "enabled" : "disabled");
      updateIcon();
    });
  
    // Active Nav Link on Scroll
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll("nav a");
  
    window.addEventListener("scroll", () => {
      let current = "";
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;
        if (scrollY >= sectionTop) {
          current = section.getAttribute("id");
        }
      });
  
      navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${current}`) {
          link.classList.add("active");
        }
      });
  
      // Scroll Progress Bar
      const scrollProgress = document.getElementById("scroll-progress");
      const scrollTop = document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = (scrollTop / scrollHeight) * 100;
      scrollProgress.style.width = progress + "%";
    });
  
    // Mobile Menu Toggle
    const menuToggle = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector("nav ul");
  
    if (menuToggle && navMenu) {
      menuToggle.addEventListener("click", () => {
        navMenu.classList.toggle("active");
      });
    }
  });
  