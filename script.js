// script.js

document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelector('.slides');
    const slideCount = document.querySelectorAll('.slide').length;
    let currentIndex = 0;

    const showSlide = (index) => {
        const offset = -index * 100;
        slides.style.transform = `translateX(${offset}%)`;
    };

    document.querySelector('.next').addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % slideCount;
        showSlide(currentIndex);
    });

    document.querySelector('.prev').addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + slideCount) % slideCount;
        showSlide(currentIndex);
    });

    // Optional: auto-slide
    setInterval(() => {
        currentIndex = (currentIndex + 1) % slideCount;
        showSlide(currentIndex);
    }, 3000); // Change slide every 3 seconds
});
