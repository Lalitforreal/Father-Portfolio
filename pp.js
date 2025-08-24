
const scroll = new LocomotiveScroll({
    el: document.querySelector('.data-scroll-container'),
    smooth: true,
    lerp: 0.08 // optional: adjust scroll speed
});

var typed = new Typed('#element', {
strings: ['Sanmica Manufacturing,', 'Production line management,', 'and Quality Control.'],
typeSpeed: 40,    // Faster typing (40ms per character)
backSpeed: 20,    // Optional, faster deleting
loop: true  
});



// function mouseFollower(){
//     window.addEventListener("mousemove", function(details){
//          document.querySelector('#minicircle').style.transform = `translate(${details.clientX}px,${details.clientY}px)`;
//     })
// }
// mouseFollower();


function mouseFollower(xScale,yScale) {
    const minicircle = document.querySelector('#minicircle');
    const scrollContainer = document.querySelector('.data-scroll-container');
    let mouseX = 0, mouseY = 0;  
    let currentX = 0, currentY = 0;
    const speed = 0.25;

    window.addEventListener("mousemove", (e) => {
        // Get Locomotive's scroll offset safely
        const scrollY = window.scroll && window.scroll.scroll? window.scroll.scroll.instance.scroll.y: 0;

        
        // Correctly update both X and Y
        const containerRect = scrollContainer.getBoundingClientRect();
        mouseX = e.clientX;
        mouseY = e.clientY + scrollY;

        
    });

    function animate() {
        // Smoothly interpolate current position towards mouse position
        currentX += (mouseX - currentX) * speed;
        currentY += (mouseY - currentY) * speed;

                minicircle.style.transform = `translate(${currentX}px, ${currentY}px) translate(-50%, -50%)`;
                requestAnimationFrame(animate);
    }
    animate();
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

//second page animation start

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

// Directly observe all animated elements without stagger delays
document.querySelectorAll(".animate-on-scroll").forEach(el => observer.observe(el));
// Second page animation end

//second page animation end


//physics of the mouse chaser

// function mouseSkew(){
//     //define default scale value 
//     var xScale =1;
//     var yScale = 1;

//     var xPrev = 0;
//     var yPrev = 0;
//     window.addEventListener('mousemove',function(details){
//         // var xDiff = details.clientX - xPrev;
//         // var yDiff = details.clientY - yPrev;
        
//         xScale = gsap.utils.clamp(0.8,1.2, details.clientX - xPrev);
//         yScale = gsap.utils.clamp(0.8,1.2, details.clientY - yPrev);
//         //update the prev values
//         xPrev = details.clientX;
//         yPrev = details.clientY;

//         //ab yah mouse follower to xscale adn yscale ki values bhejdo
//         mouseFollower(xScale,yScale);

//     });
// }
// mouseSkew();



//now the page effect

// teeno element ko sleect karo, uske baad teeno par ek mousemove lagao,
// jab mousemove ho to ye pata karo ki mouse kaha par hai, jiska matlab hai
// mouse ki x and y position pata karo, ab mouse ki x y position ke badle us
// image ko show karo and us image ko move karo, move karte waqt rotate karo,
// and jaise jaise mouse tez chale waise waise rotation bhi tez ho jaye

document.querySelectorAll('.exp').forEach(function(exp){
    exp.addEventListener("mousemove",function(details){
        // console.log(details.clientX, details.clientY);
        // you'll get the value of the mouse when it is hovered over the elems

        //now to show image 
        // exp.querySelector("img");
        gsap.to(exp.querySelector("img"),{
            opacity: 1,
            scale: 1,
            duration: 0.3,
            ease: "power2.out",
            display: "block"
        });
    });
    


    
});

