// Auto slide carousel
const carouselSlides = document.querySelectorAll('.carousel-slide');
let currentSlide = 0;

function showSlide(slideIndex) {
  carouselSlides.forEach((slide) => {
    slide.style.display = 'none';
  });

  carouselSlides[slideIndex].style.display = 'block';
}

function nextSlide() {
  currentSlide++;
  if (currentSlide >= carouselSlides.length) {
    currentSlide = 0;
  }
  showSlide(currentSlide);
}

setInterval(nextSlide, 3000);

// Form validation
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();

  // Perform form validation
  // Add your validation logic here

  // If form is valid, submit the form
  contactForm.submit();
});
