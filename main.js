// Custom cursor
const cursor = document.querySelector('.cursor');
const follower = document.querySelector('.cursor-follower');

// Mouse coordinates
let mouseX = 0;
let mouseY = 0;
let posX = 0;
let posY = 0;

// Update mouse coordinates
document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    
    // Move cursor immediately
    cursor.style.left = `${mouseX}px`;
    cursor.style.top = `${mouseY}px`;
});

// Animate follower with delay
function animateFollower() {
    // Calculate distance between cursor and follower
    posX += (mouseX - posX) / 5;
    posY += (mouseY - posY) / 5;
    
    // Move follower
    follower.style.left = `${posX}px`;
    follower.style.top = `${posY}px`;
    
    requestAnimationFrame(animateFollower);
}

animateFollower();

// Add hover effect to interactive elements
const hoverElements = document.querySelectorAll('a, button, .btn, .service-card, .work-item, .testimonial-card, .meme-item, .social-icon, .value-item');
hoverElements.forEach(element => {
    element.addEventListener('mouseenter', () => {
        follower.classList.add('hover');
    });
    
    element.addEventListener('mouseleave', () => {
        follower.classList.remove('hover');
    });
});

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

// Process icons hover effects
const processIcons = document.querySelectorAll('.card-icon');
processIcons.forEach(icon => {
    icon.addEventListener('mouseenter', function() {
        // Add micro-animation based on icon type
        const iconClass = this.querySelector('i').className;
        if (iconClass.includes('lightbulb')) {
            this.style.transform = 'scale(1.2) rotate(10deg)';
        } else if (iconClass.includes('search')) {
            this.style.transform = 'scale(1.2)';
        } else if (iconClass.includes('users')) {
            this.style.transform = 'scale(1.2)';
        } else if (iconClass.includes('chart')) {
            this.style.transform = 'scale(1.2)';
        }
    });
    
    icon.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
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
if (heroGradient) {
    let gradientAngle = 0;
    
    function animateGradient() {
        gradientAngle = (gradientAngle + 0.5) % 360;
        heroGradient.style.background = `linear-gradient(${gradientAngle}deg, rgba(255, 215, 0, 0.1) 0%, rgba(0, 0, 0, 0) 70%)`;
        requestAnimationFrame(animateGradient);
    }
    
    animateGradient();
}

// Social media button effects
const socialIcons = document.querySelectorAll('.social-icon');
socialIcons.forEach(icon => {
    icon.addEventListener('click', function(e) {
        e.preventDefault();
        const platform = this.querySelector('i').className;
        alert(`Connecting to our ${platform.split('-')[1].toUpperCase()} channel! Follow us for daily social impact inspiration.`);
    });
});

// Work item hover effect enhancement
const workItems = document.querySelectorAll('.work-item');
workItems.forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px)';
        this.style.transition = 'transform 0.3s ease';
    });
    
    item.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// Value item hover effect
const valueItems = document.querySelectorAll('.value-item');
valueItems.forEach(item => {
    item.addEventListener('mouseenter', function() {
        // Animated yellow brushstroke transition effect
        this.style.boxShadow = '0 15px 35px rgba(255, 215, 0, 0.2)';
    });
    
    item.addEventListener('mouseleave', function() {
        this.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.3)';
    });
});

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