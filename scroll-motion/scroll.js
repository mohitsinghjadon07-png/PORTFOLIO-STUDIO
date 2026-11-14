
(() => {
  "use strict";

  if (!window.gsap || !window.ScrollTrigger) {
    console.error("GSAP or ScrollTrigger failed to load.");
    return;
  }

  gsap.registerPlugin(ScrollTrigger);

  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  if (prefersReducedMotion) {
    document.querySelectorAll(".copy-content").forEach((item, index) => {
      item.style.opacity = index === 0 ? "1" : "0";
      item.style.visibility = index === 0 ? "visible" : "hidden";
    });
    return;
  }

  // INTRO ANIMATION
  gsap.from(".intro .eyebrow", {
    opacity: 0,
    y: 20,
    duration: 1,
    ease: "power3.out"
  });

  gsap.from(".intro h1", {
    opacity: 0,
    y: 80,
    duration: 1.3,
    delay: 0.15,
    ease: "power4.out"
  });

  gsap.from(".intro p, .scroll-link", {
    opacity: 0,
    y: 25,
    duration: 1,
    stagger: 0.2,
    delay: 0.5,
    ease: "power3.out"
  });

  // SPLIT HEADLINE INTO WORDS
  function splitWords(element) {
    const originalText = element.innerHTML;
    const parts = originalText.split(/(<span>.*?<\/span>)/g);

    element.innerHTML = parts.map(part => {
      if (!part) return "";

      const isSpan = part.startsWith("<span>");
      const text = isSpan
        ? part.replace(/<\/?span>/g, "")
        : part;

      const words = text.trim().split(/\s+/).map(word =>
        `<span class="word-mask"><span class="word">${word}</span></span>`
      ).join(" ");

      return isSpan
        ? `<span class="accent-line">${words}</span>`
        : words;
    }).join(" ");
  }

  document.querySelectorAll(".reveal-heading").forEach(splitWords);

  // PINNED SCROLL TIMELINE
  const showcase = document.querySelector(".showcase-pin");
  const progressFill = document.querySelector(".progress-fill");

  const cards = gsap.utils.toArray(".visual-card");
  const contentBlocks = gsap.utils.toArray(".copy-content");

  gsap.set(contentBlocks, {
    autoAlpha: 0,
    y: 45
  });

  gsap.set(contentBlocks[0], {
    autoAlpha: 1,
    y: 0
  });

  const timeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".showcase-section",
      start: "top top",
      end: "bottom bottom",
      pin: showcase,
      pinSpacing: true,
      scrub: 1,
      anticipatePin: 1,
      invalidateOnRefresh: true,
      onUpdate: self => {
        gsap.set(progressFill, {
          scaleX: self.progress,
          transformOrigin: "left center"
        });
      }
    }
  });

  // First phase: cards enter and transform
  timeline
    .fromTo(".card-back",
      { x: -150, y: 80, rotation: -25, scale: .6 },
      { x: 0, y: 0, rotation: -12, scale: 1, ease: "none" },
      0
    )
    .fromTo(".card-middle",
      { x: 100, y: 120, rotation: 20, scale: .65 },
      { x: 0, y: 0, rotation: 5, scale: 1, ease: "none" },
      0
    )
    .fromTo(".card-front",
      { x: 180, y: 100, rotation: 30, scale: .4 },
      { x: 0, y: 0, rotation: 8, scale: 1, ease: "none" },
      0
    );

  // Parallax layers
  timeline
    .to(".orb-one", {
      x: 180,
      y: -100,
      scale: 1.5,
      ease: "none"
    }, 0)
    .to(".orb-two", {
      x: -150,
      y: 100,
      scale: 1.4,
      ease: "none"
    }, 0)
    .to(".visual-stage", {
      scale: 1.13,
      x: 30,
      rotationY: -8,
      ease: "none"
    }, 0);

  // Reveal each headline and its paragraph in sequence
  const phasePositions = [0.1, 1.25, 2.4];

  contentBlocks.forEach((block, index) => {
    const words = block.querySelectorAll(".word");

    const start = phasePositions[index];

    if (index > 0) {
      timeline.to(contentBlocks[index - 1], {
        autoAlpha: 0,
        y: -35,
        duration: .25,
        ease: "power2.in"
      }, start - .1);
    }

    timeline.to(block, {
      autoAlpha: 1,
      y: 0,
      duration: .35,
      ease: "power3.out"
    }, start);

    timeline.fromTo(words,
      {
        yPercent: 110,
        opacity: 0
      },
      {
        yPercent: 0,
        opacity: 1,
        stagger: .08,
        duration: .5,
        ease: "power3.out"
      },
      start + .05
    );

    timeline.fromTo(block.querySelector("p"),
      {
        opacity: 0,
        y: 20
      },
      {
        opacity: 1,
        y: 0,
        duration: .45,
        ease: "power2.out"
      },
      start + .35
    );
  });

  // Final visual transformation
  timeline
    .to(".card-middle", {
      rotation: 0,
      scale: 1.12,
      x: -20,
      ease: "none"
    }, 2.6)
    .to(".card-back", {
      x: -100,
      rotation: -25,
      ease: "none"
    }, 2.6)
    .to(".card-front", {
      x: 100,
      rotation: 18,
      ease: "none"
    }, 2.6);

  // Independent floating animation
  gsap.to(".floating-label", {
    y: -12,
    duration: 2.2,
    ease: "sine.inOut",
    repeat: -1,
    yoyo: true,
    stagger: .5
  });

  // Refresh after assets and fonts settle
  window.addEventListener("load", () => {
    ScrollTrigger.refresh();
  });

  // Recalculate dimensions on resize
  let resizeTimer;

  window.addEventListener("resize", () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 200);
  });
})();
