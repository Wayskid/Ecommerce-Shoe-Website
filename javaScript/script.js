
const burger = document.querySelector(".burger")
const bar1 = document.querySelector(".bar1")
const bar2 = document.querySelector(".bar2")
const bar3 = document.querySelector(".bar3")
const cross = document.querySelector(".cross");
const mobileNavMenu = document.querySelector(".mobileNavMenu");
const cartCount = document.querySelector(".cartCount");
const profile = document.querySelector(".profile");
const profileDdWrapper = document.querySelector(".profileDdWrapper");
const minus = document.querySelector(".minus")
const plus = document.querySelector(".plus")
const numberToBuy = document.querySelector(".numberToBuy");
const addToCart = document.querySelector(".addToCart")
const placeImg = document.querySelector(".placeImg");
const selectPic = document.querySelector(".selectPic");
const selectToView = Array.from(selectPic.children);
const carousel = document.querySelector(".carousel");
const trackContainer = document.querySelector(".trackContainer");
const slide = Array.from(trackContainer.children)
const btnRight = document.querySelector(".btnRight");
const btnLeft = document.querySelector(".btnLeft");
const newPrice = document.querySelector(".newPrice");



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



//Plus and Minus Button

let a = 0;


plus.addEventListener("click", (ev) => {
    ev.preventDefault();
    if (a < 100) {
    a++;    
    numberToBuy.value = a;
    }
    
})    

minus.addEventListener("click", (ev)=>{
    ev.preventDefault();
    if (a > 0) {
        a--;
        numberToBuy.value = a;
    }    
})    





//Click Picture To view
for (let i = 0; i < selectToView.length; i++) {
selectToView[i].addEventListener("click", (e) => {
    placeImg.innerHTML = "";
    var img = document.createElement("img");
    placeImg.appendChild(img)
    img.src = e.target.src
    img.classList = "viewedPic";

    var el = selectToView[0];

    while(el){
        if(el.tagName === "IMG"){
            el.classList.remove("eTargetClass")
        }
        el = el.nextSibling;
    }

    e.target.classList.add("eTargetClass")
})
};


//Carousel

//Right Button Switch


btnRight.addEventListener("click", () => {
const activeSlide = document.querySelector(".activeSlide");
activeSlide.previousElementSibling.classList.add("activeSlide");
activeSlide.classList.remove("activeSlide");
if (slide[0].classList.contains("activeSlide")) {
    btnRight.classList.add("hideArrow");
}
else if(slide[2].classList.contains("activeSlide")){
    btnLeft.classList.remove("hideArrow");
}
});

//Left Button Switch
btnLeft.addEventListener("click", () => {
    const activeSlide = document.querySelector(".activeSlide");

    activeSlide.nextElementSibling.classList.add("activeSlide");
    activeSlide.classList.remove("activeSlide");

    if (slide[slide.length-1].classList.contains("activeSlide")) {
        btnLeft.classList.add("hideArrow");
    }
    else if(slide[1].classList.contains("activeSlide")){
        btnRight.classList.remove("hideArrow");
    }
});





let count = 0;

//Add to LocalStorage
addToCart.addEventListener("submit", (e) => {
    if (numberToBuy.value >= 1) {
        e.preventDefault();
        
        //Cart Count
        count++;
        cartCount.innerText = count;
        cartCount.classList.add("showCartCount");

        //Add Image
        const IMG = placeImg.firstChild.src;
        localStorage.setItem("IMAGE", IMG);

        //Add Price
        const price = newPrice.innerText;
        localStorage.setItem("PRICE", price);

        //Add Quantity
        const QTY = numberToBuy.value;
        localStorage.setItem("QTY", QTY);

        //Add event
        localStorage.getItem("cartFunc");

        //reset number to buy to zero
        numberToBuy.value = "0";
        
        return;



    } else {
        



    }

    
    
})





//Add remaining Items

