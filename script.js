// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a nav link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Active Navigation Link on Scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector(`.nav-link[href*=${sectionId}]`).classList.add('active');
        } else {
            document.querySelector(`.nav-link[href*=${sectionId}]`).classList.remove('active');
        }
    });
});

// Project Filtering
const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all buttons
        filterBtns.forEach(btn => btn.classList.remove('active'));
        
        // Add active class to clicked button
        btn.classList.add('active');
        
        const filter = btn.getAttribute('data-filter');
        
        projectCards.forEach(card => {
            if (filter === 'all' || card.getAttribute('data-category') === filter) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

// Form Submission
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    
    // Here you would typically send the form data to a server
    // For this example, we'll just log it to the console
    console.log({
        name,
        email,
        subject,
        message
    });
    
    // Show success message (in a real application)
    alert('Thank you for your message! I will get back to you soon.');
    
    // Reset form
    contactForm.reset();
});

// Scroll Reveal Animation (simple version without library)
const revealElements = document.querySelectorAll('.section-header, .about-content, .skill-category, .project-card, .contact-item');

function checkReveal() {
    const triggerBottom = window.innerHeight * 0.8;
    
    revealElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        
        if (elementTop < triggerBottom) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
}

// Set initial styles for animation
revealElements.forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(50px)';
    element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
});

// Check on load and scroll
window.addEventListener('load', checkReveal);
window.addEventListener('scroll', checkReveal);

// Placeholder images (in a real project, replace these with actual images)
// This is just to simulate image loading for the example
document.addEventListener('DOMContentLoaded', () => {
    // Create placeholder for profile image if it doesn't exist
    const profileImg = new Image();
    profileImg.src = 'https://via.placeholder.com/400x500?text=Developer+Profile';
    profileImg.alt = 'Developer profile image';
    
    const heroImageContainer = document.querySelector('.hero-image');
    if (heroImageContainer && !heroImageContainer.querySelector('img').src) {
        heroImageContainer.querySelector('img').src = profileImg.src;
    }
    
    // Create placeholder for about image
    const aboutImg = new Image();
    aboutImg.src = 'https://via.placeholder.com/400x400?text=About+Me';
    aboutImg.alt = 'About me image';
    
    const aboutImageContainer = document.querySelector('.about-image');
    if (aboutImageContainer && !aboutImageContainer.querySelector('img').src) {
        aboutImageContainer.querySelector('img').src = aboutImg.src;
    }
    
    // Create placeholders for project images
    const projectImgs = document.querySelectorAll('.project-img img');
    projectImgs.forEach((img, index) => {
        if (!img.src) {
            img.src = `https://via.placeholder.com/600x400?text=Project+${index + 1}`;
        }
    });
});