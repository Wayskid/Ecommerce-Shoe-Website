const burger = document.querySelector(".burger")
const bar1 = document.querySelector(".bar1")
const bar2 = document.querySelector(".bar2")
const bar3 = document.querySelector(".bar3")
const cross = document.querySelector(".cross");
const mobileNavMenu = document.querySelector(".mobileNavMenu");
const profile = document.querySelector(".profile");
const profileDdWrapper = document.querySelector(".profileDdWrapper");
const showPrice = document.querySelector(".displayPrice");
const cartSection = document.querySelector(".cartSection");
const placeItemInCart = document.querySelector(".placeItemInCart");
const cartItemsList = document.querySelector(".cartItemsList");




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


    // const fName = document.querySelector(".fName");
    // var params =  new URLSearchParams()
    // params.append("fName", fName.value)

    // location.href = "../pages/cart.html";


    const ul = document.createElement("ul");
    ul.className = "cartList";


    const li = document.createElement("li");
    li.className = "itemPic";
    const img = document.createElement("img");
    img.className = "itemPicImg";
    img.src = localStorage.getItem("IMAGE");


    const li2 = document.createElement("li");
    li2.className = "itemPrice";
    li2.innerText = localStorage.getItem("PRICE");


    const li3 = document.createElement("li");
    li3.className = "itemQnty";
    li3.innerText = localStorage.getItem("QTY");


    //To get Toatl
    const numToCalc = Number(li2.innerText.replace("$" , ""));
    const qntyToCalc = Number(li3.innerText);
    const li4 = document.createElement("li");
    li4.className = "totalPrice boldTotal";
    li4.innerText = "$" + (numToCalc * qntyToCalc);


    const li5 = document.createElement("li");
    li5.className = "cartItemBtn";
    li5.innerText = "x";


    cartItemsList.appendChild(ul)
    ul.appendChild(li);
    ul.appendChild(li2);
    ul.appendChild(li3);
    ul.appendChild(li4);
    ul.appendChild(li5);
    li.appendChild(img);

    placeItemInCart.classList.add(".hidePlaceIIC")



    // const p1 = document.createElement("p");
    // p1.className = "itemPic";
    // const img = document.createElement("img");
    // img.className = "itemPicImg";
    // let url = new URL(localStorage.getItem("IMAGE"));
    // img.src = url;


    // const p2 = document.createElement("p");
    // p2.className = "itemPrice";
    // p2.innerText = localStorage.getItem("PRICE");


    // const p3 = document.createElement("p");
    // p3.className = "itemQnty";
    // p3.innerText = localStorage.getItem("QTY");


    // const p4 = document.createElement("p");
    // p4.className = "totalPrice";

    // const p5 = document.createElement("p");
    // p5.className = "cartItemBtn";
    // p5.innerText = "x";


    


    

    // p5.addEventListener("click", (ev) => {
    //     ev.target.parentElement.remove();
    //     localStorage.clear();
    // })
}

localStorage.setItem("cartFunc", cartFunc())