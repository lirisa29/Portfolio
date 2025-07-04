// DEFINE DOM ELEMENTS 

const toggleButton = document.querySelector("#toggle-button");
const root = document.querySelector(":root");
const storageKey = "colour-mode";
const defaultMode = "light-mode";

// LOAD THE USER'S PREFERRED COLOUR MODE FROM LOCAL STORAGE

function loadColourMode(){
    const colourMode = localStorage.getItem(storageKey);
    root.classList.add(colourMode || defaultMode);
    updateToggleButton();
}

loadColourMode();

// TOGGLE THE COLOUR MODE

toggleButton.addEventListener("click", () => {
    saveColourMode();
});

// SAVING THE USER'S PREFERRED COLOUR MODE TO LOCAL STORAGE

function saveColourMode(){
    // Check if the root element has a class of "dark-mode". If yes, then the current mode is switched to light, and vice versa.
    const currentMode = root.classList.contains("dark-mode") ? "light-mode" : "dark-mode";
    root.classList.remove("light-mode", "dark-mode");
    root.classList.add(currentMode);
    localStorage.setItem(storageKey, currentMode);
    updateToggleButton();
}

function updateToggleButton(){
    if (root.classList.contains("dark-mode")){
        toggleButton.style.backgroundImage = "var(--moon)"
    } else {
        toggleButton.style.backgroundImage = "var(--sun)"
    }
}