// DEFINING DOM ELEMENTS

const heroImage = document.querySelector("#hero__animation__img");

const tl = document.querySelector("#grid__tl");
// const tr = document.querySelector("#grid__tr");
// const bl = document.querySelector("#grid__bl");
// const br = document.querySelector("#grid__br");

const tlBtn = document.querySelector("#grid__tl__btn");
// const trBtn = document.querySelector("#grid__tr__btn");
// const blBtn = document.querySelector("#grid__bl__btn");
// const brBtn = document.querySelector("#grid__br__btn");

const tlContent = document.querySelector("#grid__tl__content");
// const trContent = document.querySelector("#grid__tr__content");
// const blContent = document.querySelector("#grid__bl__content");
// const brContent = document.querySelector("#grid__br__content");

// const projectOne = document.querySelector(".p-1");
// const projectTwo = document.querySelector(".p-2");
// const projectThree = document.querySelector(".p-3");

// DEFINING COLOURS AND POSITIONS

const bgColour = "var(--bg)";
const bgColourAlt = "var(--bg-alt)";
const textColour = "var(--text)";
const textColourAlt = "var(--text-alt)";

let tlActive = "translateX(5vw) translateY(0)";
let tlHidden = "translateX(-100vw) translateY(-100vh)";

let trActive = "translateX(-5vw) translateY(0)";
let trHidden = "translateX(100vw) translateY(-100vh)";

let blActive = "translateX(10vw) translateY(7vh)";
let blHidden = "translateX(-100vw) translateY(100vh)";

let brActive = "translateX(-5vw) translateY(0)";
let brHidden = "translateX(100vw) translateY(100vh)";

// DEFINING OPEN CORNER

let activeCorner = "";

// ADD EVENT LISTENER TO WINDOW OBJECT TO LISTEN FOR RESIZE EVENTS

//window.addEventListener("resize", handleWindowResize);

// FUNCTION THAT HANDLES STYLING WHEN RISIZING WINDOW

// function handleWindowResize() {

// }

// STORE LAST REVERSE ANIMATION, READY TO BE PLAYED

let lastReverseAnimation = "";

// PLAY ANIMATION FUNCTION

function playAnimation(animation, reverseAnimation){
    // Remove all animation classes from heroImage
    heroImage.className = "";

    if (lastReverseAnimation !== ""){
        // Clicked something
        heroImage.classList.add(lastReverseAnimation);

        setTimeout(function () {
            heroImage.classList.remove(lastReverseAnimation);
            heroImage.classList.add(animation);
            lastReverseAnimation = reverseAnimation;
        }, 200);

    } else {
        heroImage.classList.add(animation);
        lastReverseAnimation = reverseAnimation;
    }
}

// function playClosingAnimation(reverseAnimation){

// }

// ON CLICK CORNER BUTTON FUNCTIONS

tlBtn.onclick = function () {
    if (activeCorner == "top-left"){
        // playClosingAnimation("reverse-animate-top-left");
    } else {
        // trBtn.innerHTML = "Experience";
        // blBtn.innerHTML = "Projects";
        // brBtn.innerHTML = "Contact";

        // Setting activeCorner
        activeCorner = "top-left";
        tlBtn.innerHTML = "&uarr;<br/>About";

        //handleWindowResize();
        playAnimation("animate-top-left", "reverse-animate-top-left");

        // Change background colours
        // trBtn.style.background = bgColour;
        // brBtn.style.background = bgColour;
        // blBtn.style.background = bgColour;
        tlBtn.style.background = bgColourAlt;

        // Change text colours
        // trBtn.style.color = textColour;
        // brBtn.style.color = textColour;
        // blBtn.style.color = textColour;
        tlBtn.style.color = textColourAlt;

        // Change positions of the corner content
        // trContent.style.transform = trHidden;
        // brContent.style.transform = brHidden;
        // blContent.style.transform = blHidden;
        tlContent.style.transform = tlActive;
    }
};

// trBtn.onclick = function () {
//     if (activeCorner == "top-right"){
//         playClosingAnimation("reverse-animate-top-right");
//     } else {
//         tlBtn.innerHTML = "About";
//         blBtn.innerHTML = "Projects";
//         brBtn.innerHTML = "Contact";

//         // Setting activeCorner
//         activeCorner = "top-right";
//         trBtn.innerHTML = "&uarr;<br/>Experience";

//         handleWindowResize();
//         playAnimation("animate-top-right", "reverse-animate-top-right");

//         // Change background colours
//         trBtn.style.background = bgColourAlt;
//         brBtn.style.background = bgColour;
//         blBtn.style.background = bgColour;
//         tlBtn.style.background = bgColour;

//         // Change text colours
//         trBtn.style.color = textColourAlt;
//         brBtn.style.color = textColour;
//         blBtn.style.color = textColour;
//         tlBtn.style.color = textColour;

//         // Change positions of the corner content
//         trContent.style.transform = trActive;
//         brContent.style.transform = brHidden;
//         blContent.style.transform = blHidden;
//         tlContent.style.transform = tlHidden;
//     }
// };

// brBtn.onclick = function () {
//     if (activeCorner == "bottom-right"){
//         playClosingAnimation("reverse-animate-bottom-right");
//     } else {
//         tlBtn.innerHTML = "About";
//         blBtn.innerHTML = "Projects";
//         trBtn.innerHTML = "Experience";

//         // Setting activeCorner
//         activeCorner = "bottom-right";
//         trBtn.innerHTML = "Contact<br/>&darr;";

//         handleWindowResize();
//         playAnimation("animate-bottom-right", "reverse-animate-bottom-right");

//         // Change background colours
//         trBtn.style.background = bgColour;
//         brBtn.style.background = bgColourAlt;
//         blBtn.style.background = bgColour;
//         tlBtn.style.background = bgColour;

//         // Change text colours
//         trBtn.style.color = textColour;
//         brBtn.style.color = textColourAlt;
//         blBtn.style.color = textColour;
//         tlBtn.style.color = textColour;

//         // Change positions of the corner content
//         trContent.style.transform = trHidden;
//         brContent.style.transform = brActive;
//         blContent.style.transform = blHidden;
//         tlContent.style.transform = tlHidden;
//     }
// };

// blBtn.onclick = function () {
//     if (activeCorner == "bottom-left"){
//         playClosingAnimation("reverse-animate-bottom-left");
//     } else {
//         trBtn.innerHTML = "Experience";
//         tlBtn.innerHTML = "About";
//         brBtn.innerHTML = "Contact";

//         // Setting activeCorner
//         activeCorner = "bottom-left";
//         tlBtn.innerHTML = "Projects<br/>&darr;";

//         handleWindowResize();
//         playAnimation("animate-bottom-left", "reverse-animate-bottom-left");

//         // Change background colours
//         trBtn.style.background = bgColour;
//         brBtn.style.background = bgColour;
//         blBtn.style.background = bgColourAlt;
//         tlBtn.style.background = bgColour;

//         // Change text colours
//         trBtn.style.color = textColour;
//         brBtn.style.color = textColour;
//         blBtn.style.color = textColourAlt;
//         tlBtn.style.color = textColour;

//         // Change positions of the corner content
//         trContent.style.transform = trHidden;
//         brContent.style.transform = brHidden;
//         blContent.style.transform = blActive;
//         tlContent.style.transform = tlHidden;
//     }
// };