
const minus = document.querySelector(".minus")
const plus = document.querySelector(".plus")
const numberToBuy = document.querySelector(".numberToBuy");
const addToCart = document.querySelector(".addToCart")
const burger = document.querySelector(".burger")
const bar1 = document.querySelector(".bar1")
const bar2 = document.querySelector(".bar2")
const bar3 = document.querySelector(".bar3")
const cross = document.querySelector(".cross");
const mobileNavMenu = document.querySelector(".mobileNavMenu");
const placeImg = document.querySelector(".placeImg");
const selectShoe = document.querySelectorAll(".selectShoe");
// const mobileNavMenu = document.querySelector(".mobileNavMenu");
// const mobileNavMenu = document.querySelector(".mobileNavMenu");
// const mobileNavMenu = document.querySelector(".mobileNavMenu");


// const numberTyped = numberToBuy.value


//Plus and Minus Button

let a = 0;


plus.addEventListener("click", (ev) => {
    ev.preventDefault();
    a++;
    numberToBuy.value = a;
    
})

minus.addEventListener("click", (ev)=>{
    ev.preventDefault();
    if (a > 0) {
        a--;
        numberToBuy.value = a;
    }
})



//Add to Cart
addToCart.addEventListener("submit", (e) => {
    if (numberToBuy.value >= 1) {
        e.preventDefault();
        console.log(numberToBuy.value);
    } else {
        alert("Please select the quantity of item")
    }
    
})

//Click Burger To show Menu
burger.addEventListener("click", () => {
    bar1.classList.toggle("cross");
    bar2.classList.toggle("cross");
    bar3.classList.toggle("cross");
    mobileNavMenu.classList.toggle("showMobileMenu");
})

//Click Picture To view
for(i = 0; i < selectShoe.length; i++){

selectShoe[i].addEventListener("click", (e) => {
    console.log(e.target);
    placeImg.innerHTML = "";
    var img = document.createElement("img");
    placeImg.appendChild(img)
    img.src = e.target.src
    img.classList = "viewedPic";
    if(img.src = e.target.src) {
        e.target.classList.add("eTargetClass")
        e.target.nextElementSibling.classList.remove("eTargetClass");
        e.target.previousElementSibling.classList.remove("eTargetClass");
    }
})
};


//Add remaining Items

