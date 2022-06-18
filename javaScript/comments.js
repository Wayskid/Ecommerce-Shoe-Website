const burger = document.querySelector(".burger")
const bar1 = document.querySelector(".bar1")
const bar2 = document.querySelector(".bar2")
const bar3 = document.querySelector(".bar3")
const cross = document.querySelector(".cross");
const mobileNavMenu = document.querySelector(".mobileNavMenu");
const profile = document.querySelector(".profile");
const profileDdWrapper = document.querySelector(".profileDdWrapper");




//Click Burger To show Menu
burger.addEventListener("click", () => {
    bar1.classList.toggle("cross");
    bar2.classList.toggle("cross");
    bar3.classList.toggle("cross");
    mobileNavMenu.classList.toggle("showMobileMenu");
})

//profile dropdown
profile.addEventListener("click", () => {
    profileDdWrapper.classList.toggle("showDropdown")
})

//Get Passed Items from Contact Page

var passItems = window.location.search;
// const fName = passItems.get("firstName");
// const lName = passItems.get("lastName");
// const message = passItems.get("message");

console.log(passItems);
