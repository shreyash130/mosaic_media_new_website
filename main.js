

// Mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.navigation');

menuToggle.addEventListener('click', () => {
    navigation.classList.toggle('active');
    menuToggle.classList.toggle('active');
});

// Close menu when clicking on a link
const navLinks = document.querySelectorAll('.navigation a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navigation.classList.remove('active');
        menuToggle.classList.remove('active');
    });
});

// Header scroll effect
const header = document.querySelector('.header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        header.style.padding = '1rem 0';
        header.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.7)';
    } else {
        header.style.padding = '1.5rem 0';
        header.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.5)';
    }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Scroll-triggered animations
const animateElements = document.querySelectorAll('.animate-pop-in, .animate-fade-in, .animate-slide-up, .animate-slide-in-left, .animate-slide-in-right, .animate-fade-in-up, .animate-pop-in-delay');

const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animationDelay = '0s';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

animateElements.forEach(el => {
    observer.observe(el);
});

// Form submission
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = this.querySelector('input[type="text"]').value;
        const email = this.querySelector('input[type="email"]').value;
        const message = this.querySelector('textarea').value;
        
        // Show success message
        alert('Thank you for your message! We will get back to you soon about your social impact project.');
        
        // Reset form
        this.reset();
    });
}

// Newsletter form submission
const newsletterForm = document.querySelector('.newsletter-form');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const email = this.querySelector('input[type="email"]').value;
        
        // Show success message with emoji reaction
        alert(`Thank you for subscribing! 🌱 We've added ${email} to our sustainability journey updates.`);
        
        // Reset form
        this.reset();
    });
}

// Quiz button interaction
const quizButtons = document.querySelectorAll('.quiz-section .btn');
quizButtons.forEach(button => {
    button.addEventListener('click', function(e) {
        e.preventDefault();
        if (this.textContent.includes('Watch')) {
            alert('Playing team story video: "Why We Do This"');
        } else if (this.textContent.includes('Choose')) {
            alert('Launching interactive "Choose Your Story" micro-experience');
        } else {
            alert('Learn more about our values and storytelling approach');
        }
    });
});

// Design inspiration gallery interaction (meme easter egg)
const memeItems = document.querySelectorAll('.meme-item');
memeItems.forEach((item, index) => {
    item.addEventListener('click', () => {
        if (index === 1) { // Second item as easter egg
            alert('Hidden easter egg! Playing 3-second meme about "nonprofit jargon"');
        } else {
            alert(`Insight #${index + 1}: Monthly meme about social impact!`);
        }
    });
});

// Service card interactions
const serviceCards = document.querySelectorAll('.service-card');
serviceCards.forEach(card => {
    card.addEventListener('click', function() {
        // Add sound effect on button hover
        if (typeof Audio !== 'undefined') {
            // In a real implementation, we would play a subtle audio cue
            console.log('Playing subtle audio cue');
        }
    });
});



// Testimonial carousel functionality
let testimonialIndex = 0;
const testimonials = document.querySelectorAll('.testimonial-card');

function rotateTestimonials() {
    testimonials.forEach((testimonial, index) => {
        if (index === testimonialIndex) {
            testimonial.style.display = 'block';
        } else {
            testimonial.style.display = 'none';
        }
    });
    
    testimonialIndex = (testimonialIndex + 1) % testimonials.length;
}

// Only activate carousel on mobile
if (window.innerWidth < 768) {
    setInterval(rotateTestimonials, 5000);
}

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrollPosition = window.pageYOffset;
    const heroElements = document.querySelectorAll('.hero-title .line');
    
    heroElements.forEach((el, index) => {
        const speed = (index + 1) * 0.1;
        el.style.transform = `translateY(${scrollPosition * speed}px)`;
    });
});

// Dynamic gradient for hero section
const heroGradient = document.querySelector('.hero-gradient');
const heroGradientSecondary = document.querySelector('.hero-gradient-secondary');
if (heroGradient) {
    let time = 0;
    
    function animateGradient() {
        time += 0.005;
        
        // Create a more complex gradient with multiple color stops
        const r1 = Math.floor(255 + 0 * Math.sin(time));
        const g1 = Math.floor(215 + 40 * Math.sin(time * 1.2));
        const b1 = Math.floor(0 + 0 * Math.sin(time * 1.5));
        
        const r2 = Math.floor(255 + 0 * Math.sin(time * 1.3));
        const g2 = Math.floor(165 + 90 * Math.sin(time * 0.8));
        const b2 = Math.floor(0 + 0 * Math.sin(time * 0.7));
        
        const r3 = Math.floor(0 + 0 * Math.sin(time * 0.9));
        const g3 = Math.floor(0 + 0 * Math.sin(time * 1.1));
        const b3 = Math.floor(0 + 0 * Math.sin(time * 1.4));
        
        heroGradient.style.background = `linear-gradient(
            ${time * 20}deg,
            rgba(${r1}, ${g1}, ${b1}, 0.3) 0%,
            rgba(${r2}, ${g2}, ${b2}, 0.2) 30%,
            rgba(${r2}, ${g2}, ${b2}, 0.15) 50%,
            rgba(${r3}, ${g3}, ${b3}, 0) 70%
        )`;
        
        // Animate secondary gradient
        if (heroGradientSecondary) {
            const posX = 20 + 60 * Math.sin(time * 0.7);
            const posY = 20 + 60 * Math.cos(time * 0.5);
            const alpha = 0.05 + 0.1 * Math.sin(time * 1.3);
            
            heroGradientSecondary.style.background = `radial-gradient(circle at ${posX}% ${posY}%, rgba(255, 215, 0, ${alpha}) 0%, transparent 40%)`;
        }
        
        requestAnimationFrame(animateGradient);
    }
    
    animateGradient();
}







// Initialize all animations on page load
document.addEventListener('DOMContentLoaded', function() {
    // Add staggered delays to grid items
    const gridItems = document.querySelectorAll('.services-grid .service-card, .work-grid .work-item, .testimonials-grid .testimonial-card, .meme-grid .meme-item, .values-grid .value-item');
    
    gridItems.forEach((item, index) => {
        const row = Math.floor(index / 3);
        const col = index % 3;
        const delay = (row * 0.1) + (col * 0.05);
        
        item.style.animationDelay = `${delay}s`;
    });
    
    // Add scroll hint for mobile
    if (window.innerWidth < 768) {
        const scrollHint = document.createElement('div');
        scrollHint.className = 'mobile-scroll-hint';
        scrollHint.innerHTML = 'Swipe up to explore';
        document.body.appendChild(scrollHint);
        
        setTimeout(() => {
            scrollHint.style.opacity = '0';
            setTimeout(() => {
                scrollHint.remove();
            }, 500);
        }, 3000);
    }
});