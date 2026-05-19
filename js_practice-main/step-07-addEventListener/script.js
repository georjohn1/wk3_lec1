// ============================================================
// Step 7 — addEventListener
// All event handling lives here. The HTML has no onclick=".." anywhere.
// ============================================================

// 1. Find the elements we want to listen to.
const helloBtn = document.querySelector("#helloBtn");
const byeBtn   = document.querySelector("#byeBtn");
const clearBtn = document.querySelector("#clearBtn");
const message  = document.querySelector("#message");

// 2. Attach a listener.
//    addEventListener("eventName", functionToRun)
//    The "eventName" is the same as the onXxx attribute, minus the "on".
//    onclick      → "click"
//    onmouseover  → "mouseover"
//    onfocus      → "focus"
//    onload       → "load"

helloBtn.addEventListener("click", function () {
  message.innerHTML = "Hello!";
});

byeBtn.addEventListener("click", function () {
  message.innerHTML = "Goodbye!";
});

clearBtn.addEventListener("click", function () {
  message.innerHTML = "";
});

// You can also pass a named function instead of an anonymous one:
//
//   function sayHello() { message.innerHTML = "Hello!"; }
//   helloBtn.addEventListener("click", sayHello);   // <- no parentheses!
//
// (No parentheses because we're passing the function itself,
//  not calling it right now.)
