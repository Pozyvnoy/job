const swiper = new Swiper('#swiper1', {

    effect: 'coverflow',
    grabCursor: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 1,
      stretch: 0,
      depth: 126,
      modifier: 2,
      slideShadows: false,

    },
    direction: 'vertical',
    slidesPerView:2,
    loop:true,
    centeredSlides: true,
  
});


// TIMER
let firstName = "Осталось "
let secName = "минут!"
let time = 3600;
const countDownEl = document.getElementById("timer");

setInterval(updateCountdown, 1000);

function updateCountdown() {
    const min = Math.floor(time/120);
    let sec = time % 60;
    sec = sec <10 ? "0" + sec:sec;
    countDownEl.innerHTML = `${firstName} ${min}:${sec} ${secName}`;
    time--;
}



// phone input

document.addEventListener("DOMContentLoaded", function(){
    let phoneInputs = document.querySelectorAll('input[data-tel-input]');

    let getInputNumbersValue = function(input){
        return input.value.replace(/\D/g, "");
    }


    let onPhoneInput =  function(e){
        input = e.target,
        inputNumbersValue = getInputNumbersValue(input);
        formatedInputValue = "";
        if(!inputNumbersValue){
            return input.value = "";
        }
        if(["7","8","9"].indexOf(inputNumbersValue[0])> -1){
            if(inputNumbersValue[0] == "9"){
                inputNumbersValue = "7" + inputNumbersValue
            }
            let firstSymbols = (inputNumbersValue[0] == "8") ? "8" : "+7";
            formatedInputValue = firstSymbols + " ";
            if(inputNumbersValue.length > 1){
                formatedInputValue += "(" + inputNumbersValue.substring(1,4);
            }
            if(inputNumbersValue.length >=5){
                formatedInputValue += ") " +inputNumbersValue.substring(4,7);
            }
            if (inputNumbersValue.length >= 8) {
                formatedInputValue += '-' + inputNumbersValue.substring(7, 9);
            }
            if (inputNumbersValue.length >= 10) {
                formatedInputValue += '-' + inputNumbersValue.substring(9, 11);
            }
        }
        else{
            alert("Введите код формата РФ")
        }
        input.value = formatedInputValue
    }

    for(i= 0;i<phoneInputs.length;i++){
        let input = phoneInputs[i];
        input.addEventListener("input",onPhoneInput)
    }
})

// paralax

let chat = document.getElementById("chat")
let hand = document.getElementById("hand")
window.addEventListener('scroll',function(){
    let value = this.window.scrollY;

    chat.style.right = value *0.3 + 'px';

    
})

// NAV
let navBurger = document.querySelector('.nav_burger')
let navList = document.querySelector('.nav_list')
navBurger.addEventListener('click',function(){
    navList.classList.toggle('active')

})
window.addEventListener('touchmove' ,function(){
    navList.classList.add('active')
})