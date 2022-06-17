const burger = document.querySelector(".burger")
const bar1 = document.querySelector(".bar1")
const bar2 = document.querySelector(".bar2")
const bar3 = document.querySelector(".bar3")
const cross = document.querySelector(".cross");
const mobileNavMenu = document.querySelector(".mobileNavMenu");
const showPrice = document.querySelector(".displayPrice");
const cartList = document.querySelector(".cartList");
const cartSection = document.querySelector(".cartSection");
const placeItemInCart = document.querySelector(".placeItemInCart");




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


//Adding to Cart Values


function cartFunc (){

    const li = document.createElement("li");
    li.className = "cartItems";

    const p1 = document.createElement("p");
    p1.className = "itemPic";
    const img = document.createElement("img");
    img.className = "itemPicImg";
    let url = new URL(localStorage.getItem("IMAGE"));
    img.src = url;

    const p2 = document.createElement("p");
    p2.className = "itemPrice";
    p2.innerText = localStorage.getItem("PRICE");


    const p3 = document.createElement("p");
    p3.className = "itemQnty";
    p3.innerText = localStorage.getItem("QTY");


    const p4 = document.createElement("p");
    p4.className = "totalPrice";

    const p5 = document.createElement("p");
    p5.className = "cartItemBtn";
    p5.innerText = "x";


    //To get Toatl
    const numToCalc = Number(p2.innerText.replace("$" , ""));
    const qntyToCalc = Number(p3.innerText);
    p4.innerText = "$" + (numToCalc * qntyToCalc);


    cartList.appendChild(li)
    li.appendChild(p1);
    li.appendChild(p2);
    li.appendChild(p3);
    li.appendChild(p4);
    li.appendChild(p5);
    p1.appendChild(img);

    p5.addEventListener("click", (ev) => {
        ev.target.parentElement.remove();
        localStorage.clear();
    })
}

localStorage.setItem("cartFunc", cartFunc())