//--------------------locomotivejs----------------------------------------------------------------------------------->

gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true,
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length
      ? locoScroll.scrollTo(value, 0, 0)
      : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight,
    };
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".main").style.transform
    ? "transform"
    : "fixed",
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();
//--------------------------------------------------------
//
//
//
// ------------------------
//Animation for cursor
var video = document.querySelector("#page1 video");
var cursor = document.querySelector("#cursor");

// Initially hide the cursor
gsap.set(cursor, {
  scale: 0,
});

// Show cursor only on video
video.addEventListener("mouseenter", function () {
  gsap.to(cursor, {
    scale: 1,
    duration: 0.3,
    opacity: 1,
  });
});

video.addEventListener("mouseleave", function () {
  gsap.to(cursor, {
    scale: 0,
    duration: 0.3,
    opacity: 0,
  });
});

// Make cursor follow mouse precisely on video
video.addEventListener("mousemove", (event) => {
  const rect = video.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;

  gsap.to(cursor, {
    x: x,
    y: y,
    duration: 0.5,
  });
});

//-------------------------------------------------------------------------
//Animations for videos

var bigImg = document.querySelector(".bigImg");
var bigVideo = document.querySelector(".bigImg .videoWrapper video");
var leftVideo = document.querySelector(".leftImg .videoWrapper video");
var rightVideo = document.querySelector(".rightImg .videoWrapper video");

// Initially hide all videos
gsap.set([bigVideo, leftVideo, rightVideo], {
  scale: 0,
  opacity: 0,
});

// Big video animations
bigImg.addEventListener("mouseenter", function () {
  gsap.to(bigImg.querySelector("img"), {
    opacity: 0.5,
    duration: 0.3,
  });
  gsap.to(bigVideo, {
    scale: 1,
    opacity: 1,
    duration: 0.3,
  });
});

bigImg.addEventListener("mouseleave", function () {
  gsap.to(bigImg.querySelector("img"), {
    opacity: 1,
    duration: 0.3,
  });
  gsap.to(bigVideo, {
    scale: 0,
    opacity: 0,
    duration: 0.3,
  });
});

bigImg.addEventListener("mousemove", (event) => {
  const rect = bigImg.getBoundingClientRect();
  const videoRect = bigVideo.getBoundingClientRect();

  // Calculate the maximum allowed position
  const maxX = rect.width - videoRect.width;
  const maxY = rect.height - videoRect.height;

  // Calculate the position relative to the image using clientX/clientY and rect.top
  let x = event.clientX - rect.left - videoRect.width / 2;
  let y = event.clientY - rect.top - videoRect.height / 2;

  // Clamp the values to keep video within image boundaries
  x = Math.max(0, Math.min(x, maxX));
  y = Math.max(0, Math.min(y, maxY));

  gsap.to(bigVideo, {
    x: x,
    y: y,
    duration: 0.3,
  });
});

// Left video animations
document.querySelector(".leftImg").addEventListener("mouseenter", function () {
  gsap.to(".leftImg img", {
    opacity: 0.5,
    duration: 0.3,
  });
  gsap.to(leftVideo, {
    scale: 1,
    opacity: 1,
    duration: 0.3,
  });
});

document.querySelector(".leftImg").addEventListener("mouseleave", function () {
  gsap.to(".leftImg img", {
    opacity: 1,
    duration: 0.3,
  });
  gsap.to(leftVideo, {
    scale: 0,
    opacity: 0,
    duration: 0.3,
  });
});

// Left video mousemove
document.querySelector(".leftImg").addEventListener("mousemove", (event) => {
  const rect = document.querySelector(".leftImg").getBoundingClientRect();
  const videoRect = leftVideo.getBoundingClientRect();

  // Calculate the maximum allowed position
  const maxX = rect.width - videoRect.width;
  const maxY = rect.height - videoRect.height;

  // Calculate the position relative to the image using clientX/clientY
  let x = event.clientX - rect.left - videoRect.width / 2;
  let y = event.clientY - rect.top - videoRect.height / 2;

  // Clamp the values to keep video within image boundaries
  x = Math.max(0, Math.min(x, maxX));
  y = Math.max(0, Math.min(y, maxY));

  gsap.to(leftVideo, {
    x: x,
    y: y,
    duration: 0.3,
  });
});

// Right video animations
document.querySelector(".rightImg").addEventListener("mouseenter", function () {
  gsap.to(".rightImg img", {
    opacity: 0.5,
    duration: 0.3,
  });
  gsap.to(rightVideo, {
    scale: 1,
    opacity: 1,
    duration: 0.3,
  });
});

document.querySelector(".rightImg").addEventListener("mouseleave", function () {
  gsap.to(".rightImg img", {
    opacity: 1,
    duration: 0.3,
  });
  gsap.to(rightVideo, {
    scale: 0,
    opacity: 0,
    duration: 0.3,
  });
});

// Right video mousemove
document.querySelector(".rightImg").addEventListener("mousemove", (event) => {
  const rect = document.querySelector(".rightImg").getBoundingClientRect();
  const videoRect = rightVideo.getBoundingClientRect();

  // Calculate the maximum allowed position
  const maxX = rect.width - videoRect.width;
  const maxY = rect.height - videoRect.height;

  // Calculate the position relative to the image using clientX/clientY
  let x = event.clientX - rect.left - videoRect.width / 2;
  let y = event.clientY - rect.top - videoRect.height / 2;

  // Clamp the values to keep video within image boundaries
  x = Math.max(0, Math.min(x, maxX));
  y = Math.max(0, Math.min(y, maxY));

  gsap.to(rightVideo, {
    x: x,
    y: y,
    duration: 0.3,
  });
});

// --------------------------------------------Navigation color switching=-----------------------------------
const nav = document.querySelector("nav");
const whiteSections = document.querySelectorAll(
  ".page4, .page5, .page6, .page7"
);

function updateNavColor() {
  const navRect = nav.getBoundingClientRect();
  const navBottom = navRect.bottom;

  // Check if nav is over any white section
  let isOverWhite = false;
  whiteSections.forEach((section) => {
    const sectionRect = section.getBoundingClientRect();
    if (navBottom > sectionRect.top && navRect.top < sectionRect.bottom) {
      isOverWhite = true;
    }
  });

  // Update nav color
  if (isOverWhite) {
    nav.classList.remove("white-text");
    nav.classList.add("black-text");
  } else {
    nav.classList.remove("black-text");
    nav.classList.add("white-text");
  }
}

// Initial check
updateNavColor();

// Update on scroll
window.addEventListener("scroll", updateNavColor);

///--------------------------------------------------------------------------------
//reel2 animation Page 6

var videoTwo = document.querySelector(".page6 .reel2Container video");
var reel2animationtl = gsap.timeline();

reel2animationtl.from(videoTwo, {
  y: 200,
  ease: "none",
  duration: 2,
  width: "50%",
  scrollTrigger: {
    trigger: ".page6",
    scroller: ".main",
    scrub: 1,
    start: "top 90%",
    end: "top 20%",
    // markers: true,
    // onEnter: () => console.log("ScrollTrigger entered!"),
  },
});

//page 4 swipper animation ----------------------------------------------->
var swipper = gsap.timeline({
  scrollTrigger: {
    trigger: ".swipperJS",
    scroller: ".main",
    start: "top 50%",
    end: "top 30%",
    scrub: 2,
    // markers: true
  },
});

swipper.to(".line4", {
  width: "100%",
});
swipper.from(".textDiv p", {
  y: 50,
  opacity: 0,
  stagger: 1,
});

//---------------------------------Page 2 animation----------------------------.

gsap.from(".infoPara h3", {
  y: 50,
  stagger: 0.2,
  duration: 1,
  opacity: 0,
  scrollTrigger: {
    trigger: ".page2",
    scroller: ".main",
    start: "top 47%",
    end: "46%",
    scrub: 2,
  },
});

var infoPara2tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".page2",
    scroller: ".main",
    start: "top 10%",
    end: "top 40%",
    scrub: 1,
  },
});

infoPara2tl.from(".leftInfo", {
  x: -100,
  duration: 0.5,
  opacity: 0,
});
infoPara2tl
  .to(".line", {
    width: "100%",
    // duration:
  })
  .from(
    ".rightInfo",
    {
      x: -100,
      duration: 0.5,
      opacity: 0,
    },
    "-=0.3"
  );

//----------------------------------page 5 animation-------------------->

gsap.from(".page5 h1", {
  x: -50,
  duration: 0.5,
  opacity: 0,
  scrollTrigger: {
    trigger: ".page5",
    scroller: ".main",
    scrub: 2,
    start: "top 70%",
    end: "46%",
    // markers: true
  },
});

var page5tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".page5",
    scroller: ".main",
    start: "top 10%",
    end: "top 40%",
    // markers: true
  },
});

page5tl
  .from(".approachOne .approachLeft", {
    x: -50,
    duration: 0.5,
    opacity: 0,
  })
  .to(".line2", {
    width: "100%",
  })
  .from(
    ".approachOne .approachRight",
    {
      x: -50,
      duration: 0.5,
      opacity: 0,
    },
    "-=0.5"
  )

  .from(
    ".approachTwo .approachLeft",
    {
      x: -50,
      duration: 0.5,
      opacity: 0,
    },
    "-=0.3"
  )
  .to(".line3", {
    width: "100%",
  })
  .from(
    ".approachTwo .approachRight",
    {
      x: -50,
      duration: 0.5,
      opacity: 0,
    },
    "-=0.5"
  );

// Mobile Menu Toggle
const menuToggle = document.querySelector(".menu-toggle");
const navBtn = document.querySelector(".navBtn");

menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("active");
  navBtn.classList.toggle("active");
});

// Close menu when clicking outside
document.addEventListener("click", (e) => {
  if (!menuToggle.contains(e.target) && !navBtn.contains(e.target)) {
    menuToggle.classList.remove("active");
    navBtn.classList.remove("active");
  }
});

//.--------------------------------------footer--------------------------------------->

var footerAnimation = gsap.timeline({
  scrollTrigger: {
    trigger: ".footer",
    scroller: ".main",
    start: "top 40%",
    end: "top 10%",
    scrub: 2,
    // markers: true
  },
});

footerAnimation
  .from(".leftDiv h2", {
    x: -20,
    opacity: 0,
    duration: 0.2,
  })
  .from(
    ".upSideDiv .leftDetails a",
    {
      x: -20,
      opacity: 0,
      duration: 0.2,
      stagger: 0.1,
    },
    "<"
  )
  .from(
    ".upSideDiv .rightDetails a",
    {
      x: -20,
      opacity: 0,
      duration: 0.2,
      stagger: 0.1,
    },
    "<"
  )
  .from(".leftDiv p", {
    x: -20,
    opacity: 0,
    duration: 0.2,
  })
  .from(
    ".lowSideDiv .leftDetails p",
    {
      x: -20,
      opacity: 0,
      duration: 0.2,
    },
    "<"
  )
  .from(
    ".lowSideDiv .rightDetails",
    {
      x: -20,
      opacity: 0,
      duration: 0.2,
    },
    "<"
  )

  .from(".leftDiv .email", {
    x: -20,
    opacity: 0,
    duration: 0.2,
  })
  .from(
    ".footerBottomDiv img",
    {
      y: 200,
      duration: 0.5,
    },
    "-=0.3"
  );

//-------------------------------Loader------------------------------->

var tl = gsap.timeline();

tl.from(".loader h3", {
  x: -40,
  opacity: 0,
  duration: 1,
  stagger: 0.1,
});
tl.to(".loader h3", {
  opacity: 0,
  x: 20,
  duration: 1,
  stagger: -0.1,
});
tl.to(".loader", {
  opacity: 0,
});
tl.to(".loader", {
  display: "none",
})
  .from("#page1-Content", {
    height: "0",
    duration: 1.2,
  })
  .from("nav h3", {
    y: 50,
    opacity: 0,
    duration: 0.2,
  })
  .from(
    ".paraDiv #para1",
    {
      x: -30,
      opacity: 0,
      duration: 0.2,
    },
    "<"
  )
  .from(
    "nav .navBtn h4",
    {
      y: 10,
      opacity: 0,
      duration: 0.2,
      stagger: 0.2,
    },
    "-=0.1"
  )
  .from(
    ".paraDiv #para2",
    {
      x: -30,
      opacity: 0,
      duration: 0.2,
    },
    "<"
  )
  .from(
    "nav a",
    {
      y: 50,
      opacity: 0,
      duration: 0.5,
    },
    "-=0.2"
  )
  .from(
    ".logo",
    {
      y: -50,
      opacity: 0,
      duration: 0.5,
    },
    "-=0.5"
  );

//------------------------------------------------Page 1 animation-------------------->

// var navAnimation = gsap.timeline();

// navAnimation

// .from(".")

//-----------------------------------------AEL of reeels------------------------------->

// Video Modal Functionality
document.addEventListener("DOMContentLoaded", () => {
  const video = document.querySelector("#page1 video");
  const cursor = document.querySelector("#cursor");
  let isPlaying = false;

  // Create overlay
  const overlay = document.createElement("div");
  Object.assign(overlay.style, {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    opacity: 0,
    pointerEvents: "none",
    zIndex: 1000,
  });
  // page1.appendChild(overlay);
  document.body.appendChild(overlay);

  // Timeline for modal animation
  const videoModalTl = gsap.timeline({ paused: true });
  videoModalTl
    .to(overlay, {
      opacity: 1,
      duration: 0.3,
      ease: "power2.inOut"
    })
    .to(video, {
      rotate: 0,
      duration: 0.5,
      ease: "power2.inOut",
      zIndex: 2001,
      scale:0.7, // Center and avoid magnify
      // position : fixed ,
      // top : "50%",
      width: "80vw", // Optional: control modal size
      height: "auto",
    }, "<");
    

  // Scroll lock functions
  function disableScroll() {
    document.body.style.overflow = "hidden";
    document.body.style.position = "fixed";
    document.body.style.width = "100%";
  }

  function enableScroll() {
    document.body.style.overflow = "";
    document.body.style.position = "";
    document.body.style.width = "";
  }

  // Video click handler
  video.addEventListener("click", () => {
    isPlaying = !isPlaying;
    cursor.textContent = isPlaying ? "Close Reel" : "▶ Play Reel";

    if (isPlaying) {
      videoModalTl.play();
      video.setAttribute("controls", "true");
      video.muted = false;
      overlay.style.pointerEvents = "auto";
      disableScroll();
    } else {
      videoModalTl.reverse();
      video.removeAttribute("controls");
      video.muted = true;
      overlay.style.pointerEvents = "none";
      enableScroll();
    }
  });

  // Click outside to close (optional)
  overlay.addEventListener("click", () => {
    if (isPlaying) video.click();
  });
});

//----------------------------Swippper js-----------------------------------------------------------

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  speed : 4500,
  loop: true,
  autoplay: {
    delay: 0,
    disableOnInteraction: true,
  },
});


//--------------------------------------------------------------------------------

// document.addEventListener("DOMContentLoaded", () => {
//     const video = document.querySelector("#page1 video");
//     const cursor = document.querySelector("#cursor");
//     let isPlaying = false;

//     // Create and style the black overlay
//     const overlay = document.createElement("div");
//     Object.assign(overlay.style, {
//         position: "fixed",
//         top: 0,
//         left: 0,
//         width: "100vw",
//         height: "100vh",
//         backgroundColor: "rgba(0, 0, 0, 0.9)",
//         opacity: "0",
//         pointerEvents: "none",
//         zIndex: "1000"
//     });
//     document.body.appendChild(overlay);

//     // Initial video styles (so GSAP has values to animate from)
//     Object.assign(video.style, {
//         position: "fixed",
//         top: "50%",
//         left: "50%",
//         transform: "translate(-50%, -50%) scale(0)",
//         zIndex: "1001",
//         transformOrigin: "center center"
//     });

//     // GSAP animation timeline
//     const videoTl = gsap.timeline({ paused: true });

//     videoTl
//         .to(overlay, {
//             opacity: 1,
//             duration: 0.3,
//             onStart: () => {
//                 overlay.style.pointerEvents = "auto";
//             }
//         })
//         .to(video, {
//             scale: 1,
//             rotate: 45,
//             duration: 0.5,
//             ease: "power2.inOut"
//         })
//         .to(video, {
//             rotate: 0,
//             width: "80vw",
//             height: "65vh",
//             duration: 0.4,
//             ease: "power2.inOut"
//         });

//     video.addEventListener("click", () => {
//         if (!isPlaying) {
//             isPlaying = true;
//             cursor.textContent = "Close Reel";

//             videoTl.play();
//             video.controls = true;
//             video.muted = false;
//             video.play(); // Optional: start playing automatically
//         } else {
//             isPlaying = false;
//             cursor.textContent = "▶ Play Reel";

//             videoTl.reverse();
//             video.controls = false;
//             video.muted = true;
//             video.pause(); // Optional: pause when closing
//         }
//     });

//     // Allow overlay click to close video
//     overlay.addEventListener("click", () => {
//         if (isPlaying) {
//             video.click(); // Trigger close logic
//         }
//     });
// });
