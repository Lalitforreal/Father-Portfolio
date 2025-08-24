


var typed = new Typed('#element', {
strings: ['Sanmica Manufacturing,', 'Production line management,', 'and Quality Control.'],
typeSpeed: 40,    // Faster typing (40ms per character)
backSpeed: 20,    // Optional, faster deleting
loop: true  
});



function mouseFollower(){
    window.addEventListener("mousemove", function(details){
         document.querySelector('#minicircle').style.transform = `translate(${details.clientX}px,${details.clientY}px)`;
    })
}
mouseFollower();

function firstPageAnim(){
    var tl = gsap.timeline();

    tl.from('.navBar .left',{
        y : "-10",
        opacity: 0,
        duration : 2,
        ease : Expo.easeInOut

    }, "start")
        tl.to('.boundingelem',{
        y : 0,
        ease : Expo.easeInOut,
        duration: 2,
        stagger : .2 // provide .2s delay with each elem



    },"start") //wrote start as a keyword so that both the animation are done simutaneously
    
}
firstPageAnim();


const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Add the animation class
      entry.target.classList.add("show");
    } else {
      // Remove animation if you want it to reset when scrolling away
      entry.target.classList.remove("show");
    }
  });
}, {
  threshold: 0.2 // Trigger when 20% of the element is visible
});

// Apply stagger effect for experience cards
const expCards = document.querySelectorAll(".exp-wrapper .exp.animate-on-scroll");
expCards.forEach((card, index) => {
  card.style.setProperty("--delay", `${index * 0.3}s`); // 0.3s stagger delay
  observer.observe(card);
});

// Observe other animated elements normally
document.querySelectorAll(".animate-on-scroll:not(.exp)").forEach(el => observer.observe(el));