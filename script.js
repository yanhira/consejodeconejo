let slideIndex = 0;

function moveSlide(n) {
    showSlide(slideIndex += n);
}

function showSlide(n) {
    const slides = document.getElementsByClassName("carousel-item");
    if (n >= slides.length) {
        slideIndex = 0;
    } else if (n < 0) {
        slideIndex = slides.length - 1;
    }
    for (let slide of slides) {
        slide.style.display = "none";
    }
    slides[slideIndex].style.display = "block";
}

document.addEventListener("DOMContentLoaded", function() {
    showSlide(slideIndex);
});
