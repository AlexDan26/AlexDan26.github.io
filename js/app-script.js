function fillthumb() {
    document.getElementById("iconethumb").style.class = "bi-hand-thumbs-up-fill";
}

const mySwiperOne = new Swiper (swiper-filters, parameters {
    slidesPerView: 6,
    spaceBetween: 20,
    grabCursor: true,

});

const mySwiperTwo = new Swiper (swiper-featured-artworks, parameters{
    slidesPerView: 2,
    spaceBetween: 20,
    centeredSlides: true,
    grabCursor: true,

});