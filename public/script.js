(() => {
  const isTouchDevice = matchMedia("(pointer: coarse)").matches;
  const scrollElements = Array.from(
    document.querySelectorAll(".scroll-reveal"),
  );
  const progressFill = document.querySelector(".progress-fill");
  const cursorDot = document.querySelector(".cursor-dot");
  const cursorOutline = document.querySelector(".cursor-outline");
  const hoverSelectors = [".btn-primary", ".btn-secondary", "button"];
  let progressScheduled = false;

  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.2,
      rootMargin: "0px 0px -12% 0px",
    },
  );

  scrollElements.forEach((element) => revealObserver.observe(element));

  const updateProgress = () => {
    if (!progressFill) return;

    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const progress = scrollHeight ? (scrollTop / scrollHeight) * 100 : 0;

    progressFill.style.width = `${Math.min(Math.max(progress, 0), 100)}%`;
    progressScheduled = false;
  };

  const scheduleProgress = () => {
    if (!progressScheduled) {
      progressScheduled = true;
      requestAnimationFrame(updateProgress);
    }
  };

  window.addEventListener("scroll", scheduleProgress, { passive: true });
  window.addEventListener("resize", scheduleProgress);
  scheduleProgress();

  if (!isTouchDevice && cursorDot && cursorOutline) {
    const setCursorPosition = ({ clientX, clientY }) => {
      const transform = `translate(${clientX}px, ${clientY}px)`;
      cursorDot.style.transform = transform;
      cursorOutline.style.transform = transform;
    };

    window.addEventListener("pointermove", setCursorPosition);
    window.addEventListener("pointerdown", () =>
      document.body.classList.add("cursor-active"),
    );
    window.addEventListener("pointerup", () =>
      document.body.classList.remove("cursor-active"),
    );

    hoverSelectors.forEach((selector) => {
      document.querySelectorAll(selector).forEach((element) => {
        element.addEventListener("pointerenter", () =>
          document.body.classList.add("cursor-active"),
        );
        element.addEventListener("pointerleave", () =>
          document.body.classList.remove("cursor-active"),
        );
      });
    });
  }
})();
