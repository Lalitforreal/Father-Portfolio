
// function clickMe(){
//     let button = document.querySelector("#button");
//     button.textContent = "hehe hello ji";
// }

// let button = document.querySelector("#button");
// button.addEventListener('click',clickMe);

//default event change karne ke tareeka (add an anchor tag in html with a link,
//we'll change it's default event and make it chagne the text to something)

// let anchorEvent = document.getElementById('fanchor');

// anchorEvent.addEventListener('click', function(event){
//     event.preventDefault();
//     anchorEvent.textContent = "padhle chess break me khelna"
// });

//now how to handle many event listner
// let paras = document.querySelectorAll('p');


// for (let i = 0 ; i< paras.length; i++){
    //     let para = paras[i];
    //     para.addEventListener('click', alertPara);
    // }
    // function alertPara(event){
    //     if(event.target.tagName === 'P'){
    //         alert("You have clicked on para: " + event.target.textContent); //here the event.target.textContent gives the current text inside the element youre accessing
    //     }
    // }

    // let myDiv = document.getElementById('wrapper');

    // document.addEventListener('click', alertPara);


    document.addEventListener("DOMContentLoaded", insertScript);

    function insertScript(event){
        let script = document.createElement('script');
        script.src = "script.js";
        
        //now append to head or body 
        document.body.appendChild(script);
        console.log("script added dynamically")
    }