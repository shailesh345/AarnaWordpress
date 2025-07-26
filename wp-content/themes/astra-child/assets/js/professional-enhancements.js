/**
 * Professional Enhancements for Aarna Construction
 * Modern interactions, animations, and user experience improvements
 */

document.addEventListener("DOMContentLoaded", function () {
  // Professional page transitions
  initPageTransitions();

  // Enhanced navigation
  enhanceNavigation();

  // Smooth scrolling for anchor links
  initSmoothScrolling();

  // Professional form enhancements
  enhanceForms();

  // Parallax effects for hero sections
  initParallaxEffects();

  // Professional loading states
  initLoadingStates();

  // Enhanced mobile interactions
  initMobileEnhancements();
});

/**
 * Initialize professional page transitions
 */
function initPageTransitions() {
  // Fade in page content
  const pageContent = document.querySelector(".page-transition");
  if (pageContent) {
    setTimeout(() => {
      pageContent.classList.add("loaded");
    }, 100);
  }

  // Stagger animation for cards
  const cards = document.querySelectorAll(
    ".service-card, .project-card, .value-item"
  );
  cards.forEach((card, index) => {
    card.style.opacity = "0";
    card.style.transform = "translateY(30px)";

    setTimeout(() => {
      card.style.transition = "all 0.6s ease";
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    }, 150 * (index + 1));
  });
}

/**
 * Enhance navigation with professional interactions
 */
function enhanceNavigation() {
  const header = document.querySelector(".site-header");

  if (header) {
    // Add scroll class for enhanced styling
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    });

    // Mobile menu enhancements
    const mobileMenuToggle = document.querySelector(".menu-toggle");
    if (mobileMenuToggle) {
      mobileMenuToggle.addEventListener("click", function () {
        document.body.classList.toggle("mobile-menu-open");
      });
    }
  }
}

/**
 * Initialize smooth scrolling for better UX
 */
function initSmoothScrolling() {
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });
}

/**
 * Professional form enhancements
 */
function enhanceForms() {
  const forms = document.querySelectorAll(".contact-form, .wpcf7-form");

  forms.forEach((form) => {
    // Add floating labels effect
    const inputs = form.querySelectorAll(
      'input[type="text"], input[type="email"], input[type="tel"], textarea'
    );

    inputs.forEach((input) => {
      // Add focus/blur effects
      input.addEventListener("focus", function () {
        this.parentElement.classList.add("focused");
      });

      input.addEventListener("blur", function () {
        if (!this.value) {
          this.parentElement.classList.remove("focused");
        }
      });

      // Check if already has value on load
      if (input.value) {
        input.parentElement.classList.add("focused");
      }
    });

    // Enhanced form submission
    form.addEventListener("submit", function (e) {
      const submitBtn = form.querySelector(
        'input[type="submit"], button[type="submit"]'
      );
      if (submitBtn) {
        submitBtn.classList.add("loading");
        submitBtn.disabled = true;

        // Add loading spinner
        const originalText = submitBtn.value || submitBtn.textContent;
        submitBtn.innerHTML =
          '<span class="loading-spinner"></span> Sending...';

        // Reset after timeout (in case of errors)
        setTimeout(() => {
          submitBtn.classList.remove("loading");
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalText;
        }, 10000);
      }
    });
  });
}

/**
 * Initialize parallax effects for hero sections
 */
function initParallaxEffects() {
  const heroSections = document.querySelectorAll(".hero-section");

  if (heroSections.length > 0 && window.innerWidth > 768) {
    window.addEventListener("scroll", () => {
      const scrolled = window.pageYOffset;

      heroSections.forEach((hero) => {
        const rate = scrolled * -0.5;
        hero.style.transform = `translateY(${rate}px)`;
      });
    });
  }
}

/**
 * Professional loading states
 */
function initLoadingStates() {
  // Show loading overlay for heavy content
  const heavyContent = document.querySelectorAll(
    ".projects-grid, .services-grid"
  );

  heavyContent.forEach((content) => {
    content.style.opacity = "0.7";

    // Simulate loading complete
    setTimeout(() => {
      content.style.transition = "opacity 0.5s ease";
      content.style.opacity = "1";
    }, 300);
  });
}

/**
 * Enhanced mobile interactions
 */
function initMobileEnhancements() {
  if ("ontouchstart" in window) {
    // Add touch feedback for buttons
    const buttons = document.querySelectorAll(".btn-primary, .btn-secondary");

    buttons.forEach((button) => {
      button.addEventListener("touchstart", function () {
        this.style.transform = "scale(0.95)";
      });

      button.addEventListener("touchend", function () {
        this.style.transform = "";
      });
    });

    // Improve touch scrolling on iOS
    document.body.style.webkitOverflowScrolling = "touch";
  }
}

/**
 * Professional counter animation for stats
 */
function animateCounters() {
  const counters = document.querySelectorAll(".stat-number");

  counters.forEach((counter) => {
    const target = parseInt(counter.textContent);
    const increment = target / 100;
    let current = 0;

    const updateCounter = () => {
      if (current < target) {
        current += increment;
        counter.textContent = Math.floor(current);
        requestAnimationFrame(updateCounter);
      } else {
        counter.textContent = target;
      }
    };

    // Start animation when element is in view
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          updateCounter();
          observer.unobserve(entry.target);
        }
      });
    });

    observer.observe(counter);
  });
}

/**
 * Professional image lazy loading
 */
function initLazyLoading() {
  const images = document.querySelectorAll("img[data-src]");

  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.classList.add("loaded");
        observer.unobserve(img);
      }
    });
  });

  images.forEach((img) => imageObserver.observe(img));
}

/**
 * Professional error handling
 */
window.addEventListener("error", function (e) {
  console.warn("Professional Enhancement Error:", e.message);
});

// Initialize advanced features
document.addEventListener("DOMContentLoaded", function () {
  animateCounters();
  initLazyLoading();
});
