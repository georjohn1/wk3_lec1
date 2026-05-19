// TODO: write a function called welcome() that puts a greeting into #banner.
// It should look something like: "Welcome! Today is Mon May 18 2026"

// Hint:
//   const banner = document.querySelector("#banner");
//   const today = new Date().toDateString();
//   banner.innerHTML = `Welcome! Today is ${today}`;
function welcome() {
    console.log("hi")
    const banner = document.querySelector("#banner");
    const today = new Date().toDateString();
    banner.innerHTML=`Welcome! Today is ${today}`;
}