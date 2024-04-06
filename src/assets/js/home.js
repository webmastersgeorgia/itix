let scrolllSliderMainWrapper = document.getElementById('scroll-slider-main-wrapper');
let scrolllSliderMainImg = scrolllSliderMainWrapper.querySelector('#scroll-slider-main-img');
let scrolllSliderMainTitle = scrolllSliderMainWrapper.querySelector('#scroll-slider-main-title');
let scrolllSliderMainDate = scrolllSliderMainWrapper.querySelector('#scroll-slider-main-date');
let scrolllSliderMainPin = scrolllSliderMainWrapper.querySelector('#scroll-slider-main-pin');

const scrollSliderMainListItem = document.querySelectorAll('.scroll-slider__main-list-item');

scrollSliderMainListItem.forEach(element => {
    element.addEventListener('mouseover', function() {
        scrollSliderMainListItem.forEach(element => element.classList.remove('shadow-[0_2px_4px_0_rgba(0,0,0,0.08)]', 'opacity-70'));

        element.classList.add('shadow-[0_2px_4px_0_rgba(0,0,0,0.08)]', 'opacity-70');

        scrolllSliderMainWrapper.href = element.dataset.href;
        scrolllSliderMainImg.src = element.src;
        scrolllSliderMainTitle.innerHTML = element.dataset.title;
        scrolllSliderMainDate.innerHTML = element.dataset.date;
        scrolllSliderMainPin.innerHTML = element.dataset.pin;
    });
});

var slider = tns({
    container: '.swipe-slider',
    items: 1,
    prevButton: '.swipe-slider-previous',
    nextButton: '.swipe-slider-next',
    // responsive: {
    //     640: {
    //     edgePadding: 20,
    //     gutter: 20,
    //         items: 2
    //     },
    //     700: {
    //         gutter: 30
    //     },
    //     900: {
    //         items: 3
    //     }
    // }
});