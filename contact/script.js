//animation for the text and images
//animation parameters are set within the html tags
AOS.init({ offset: 0 });


// Home and Cancel Button for smaller screens..
function hamburg() {
    const navbar = document.querySelector(".dropdown")
    navbar.style.transform = "translateY(0px)"
}

function cancel() {
    const navbar = document.querySelector(".dropdown")
    navbar.style.transform = "translateY(-400px)"
}

//Typing animation
var typed = new Typed('#type-animation', {
    strings: ['.....................'],
    typeSpeed: 200,
    showCursor: false,
    startDelay: 700,
    backSpeed: 35,
    loop: true,
});

//Typing animation
var typed = new Typed('#but-ani', {
    strings: ['Scroll down!', 'Hire Me!'],
    typeSpeed: 150,
    startDelay: 700,
    backSpeed: 40,
    loop: true,
});