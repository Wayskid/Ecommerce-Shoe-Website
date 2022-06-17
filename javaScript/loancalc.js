const burger = document.querySelector(".burger")
const bar1 = document.querySelector(".bar1")
const bar2 = document.querySelector(".bar2")
const bar3 = document.querySelector(".bar3")
const cross = document.querySelector(".cross");
const mobileNavMenu = document.querySelector(".mobileNavMenu");
const cartCount = document.querySelector(".cartCount");
const profile = document.querySelector(".profile");
const profileDdWrapper = document.querySelector(".profileDdWrapper");

const amtBorrowed = document.querySelector(".amtBorrowed");
const interest = document.querySelector(".interest");
const timePeriod = document.querySelector(".timePeriod");
const calcBtn = document.querySelector(".calcBtn");
const results = document.querySelector(".results");
const totalPay = document.querySelector(".totalPay");
const mPayment = document.querySelector(".mPayment");
const totalInt = document.querySelector(".totalInt");
const popUp = document.querySelector(".popUp");
const popUpBtn = document.querySelector(".popUpBtn");




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


//calculate Monthly Payment




calcBtn.addEventListener("click", (e) => {
    e.preventDefault();

        const amtBorrowedVal = parseFloat(amtBorrowed.value);
        const calcInterest = parseFloat(interest.value) / 100 / 12;
        const numOfPayments = parseFloat(timePeriod.value) * 12;

        const r = Math.pow(1+calcInterest, numOfPayments)
        const mthpayment = (amtBorrowedVal * r * calcInterest)/(r-1)

    if (isFinite(mthpayment)){
        totalPay.textContent = (numOfPayments * mthpayment).toFixed(2);
        mPayment.textContent = mthpayment.toFixed(2);
        totalInt.textContent = ((numOfPayments * mthpayment) - amtBorrowedVal).toFixed(2);
        results.classList.add("showResult")
    }
    else{
        popUp.showModal()
        popUpBtn.addEventListener("click", ()=>{
            popUp.close();
        })
    }
});


