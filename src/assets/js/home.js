let scrolllSliderMainWrapper = document.getElementById('scroll-slider-main-wrapper');
let scrolllSliderMainImg = scrolllSliderMainWrapper.querySelector('#scroll-slider-main-img');
let scrolllSliderMainTitle = scrolllSliderMainWrapper.querySelector('#scroll-slider-main-title');
let scrolllSliderMainDate = scrolllSliderMainWrapper.querySelector('#scroll-slider-main-date');
let scrolllSliderMainPin = scrolllSliderMainWrapper.querySelector('#scroll-slider-main-pin');

const scrollSliderMainListItem = document.querySelectorAll('.scroll-slider__main-list-item');

scrollSliderMainListItem.forEach(element => {
    element.addEventListener('mouseover', function() {
        scrollSliderMainListItem.forEach(element => element.classList.remove('shadow-[0_0.2rem_0.4rem_0_rgba(0,0,0,0.08)]', 'opacity-70'));

        element.classList.add('shadow-[0_0.2rem_0.4rem_0_rgba(0,0,0,0.08)]', 'opacity-70');

        scrolllSliderMainWrapper.href = element.dataset.href;
        scrolllSliderMainImg.src = element.src;
        scrolllSliderMainTitle.innerHTML = element.dataset.title;
        scrolllSliderMainDate.innerHTML = element.dataset.date;
        scrolllSliderMainPin.innerHTML = element.dataset.pin;
    });
});

var slider = tns({
    container: '.swipe-slider',
    prevButton: '.swipe-slider-previous',
    nextButton: '.swipe-slider-next',
    items: 1
});