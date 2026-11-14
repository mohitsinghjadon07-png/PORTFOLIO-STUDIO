
(() => {
  "use strict";

  gsap.registerPlugin(ScrollTrigger);

  const section = document.querySelector(".showcase-section");
  const pin = document.querySelector(".showcase-pin");
  const stage = document.querySelector(".visual-stage");
  const cards = gsap.utils.toArray(".visual-card");
  const panels = gsap.utils.toArray(".copy-content");
  const progress = document.querySelector(".progress-fill");

  if (!section || !pin || !stage || !panels.length) {
    console.error("Scroll animation: required elements not found.");
    return;
  }

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    panels.forEach((panel, index) => {
      gsap.set(panel, {
        autoAlpha: index === 0 ? 1 : 0,
        y: 0
      });
    });
    return;
  }

  // Split headline text into independently animated words.
  function splitWords(element) {
    const walker = document.createTreeWalker(
      element,
      NodeFilter.SHOW_TEXT
    );

    const nodes = [];
    while (walker.nextNode()) {
      if (walker.currentNode.textContent.trim()) {
        nodes.push(walker.currentNode);
      }
    }

    nodes.forEach(node => {
      const fragment = document.createDocumentFragment();
      const words = node.textContent.trim().split(/\s+/);

      words.forEach((word, index) => {
        const mask = document.createElement("span");
        mask.className = "word-mask";

        const inner = document.createElement("span");
        inner.className = "word";
        inner.textContent = word;

        mask.appendChild(inner);
        fragment.appendChild(mask);

        if (index < words.length - 1) {
          fragment.appendChild(document.createTextNode(" "));
        }
      });

      node.replaceWith(fragment);
    });
  }

  document.querySelectorAll(".reveal-heading").forEach(splitWords);

  // Initial states
  gsap.set(panels, {
    autoAlpha: 0,
    y: 35
  });

  gsap.set(panels[0], {
    autoAlpha: 1,
    y: 0
  });

  gsap.set(".word", {
    yPercent: 110,
    opacity: 0
  });

  gsap.set(".progress-fill", {
    scaleX: 0,
    transformOrigin: "left center"
  });

  // Main pinned animation
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: section,
      start: "top top",
      end: "+=300%",
      pin: pin,
      pinSpacing: true,
      scrub: 1,
      anticipatePin: 1,
      invalidateOnRefresh: true,

      onUpdate: self => {
        gsap.set(progress, {
          scaleX: self.progress
        });
      }
    }
  });

  // Card entrance
  tl.fromTo(cards[0],
    { x: -140, y: 100, rotation: -28, scale: .65 },
    { x: 0, y: 0, rotation: -12, scale: 1, duration: 1, ease: "none" },
    0
  );

  tl.fromTo(cards[1],
    { x: 140, y: 120, rotation: 25, scale: .6 },
    { x: 0, y: 0, rotation: 5, scale: 1, duration: 1, ease: "none" },
    0
  );

  tl.fromTo(cards[2],
    { x: 180, y: 150, rotation: 35, scale: .4 },
    { x: 0, y: 0, rotation: 8, scale: 1, duration: 1, ease: "none" },
    0
  );

  // Background and parallax movement
  tl.to(".orb-one", {
    x: 180,
    y: -100,
    scale: 1.5,
    duration: 3,
    ease: "none"
  }, 0);

  tl.to(".orb-two", {
    x: -150,
    y: 100,
    scale: 1.4,
    duration: 3,
    ease: "none"
  }, 0);

  tl.to(stage, {
    scale: 1.12,
    x: 35,
    rotationY: -8,
    duration: 3,
    ease: "none"
  }, 0);

  // Three synchronized text chapters
  panels.forEach((panel, index) => {
    const start = index * 1;

    const words = panel.querySelectorAll(".word");
    const paragraph = panel.querySelector("p");

    if (index > 0) {
      tl.to(panels[index - 1], {
        autoAlpha: 0,
        y: -30,
        duration: .18
      }, start);
    }

    tl.to(panel, {
      autoAlpha: 1,
      y: 0,
      duration: .2
    }, start);

    tl.to(words, {
      yPercent: 0,
      opacity: 1,
      duration: .35,
      stagger: .045,
      ease: "power3.out"
    }, start + .05);

    if (paragraph) {
      tl.fromTo(paragraph,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: .3,
          ease: "power2.out"
        },
        start + .25
      );
    }
  });

  // Floating labels
  gsap.to(".floating-label", {
    y: -12,
    duration: 2,
    repeat: -1,
    yoyo: true,
    stagger: .4,
    ease: "sine.inOut"
  });

  // Refresh after page resources load
  window.addEventListener("load", () => {
    ScrollTrigger.refresh();
  });

})();
