//Animation for cursor 
var video = document.querySelector("#page1 video");
var cursor = document.querySelector("#cursor");

// Initially hide the cursor
gsap.set(cursor, {
    scale: 0
});

// Show cursor only on video
video.addEventListener("mouseenter", function(){
    gsap.to(cursor, {
        scale: 1,
        duration: 0.3,
        opacity : 1
    });
});

video.addEventListener("mouseleave", function(){
    gsap.to(cursor, {
        scale: 0,
        duration: 0.3,
        opacity : 0
    });
});

// Make cursor follow mouse precisely on video
video.addEventListener("mousemove", (event) => {
    const rect = video.getBoundingClientRect();
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top 
    
    gsap.to(cursor, {
        x: x,
        y: y,
        duration: 0.5
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
    opacity: 0
});

// Big video animations
bigImg.addEventListener("mouseenter", function(){
    gsap.to(bigImg.querySelector("img"), {
        opacity: 0.5,
        duration: 0.3
    });
    gsap.to(bigVideo, {
        scale: 1,
        opacity: 1,
        duration: 0.3
    });
});

bigImg.addEventListener("mouseleave", function(){
    gsap.to(bigImg.querySelector("img"), {
        opacity: 1,
        duration: 0.3
    });
    gsap.to(bigVideo, {
        scale: 0,
        opacity: 0,
        duration: 0.3
    });
});

bigImg.addEventListener("mousemove",(event)=>{
    const rect = bigImg.getBoundingClientRect();
    const videoRect = bigVideo.getBoundingClientRect();
    
    // Calculate the maximum allowed position
    const maxX = rect.width - videoRect.width;
    const maxY = rect.height - videoRect.height;
    
    // Calculate the position relative to the image using clientX/clientY and rect.top
    let x = event.clientX - rect.left - (videoRect.width / 2);
    let y = event.clientY - rect.top - (videoRect.height / 2);
    
    // Clamp the values to keep video within image boundaries
    x = Math.max(0, Math.min(x, maxX));
    y = Math.max(0, Math.min(y, maxY));

    gsap.to(bigVideo, {
        x: x,
        y: y,
        duration: 0.3
    });
});

// Left video animations
document.querySelector(".leftImg").addEventListener("mouseenter", function(){
    gsap.to(leftVideo, {
        scale: 1,
        opacity: 1,
        duration: 0.3
    });
});

document.querySelector(".leftImg").addEventListener("mouseleave", function(){
    gsap.to(leftVideo, {
        scale: 0,
        opacity: 0,
        duration: 0.3
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
    let x = event.clientX - rect.left - (videoRect.width / 2);
    let y = event.clientY - rect.top - (videoRect.height / 2);
    
    // Clamp the values to keep video within image boundaries
    x = Math.max(0, Math.min(x, maxX));
    y = Math.max(0, Math.min(y, maxY));

    gsap.to(leftVideo, {
        x: x,
        y: y,
        duration: 0.3
    });
});

// Right video animations
document.querySelector(".rightImg").addEventListener("mouseenter", function(){
    gsap.to(rightVideo, {
        scale: 1,
        opacity: 1,
        duration: 0.3
    });
});

document.querySelector(".rightImg").addEventListener("mouseleave", function(){
    gsap.to(rightVideo, {
        scale: 0,
        opacity: 0,
        duration: 0.3
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
    let x = event.clientX - rect.left - (videoRect.width / 2);
    let y = event.clientY - rect.top - (videoRect.height / 2);
    
    // Clamp the values to keep video within image boundaries
    x = Math.max(0, Math.min(x, maxX));
    y = Math.max(0, Math.min(y, maxY));

    gsap.to(rightVideo, {
        x: x,
        y: y,
        duration: 0.3
    });
});

///--------------------------------------------------------------------------------
//reel2 animation

