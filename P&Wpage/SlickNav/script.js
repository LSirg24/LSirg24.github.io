// script.js

document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll(".slideshow img"); // Get all slideshow images
    let currentSlide = 0; // Index of the current slide

    // Function to show the current slide
    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.display = i === index ? "block" : "none"; // Show the current slide, hide others
        });
    }

    // Function to go to the next slide
    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length; // Loop back to the first slide
        showSlide(currentSlide);
    }

    // Start the slideshow (change image every 3 seconds)
    setInterval(nextSlide, 3000);

    // Show the first slide when the page loads
    showSlide(currentSlide);
});
