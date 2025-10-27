// Mobile Menu Toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close menu when clicking on a nav link (mobile only)
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });
});

// Testimonials Carousel
const testimonialsTrack = document.getElementById('testimonialsTrack');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const carouselDots = document.getElementById('carouselDots');

let currentIndex = 0;
const testimonialCards = document.querySelectorAll('.testimonial-card');
const totalCards = testimonialCards.length;

// Create dots
function createDots() {
    for (let i = 0; i < totalCards; i++) {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        if (i === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide(i));
        carouselDots.appendChild(dot);
    }
}

// Update carousel position
function updateCarousel() {
    const offset = -currentIndex * 100;
    testimonialsTrack.style.transform = `translateX(${offset}%)`;

    // Update dots
    document.querySelectorAll('.dot').forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex);
    });
}

// Go to specific slide
function goToSlide(index) {
    currentIndex = index;
    updateCarousel();
}

// Next slide
function nextSlide() {
    currentIndex = (currentIndex + 1) % totalCards;
    updateCarousel();
}

// Previous slide
function prevSlide() {
    currentIndex = (currentIndex - 1 + totalCards) % totalCards;
    updateCarousel();
}

prevBtn.addEventListener('click', prevSlide);
nextBtn.addEventListener('click', nextSlide);

// Initialize carousel
createDots();

// Auto-advance carousel every 8 seconds
setInterval(nextSlide, 8000);

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const el = document.getElementById('typing-text');
    const words = [
        'don\'t just build websites', 
        'build your online presence'
    ];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let delay = 100;

    function type() {
        const currentWord = words[wordIndex];

        if (!isDeleting) {
            // Typing
            el.textContent = currentWord.substring(0, charIndex + 1);
            charIndex++;

            if (charIndex === currentWord.length) {
                setTimeout(() => {
                    isDeleting = true;
                    type();
                }, 800);
                return;
            }
        } else {
            // Deleting
            el.textContent = currentWord.substring(0, charIndex - 1);
            charIndex--;

            if (charIndex === 0) {
                isDeleting = false;
                wordIndex = (wordIndex + 1) % words.length; // cycle to next word
                delay = 100;
            } else {
                delay = 50; // faster backspace
            }
        }

        setTimeout(type, delay);
    }

    type();
});