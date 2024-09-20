document.addEventListener('DOMContentLoaded', function() {
    const carouselSlides = document.querySelectorAll('.carousel-slide');
    const prevButton = document.querySelector('.carousel-button.prev');
    const nextButton = document.querySelector('.carousel-button.next');
    
    let currentSlide = 0;

    function showSlide(index) {
        carouselSlides[currentSlide].classList.remove('active');
        carouselSlides[index].classList.add('active');
        currentSlide = index;
    }

    function nextSlide() {
        showSlide((currentSlide + 1) % carouselSlides.length);
    }

    function prevSlide() {
        showSlide((currentSlide - 1 + carouselSlides.length) % carouselSlides.length);
    }

    nextButton.addEventListener('click', nextSlide);
    prevButton.addEventListener('click', prevSlide);

    // 自动轮播
    setInterval(nextSlide, 5000); // 每5秒切换一次
});