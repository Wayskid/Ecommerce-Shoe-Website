const burger = document.querySelector(".burger")
const bar1 = document.querySelector(".bar1")
const bar2 = document.querySelector(".bar2")
const bar3 = document.querySelector(".bar3")
const cross = document.querySelector(".cross");
const mobileNavMenu = document.querySelector(".mobileNavMenu");
const profile = document.querySelector(".profile");
const profileDdWrapper = document.querySelector(".profileDdWrapper");
const submit = document.querySelector(".submit");
const lName = document.querySelector(".lName");
const message = document.querySelector(".message");
const chLength = document.querySelector(".chLength");
const chValue = document.querySelector(".chValue");




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


//TextArea Length

message.addEventListener("keyup", () => {
    chLength.classList.add("showChL");

    const messageLength = message.value.length;
    chValue.innerText = messageLength;

    if (messageLength > 180) {
        chLength.classList.add("chLColor");
        submit.classList.add("deactivate")
    }

    else{
        chLength.classList.remove("chLColor");
        submit.classList.remove("deactivate")
    }
})
