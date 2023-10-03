


// scrolled
// ================
const Nav = document.querySelector(".navbar");
const mobileNav = document.querySelector(".hamburger");
window.addEventListener("scroll", function () {
  if (window.scrollY > 0) {
    Nav.classList.add("scrolled");
    mobileNav.classList.add("scrolled");
  } else {
    Nav.classList.remove("scrolled");
    mobileNav.classList.remove("scrolled");
  }
})



const customSelect = document.querySelector(".custom-select");
const options = customSelect.querySelector(".options");

customSelect.addEventListener("click", function () {
  options.style.display = options.style.display === "block" ? "none" : "block";
});
