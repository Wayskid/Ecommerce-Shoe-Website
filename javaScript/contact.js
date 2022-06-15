const burger = document.querySelector(".burger")
const bar1 = document.querySelector(".bar1")
const bar2 = document.querySelector(".bar2")
const bar3 = document.querySelector(".bar3")
const cross = document.querySelector(".cross");
const mobileNavMenu = document.querySelector(".mobileNavMenu");
const formField = document.querySelectorAll(".formField");
const required = document.querySelectorAll(".required");
const labelInput = document.querySelectorAll(".labelInput");



//Click Burger To show Menu
burger.addEventListener("click", () => {
    bar1.classList.toggle("cross");
    bar2.classList.toggle("cross");
    bar3.classList.toggle("cross");
    mobileNavMenu.classList.toggle("showMobileMenu");
})


//Click To fill form



// for(let a = 0; a < required.length; a++) {
//         const ele = required[a];
        // ele.focus();
        // ele.addEventListener("click", () => {
            // eleme.classList.add("inputFocus");
            // console.log(eleme);
            // console.log(ele);}
    // }


// for (let b = 0; b < labelInput.length; b++) {
//     const eleme = labelInput[b];
//     eleme.addEventListener("click", () => {
//     eleme.classList.add("inputFocus");
//     console.log(eleme);})


// }

// for (let i = 0; i < formField.length; i++) {
//     const element = formField[i];
    // element.addEventListener("click", () => {
        // console.log(element);
        // 


        
// }