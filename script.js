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
    navigation: {
    nextEl: '#reviews_arrow2',
    prevEl: '#reviews_arrow1',
    },
    breakpoints: {

        320: {
            direction:'horizontal',
            slidesPerView: 1,
        
        },
        
        640: {
            direction:'vertical',
        slidesPerView: 2,
        },
    }   
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

