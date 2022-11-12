//Swiper slider
const swiper = new Swiper(".bg-slider-thumbs", {
    loop: false,
    spaceBetween: 0,
    slidesPerView: 0,
});
const swiper2 = new Swiper(".bg-slider", {
    loop: false,
    spaceBetween: 0,
    thumbs: {
        swiper: swiper,
    },
});

//Navigation bar effects on scroll

//Responsive navigation menu toggle