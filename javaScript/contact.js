const burger = document.querySelector(".burger")
const bar1 = document.querySelector(".bar1")
const bar2 = document.querySelector(".bar2")
const bar3 = document.querySelector(".bar3")
const cross = document.querySelector(".cross");
const mobileNavMenu = document.querySelector(".mobileNavMenu");
const profile = document.querySelector(".profile");
const profileDdWrapper = document.querySelector(".profileDdWrapper");
const submit = document.querySelector(".submit");
const fName = document.querySelector(".fName");
const lName = document.querySelector(".lName");
const message = document.querySelector(".message");




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


//Passing Inputs to Comments Page

// submit.addEventListener("click" , (e)=>{
//     e.preventDefault();

//     var passItems = new URLSearchParams;
//     passItems.append = ("fName", fName.value)
//     passItems.append = ("lName", lName.value)
//     passItems.append = ("message", message.value)
//     location.href = "../pages/comments.html" + passItems.toString();

// })
