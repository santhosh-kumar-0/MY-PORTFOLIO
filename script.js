// Header scroll effect
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Fade in animation on scroll
const fadeElements = document.querySelectorAll('.fade-in');

const fadeInOnScroll = function() {
    fadeElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('visible');
        }
    });
};

window.addEventListener('scroll', fadeInOnScroll);
// Initial check in case elements are already in view
fadeInOnScroll();

// Hamburger menu toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', function() {
    navLinks.classList.toggle('active');
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            if (window.innerWidth <= 768) {
                navLinks.classList.remove('active');
            }
        }
    });
});

// Resume download functionality
const downloadButtons = document.querySelectorAll('.download-btn');
const downloadToast = document.getElementById('downloadToast');

downloadButtons.forEach(button => {
    button.addEventListener('click', function() {
        // Add downloading class for animation
        this.classList.add('downloading');
        
        // Simulate download process
        setTimeout(() => {
            // Path to your resume file
            const resumeUrl = 'SANTHOSHKUMAR_R_Resume.pdf'; // Update with your actual file path
            
            // Create a temporary anchor element to trigger download
            const a = document.createElement('a');
            a.href = resumeUrl;
            a.download = 'SANTHOSHKUMAR_R_Resume.pdf'; // Name of the downloaded file
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            
            // Remove downloading class
            this.classList.remove('downloading');
            
            // Show success toast
            downloadToast.classList.add('show');
            setTimeout(() => {
                downloadToast.classList.remove('show');
            }, 3000);
        }, 2000); // 2-second simulation delay
    });
});