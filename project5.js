var crsr = document.querySelector(".cursor");
var blur = document.querySelector(".cursor-blur");
var h4 = document.querySelectorAll(".nav h4");

function cursor() {
  document.addEventListener("mousemove", function (dets) {
    crsr.style.left = dets.x + "px";
    crsr.style.top = dets.y + "px";
    blur.style.left = dets.x - 150 + "px";
    blur.style.top = dets.y - 150 + "px";
  });
}

function navigationanim() {
  h4.forEach((element) => {
    element.addEventListener(
      "mouseenter",
      function () {
        crsr.style.scale = 2.5;
        crsr.style.border = "1px solid #95c11e";
        crsr.style.backgroundColor = "transparent";
      },
      "anim"
    );
    element.addEventListener(
      "mouseleave",
      function () {
        crsr.style.scale = 1;
        crsr.style.backgroundColor = "#95c11e";
      },
      "anim"
    );
  });
}

function page1anim() {
  gsap.to(".nav", {
    backgroundColor: "#000",
    duration: 0.3,
    height: "11vh",
    scrollTrigger: {
      trigger: ".nav",
      scroller: "body",
      start: "top -10%",
      end: "top -11%",
      scrub: 2,
    },
  });

  gsap.to(".main", {
    backgroundColor: "#000",
    scrollTrigger: {
      trigger: ".main",
      scroller: "body",
      start: "top -25%",
      end: "top -70%",
      scrub: 2,
    },
  });
}

function aboutusanim() {
  gsap.from(".about-us img, .about-us-in", {
    y: 50,
    opacity: 0,
    duration: 1,
    stagger: 0.4,
    scrollTrigger: {
      trigger: ".about-us",
      scroller: "body",
      // markers: true,
      start: "top 63%",
      end: "top 58%",
      scrub: 2,
    },
  });
}

function colonanim() {
  gsap.from("#colon1", {
    y: -70,
    x: -70,
    scrollTrigger: {
      trigger: "#colon1",
      scroller: "body",
      // markers: true,
      start: "top 43%",
      end: "top 37%",
      scrub: 2,
    },
  });

  gsap.from("#colon2", {
    y: 70,
    x: 70,
    scrollTrigger: {
      trigger: "#colon1",
      scroller: "body",
      // markers: true,
      start: "top 43%",
      end: "top 37%",
      scrub: 4,
    },
  });
}

function page4anim() {
  gsap.from(".page4 h1", {
    y: 50,
    scrollTrigger: {
      trigger: ".page4 h1",
      scroller: "body",
      // markers: true,
      start: "top 75%",
      end: "top 70%",
      scrub: 2,
    },
  });
}

cursor();
navigationanim();
page1anim();
aboutusanim();
colonanim();
page4anim();
