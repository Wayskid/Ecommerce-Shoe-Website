const burger = document.querySelector(".burger")
const bar1 = document.querySelector(".bar1")
const bar2 = document.querySelector(".bar2")
const bar3 = document.querySelector(".bar3")
const cross = document.querySelector(".cross");
const mobileNavMenu = document.querySelector(".mobileNavMenu");
const profile = document.querySelector(".profile");
const profileDdWrapper = document.querySelector(".profileDdWrapper");


const commentList = document.querySelector(".commentList");
const details = document.querySelector(".details");
const opinion = document.querySelector(".opinion");
const like = document.querySelectorAll(".like");
const dislike = document.querySelectorAll(".dislike");



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

//I could have easily used localStorage to store my form data but i decided to used Get method to help practice and learn regEx.

const formInfo = window.location.search;
var fName = formInfo.match(/(?<=firstName=).[a-zA-Z]+/g)
var lName = formInfo.match(/(?<=lastName=).[a-zA-Z]+/g)
var oName = formInfo.match(/(?<=otherNames=).[a-zA-Z]+/g)
var message = formInfo.replace(/\+/g, " ").replace(/\%27/g, "'").match(/(?<=message=).[a-zA-Z\d\W]+/g);
// console.log(fName);
// console.log(lName);
// console.log(oName);
// console.log(message);
// console.log(formInfo);

if (formInfo.match("firstName")) {
    


const li = document.createElement("li");
li.className = "comment";

const div1 = document.createElement("div");
div1.className = "details";
div1.innerText = fName + " " + oName + " " + lName;


const textarea = document.createElement("textarea");
textarea.className = "opinion";
textarea.type = "text";
textarea.innerHTML = message;
textarea.setAttribute("readonly", true)


const div2 = document.createElement("div");
div2.className = "reaction";

const div3 = document.createElement("div");
div3.className = "likeUnlike";

const i1 = document.createElement("i");
i1.innerText = "Like";

const i2 = document.createElement("i");
i2.innerText = "Dislike";

const div4 = document.createElement("div");
div4.className = "dltEdit";

const p1 = document.createElement("p");
p1.className = "edit";
p1.innerText = "Edit";

const p2 = document.createElement("p");
p2.className = "delete";
p2.innerText = "Delete";

commentList.appendChild(li);
li.appendChild(div1);
li.appendChild(textarea);
li.appendChild(div2);
div2.appendChild(div3);
div2.appendChild(div4);
div3.appendChild(i1);
div3.appendChild(i2);
div4.appendChild(p1);
div4.appendChild(p2);


p1.addEventListener("click", ()=>{

    if (p1.innerText == "Edit") {
        
            textarea.removeAttribute("readonly")
            textarea.focus()
            p1.innerText = "Save";        
    }
    else {
            textarea.setAttribute("readonly", true);
            p1.innerText = "Edit";
    }
});



p2.addEventListener("click", (d)=>{
    d.target.parentElement.parentElement.parentElement.remove();
});


//Like and dislike for your comments

i1.addEventListener("click", ()=>{
    i1.style.color = "red"
    i1.style.transform = "scale(1.2)"
    i1.style.fontWeight = "900"
    i1.innerText = "Liked";
        i2.style.color = "black"
        i2.style.fontWeight = "200"
        i2.style.transform = "scale(1)"
        i2.innerText = "Dislike";
});

i2.addEventListener("click", ()=>{
    i2.style.color = "darkred"
    i2.style.transform = "scale(1.2)"
    i2.style.fontWeight = "900"
    i2.innerText = "Disliked";
        i1.style.color = "black"
        i1.style.fontWeight = "200"
        i1.style.transform = "scale(1)"
        i1.innerText = "Like";
});



}



// //Like and dislike for other comments


like.forEach(like => {
    like.addEventListener("click", (c)=>{

        c.target.style.color = "red"
        c.target.style.transform = "scale(1.2)"
        c.target.style.fontWeight = "900"
        c.target.innerText = "Liked";
        c.target.nextElementSibling.style.color = "black"
        c.target.nextElementSibling.style.transform = "scale(1)"
        c.target.nextElementSibling.style.fontWeight = "200"
        c.target.nextElementSibling.innerText = "Dislike";
        const likeCount = c.target.parentElement.parentElement.parentElement.children[0].children[1];
        likeCount.classList.toggle("blinkAnime");

        const likeValue = parseFloat(likeCount.innerText);
        let plusLike = likeValue + 1
        likeCount.innerText = plusLike + " Likes";   
})
});

dislike.forEach(dislike => {
    dislike.addEventListener("click", (d)=>{

        d.target.style.color = "darkred"
        d.target.style.transform = "scale(1.2)"
        d.target.style.fontWeight = "900"
        d.target.innerText = "Disliked";
        d.target.previousElementSibling.style.color = "black"
        d.target.previousElementSibling.style.transform = "scale(1)"
        d.target.previousElementSibling.style.fontWeight = "200"
        d.target.previousElementSibling.innerText = "Like";
        const likeCount = d.target.parentElement.parentElement.parentElement.children[0].children[1];
        const likeValue = parseFloat(likeCount.innerText)
        likeCount.innerText = likeValue - 1 + " Likes"
        likeCount.classList.toggle("blinkAnime");
})
});




