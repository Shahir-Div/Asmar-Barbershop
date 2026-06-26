/* ═══════════════════════════════════════════════════════════════
   ASMAR BARBERSHOP — Main JavaScript
   ═══════════════════════════════════════════════════════════════
   Core interactivity: navigation, scroll reveals, mobile menu,
   mouse glow, language switch, and smooth scrolling.
   ═══════════════════════════════════════════════════════════════ */

(function () {
  'use strict';

  /* ───────────────────────────────────────────────────────────
     DOM REFERENCES
     ─────────────────────────────────────────────────────────── */
  const nav = document.getElementById('nav');
  const burger = document.getElementById('burger');
  const mobileMenu = document.getElementById('mobileMenu');
  const heroGlow = document.getElementById('heroGlow');
  const langSwitch = document.getElementById('langSwitch');
  const mobileLinks = document.querySelectorAll('.nav__mobile-link');
  const revealElements = document.querySelectorAll('[data-reveal]');

  /* ───────────────────────────────────────────────────────────
     NAVBAR — Scroll Behavior
     ─────────────────────────────────────────────────────────── */
  let lastScrollY = 0;
  let ticking = false;

  function handleNavScroll() {
    const scrollY = window.scrollY;

    if (scrollY > 80) {
      nav.classList.add('nav--scrolled');
    } else {
      nav.classList.remove('nav--scrolled');
    }

    lastScrollY = scrollY;
    ticking = false;
  }

  window.addEventListener('scroll', function () {
    if (!ticking) {
      window.requestAnimationFrame(handleNavScroll);
      ticking = true;
    }
  }, { passive: true });

  /* ───────────────────────────────────────────────────────────
     MOBILE MENU
     ─────────────────────────────────────────────────────────── */
  function toggleMobileMenu() {
    const isOpen = mobileMenu.classList.contains('active');

    mobileMenu.classList.toggle('active');
    burger.classList.toggle('active');
    burger.setAttribute('aria-expanded', !isOpen);
    mobileMenu.setAttribute('aria-hidden', isOpen);

    // Prevent body scroll when menu is open
    document.body.style.overflow = isOpen ? '' : 'hidden';
  }

  function closeMobileMenu() {
    mobileMenu.classList.remove('active');
    burger.classList.remove('active');
    burger.setAttribute('aria-expanded', 'false');
    mobileMenu.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  burger.addEventListener('click', toggleMobileMenu);

  mobileLinks.forEach(function (link) {
    link.addEventListener('click', closeMobileMenu);
  });

  // Close on Escape key
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && mobileMenu.classList.contains('active')) {
      closeMobileMenu();
    }
  });


  /* ───────────────────────────────────────────────────────────
     SCROLL REVEAL — Intersection Observer
     ─────────────────────────────────────────────────────────── */
  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            revealObserver.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -60px 0px'
      }
    );

    revealElements.forEach(function (el) {
      revealObserver.observe(el);
    });
  } else {
    // Fallback: show everything
    revealElements.forEach(function (el) {
      el.classList.add('revealed');
    });
  }


  /* ───────────────────────────────────────────────────────────
     MOUSE GLOW — Hero Section
     ─────────────────────────────────────────────────────────── */
  if (heroGlow) {
    let glowX = 0;
    let glowY = 0;
    let currentX = 0;
    let currentY = 0;

    document.addEventListener('mousemove', function (e) {
      glowX = e.clientX;
      glowY = e.clientY;
    });

    function animateGlow() {
      // Smooth interpolation (lerp)
      currentX += (glowX - currentX) * 0.08;
      currentY += (glowY - currentY) * 0.08;

      heroGlow.style.left = currentX + 'px';
      heroGlow.style.top = currentY + 'px';

      requestAnimationFrame(animateGlow);
    }

    animateGlow();
  }


  /* ───────────────────────────────────────────────────────────
     LANGUAGE SWITCH — Using I18N System
     ─────────────────────────────────────────────────────────── */
  if (langSwitch) {
    // Initialize i18n
    if (window.I18N) {
      window.I18N.init();
    }

    langSwitch.addEventListener('click', function () {
      if (window.I18N) {
        window.I18N.toggle();
      }
    });
  }


  /* ───────────────────────────────────────────────────────────
     SMOOTH SCROLL — Anchor Links
     ─────────────────────────────────────────────────────────── */
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;

      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        const navHeight = nav.offsetHeight;
        const targetPosition = target.getBoundingClientRect().top + window.scrollY - navHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });


  /* ───────────────────────────────────────────────────────────
     NAVBAR — Hide on Scroll Down, Show on Scroll Up
     ─────────────────────────────────────────────────────────── */
  let prevScrollPos = window.scrollY;
  let navHidden = false;

  function handleNavHide() {
    const currentScrollPos = window.scrollY;

    if (currentScrollPos > prevScrollPos && currentScrollPos > 200 && !navHidden) {
      nav.style.transform = 'translateY(-100%)';
      navHidden = true;
    } else if (currentScrollPos < prevScrollPos && navHidden) {
      nav.style.transform = 'translateY(0)';
      navHidden = false;
    }

    prevScrollPos = currentScrollPos;
  }

  window.addEventListener('scroll', function () {
    window.requestAnimationFrame(handleNavHide);
  }, { passive: true });


  /* ───────────────────────────────────────────────────────────
     VIDEO FALLBACK — Poster image if video fails
     ─────────────────────────────────────────────────────────── */
  const heroVideo = document.querySelector('.hero__video');
  if (heroVideo) {
    heroVideo.addEventListener('error', function () {
      heroVideo.style.display = 'none';
    });
  }

})();
