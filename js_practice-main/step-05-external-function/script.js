// ============================================================
// Step 5 — script.js
// This file is LOADED by index.html via <script src="script.js"></script>
// ============================================================

// ---- VARIABLES ----
// `const` = a value that won't be reassigned.
// `let`   = a value that can change.
// Variables are case-sensitive: myName and myname are different.

const defaultMessage = "No greeting yet.";   // never changes
let clickCount = 0;                          // will change


// ---- FUNCTIONS ----
// Syntax:  function name(parameters) { code goes here }
// You DEFINE a function once, then CALL it as many times as you want.

function sayHello() {
  // Find the paragraph and change its text.
  const greeting = document.querySelector("#greeting");
  greeting.innerHTML = "Hello there!";
}

function greetByName() {
  // Read the value the user typed into the input box.
  const nameInput = document.querySelector("#nameInput");
  const name = nameInput.value;   // .value works on <input>, <textarea>, <select>

  const greeting = document.querySelector("#greeting");
  // Template strings use BACKTICKS (`) and let you embed variables with ${ }.
  greeting.innerHTML = `Hello, ${name}!`;
}

function showRandomNumber() {
  // Math.random() returns a number between 0 and 1.
  // Multiply, then round down with Math.floor() to get a whole number.
  const n = Math.floor(Math.random() * 100) + 1;   // 1 to 100
  clickCount = clickCount + 1;                     // same as clickCount++

  const greeting = document.querySelector("#greeting");
  greeting.innerHTML = `Random number: <strong>${n}</strong> (click #${clickCount})`;
}

function reset() {
  document.querySelector("#greeting").innerHTML = defaultMessage;
  clickCount = 0;
}

function defaultMsg(){
  document.querySelector("#greeting").innerHTML = 
  "Hello there!";
}