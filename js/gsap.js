gsap
  .timeline({
    scrollTrigger: {
      trigger: ".hero",
      start: "top 20%",
      end: "top ",
      // markers: true,
    },
  })
  .to(".top-txt", {
    opacity: 1,
    y: 20,
    duration: 1.0,
  })
  .to(".text-block", {
    y: 20,
    opacity: 1,
    duration: 0.8,
  });

gsap
  .timeline({
    scrollTrigger: {
      trigger: ".prologue-section",
      start: "top 20%",
      end: "top ",
      // markers: true,
    },
  })
  .to(".prologue-txt", {
    opacity: 1,
    y: 20,
    duration: 0.6,
  })
  .to(".prologue-text-block", {
    y: 20,
    opacity: 1,
    duration: 0.8,
  });

gsap
  .timeline({
    scrollTrigger: {
      trigger: ".about-section",
      start: "top 20%",
      end: "top ",
      // markers: true,
    },
  })
  .to(".about-txt", {
    opacity: 1,
    y: 20,
    duration: 0.6,
  })
  .to(".about-text-block", {
    y: 20,
    opacity: 1,
    duration: 0.8,
  });

gsap
  .timeline({
    scrollTrigger: {
      trigger: ".epilogue-section",
      start: "top 20%",
      end: "top ",
      // markers: true,
    },
  })
  .to(".epilogue-txt", {
    opacity: 1,
    y: 20,
    duration: 0.6,
  })
  .to(".epilogue-text-block", {
    y: 20,
    opacity: 1,
    duration: 0.8,
  });

gsap
  .timeline({
    scrollTrigger: {
      trigger: ".slider-section",
      start: "top 20%",
      end: "top ",
      // markers: true,
    },
  })
  .to(".slider-txt", {
    opacity: 1,
    y: 20,
    duration: 0.6,
  })
  .to(".slider-text-block", {
    y: 20,
    opacity: 1,
    duration: 0.8,
  });
