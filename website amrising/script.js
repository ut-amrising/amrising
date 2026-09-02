let currentSlide = 0;
const slides = document.querySelector('.slides');
const totalSlides = document.querySelectorAll('.slide').length;

document.querySelector('.next').onclick = function() {
    currentSlide = (currentSlide + 1) % totalSlides;
    slides.style.transform = 'translateX(' + (-currentSlide * 100) + '%)';
}

document.querySelector('.prev').onclick = function() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    slides.style.transform = 'translateX(' + (-currentSlide * 100) + '%)';
}