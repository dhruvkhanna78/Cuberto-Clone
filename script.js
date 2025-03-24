Shery.mouseFollower();
Shery.makeMagnet(".magnet");
Shery.hoverWithMediaCircle(".hvr", {
  videos: ["./cover.mp4", "https://cuberto.com/assets/projects/puntopago/cover.mp4", "https://cuberto.com/assets/projects/flipaclip/cover.mp4?2"],
});

Shery.hoverWithMediaCircle(".img", {
  videos: ["./cover.mp4", "https://cuberto.com/assets/projects/puntopago/cover.mp4", "https://cuberto.com/assets/projects/flipaclip/cover.mp4?2"],
});

gsap.to(".fleftelm", {
  scrollTrigger: {
    trigger: "#fimages",
    pin: true,
    start: "top top",
    end: "bottom bottom",
    endTrigger: ".last",
    scrub: 1,
  },
  y: "-300%",
  ease: Power1,
});

let sections = document.querySelectorAll(".fleftelm");
Shery.imageEffect(".images", {
  style: 4,
  
  slideStyle: (setScroll) => {
    sections.forEach(function (section, index) {
      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        scrub: 1,
        onUpdate: function (prog) {
          setScroll(prog.progress + index);
        },
      });
    });
  },
});