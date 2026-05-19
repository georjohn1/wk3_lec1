// ============================================================
// Step 9 — Final Project
//
// Two things to do:
//   A) On page load: pick a random image for the header background.
//   B) When the user clicks "Shuffle", fill the 5 gallery slots with 5
//      DIFFERENT random images from the set of 20.
//
// ACCESSIBILITY NOTE
// Each gallery image carries meaning, so it needs descriptive alt text
// for screen readers. We store the alt text RIGHT NEXT TO the filename
// in the `images` array below — an "image" in our code is really an
// object with BOTH a src and an alt.
//
// The header background is decorative (it's set via CSS background-image,
// which screen readers correctly ignore), so it doesn't need alt text.
// ============================================================


// -------- THE IMAGES --------
// One object per image. Each has a `src` (where the file lives) and an
// `alt` (a short description of what's in the picture).
// REPLACE the alt text with descriptions of YOUR actual images.

const images = [
  { src: "images/img1.jpg",  alt: "Describe image 1 here" },
  { src: "images/img2.jpg",  alt: "Describe image 2 here" },
  { src: "images/img3.jpg",  alt: "Describe image 3 here" },
  { src: "images/img4.jpg",  alt: "Describe image 4 here" },
  { src: "images/img5.jpg",  alt: "Describe image 5 here" },
  { src: "images/img6.jpg",  alt: "Describe image 6 here" },
  { src: "images/img7.jpg",  alt: "Describe image 7 here" },
  { src: "images/img8.jpg",  alt: "Describe image 8 here" },
  { src: "images/img9.jpg",  alt: "Describe image 9 here" },
  { src: "images/img10.jpg", alt: "Describe image 10 here" },
  { src: "images/img11.jpg", alt: "Describe image 11 here" },
  { src: "images/img12.jpg", alt: "Describe image 12 here" },
  { src: "images/img13.jpg", alt: "Describe image 13 here" },
  { src: "images/img14.jpg", alt: "Describe image 14 here" },
  { src: "images/img15.jpg", alt: "Describe image 15 here" },
  { src: "images/img16.jpg", alt: "Describe image 16 here" },
  { src: "images/img17.jpg", alt: "Describe image 17 here" },
  { src: "images/img18.jpg", alt: "Describe image 18 here" },
  { src: "images/img19.jpg", alt: "Describe image 19 here" },
  { src: "images/img20.jpg", alt: "Describe image 20 here" },
];

const GALLERY_SIZE = 5;


// -------- HELPERS --------

// Returns a random whole number from min to max INCLUSIVE.
// e.g. randomInt(0, 19) might return 0, 5, 12, or 19.
function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Returns `count` UNIQUE random items from the array.
// Strategy: shuffle a copy of the array, then take the first `count` items.
function pickUniqueRandom(array, count) {
  // Make a copy so we don't change the original.
  const copy = array.slice();

  // Fisher–Yates shuffle (classic algorithm — don't worry about memorising it).
  for (let i = copy.length - 1; i > 0; i--) {
    const j = randomInt(0, i);
    // Swap copy[i] and copy[j]
    const temp = copy[i];
    copy[i] = copy[j];
    copy[j] = temp;
  }

  return copy.slice(0, count);
}


// -------- PART A: random header background on page load --------

function setRandomHeader() {
  const header = document.querySelector("#siteHeader");

  // Pick one image at random from the array.
  const pick = images[randomInt(0, images.length - 1)];

  // .style lets us set CSS from JavaScript.
  // CSS "background-image" becomes "backgroundImage" in JS (camelCase).
  header.style.backgroundImage = `url('${pick.src}')`;

  // Header background is decorative, so no alt text needed.
  // (If you ever made this header background MEANINGFUL — e.g. the
  // banner is the only place that shows the page topic — you would
  // add aria-label to the <header>:
  //     header.setAttribute("aria-label", pick.alt);
  // )

  console.log("Header set to:", pick.src);
}


// -------- PART B: shuffle the gallery --------

function shuffleGallery() {
  // Pick 5 unique image OBJECTS (each with src + alt).
  const chosen = pickUniqueRandom(images, GALLERY_SIZE);
  console.log("Gallery now showing:", chosen.map(i => i.src));

  // Grab all 5 <img> elements.
  const galleryImgs = document.querySelectorAll(".gallery-img");

  // Loop through them and set BOTH src AND alt from the chosen image.
  galleryImgs.forEach(function (img, index) {
    img.src = chosen[index].src;
    img.alt = chosen[index].alt;   // <-- accessibility: alt travels with the image
  });
}


// -------- WIRE IT ALL UP --------

// Run once on page load.
setRandomHeader();
shuffleGallery();

// Make the button shuffle the gallery (NOT the header — header only changes on reload).
const shuffleBtn = document.querySelector("#shuffleBtn");
shuffleBtn.addEventListener("click", shuffleGallery);
