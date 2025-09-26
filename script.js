
// Part 2: Functions in JS


// Function with parameters & return value
function calculateArea(width, height) {
  return width * height;
}

// Function showing local vs global scope
let globalMessage = "I am global";

function showScopeExample() {
  let localMessage = "I am local";
  console.log(globalMessage); 
  console.log(localMessage);  
}
showScopeExample();

// Reusable function to toggle animation classes
function triggerAnimation(element, className) {
  element.classList.add(className);

  // Remove class after animation ends for reusability
  element.addEventListener("animationend", () => {
    element.classList.remove(className);
  }, { once: true });
}


// Part 3: Combining CSS & JS


// Animate Box Button
const box = document.getElementById("animate-box");
const animateBtn = document.getElementById("animate-btn");

animateBtn.addEventListener("click", () => {
  triggerAnimation(box, "bounce");
});

// Modal Logic
const modal = document.getElementById("modal");
const openModal = document.getElementById("open-modal");
const closeModal = document.getElementById("close-modal");

openModal.addEventListener("click", () => {
  modal.classList.remove("hidden");
});

closeModal.addEventListener("click", () => {
  modal.classList.add("hidden");
});
