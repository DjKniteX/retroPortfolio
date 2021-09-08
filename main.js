window.onscroll = function () {
  myFunction();
};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

const scriptURL =
  "https://script.google.com/macros/s/AKfycbxyaMT4ulQ0nzxSjCr6kCGqjp2XzFWD6CRmp3Mk3wutnUw8issV5Kxio69mKdJfO4Jm8Q/exec";
const form = document.forms["google-sheet"];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => alert("Email sent!"))
    .catch((error) => alert("Failed to send!"));
});
