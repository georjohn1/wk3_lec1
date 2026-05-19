// ============================================================
// Step 8 — querySelectorAll and looping
// ============================================================

// querySelector  → returns the FIRST matching element
// querySelectorAll → returns ALL matching elements (a NodeList — think "array of elements")

const cards = document.querySelectorAll(".card");

console.log("Found", cards.length, "cards");   // open the console to see this!

// forEach loops through every item in the list.
// `card` is the variable name we choose for each one as we go.
cards.forEach(function (card) {
  card.addEventListener("mouseover", function () {
    card.classList.add("active");
  });
  card.addEventListener("mouseout", function () {
    card.classList.remove("active");
  });
});

// Same idea, slightly more compact with an "arrow function":
//
//   cards.forEach((card) => {
//     card.addEventListener("mouseover", () => card.classList.add("active"));
//     card.addEventListener("mouseout",  () => card.classList.remove("active"));
//   });
//
// Don't worry about the arrow syntax yet — the version above is fine.
