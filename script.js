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

// WhatsApp Form Functionality
const whatsappForm = document.getElementById('whatsappForm');
const whatsappToast = document.getElementById('whatsappToast');

whatsappForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    
    // Format the message for WhatsApp
    const whatsappMessage = `*New Message From Portfolio*%0A%0A*Name:* ${name}%0A*Email:* ${email}%0A*Subject:* ${subject}%0A*Message:* ${message}%0A%0A`;
    
    // Your WhatsApp number (with country code, without +)
    const phoneNumber = '919710209871'; // Replace with your number if different
    
    // Create WhatsApp URL
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;
    
    // Show toast notification
    whatsappToast.classList.add('show');
    
    // Open WhatsApp after a short delay to show the toast
    setTimeout(() => {
        window.open(whatsappUrl, '_blank');
        
        // Clear the form
        whatsappForm.reset();
        
        // Hide toast after 3 seconds
        setTimeout(() => {
            whatsappToast.classList.remove('show');
        }, 3000);
    }, 1000);
});

// Direct WhatsApp contact button
function openWhatsApp() {
    const defaultMessage = "Hi Santhoshkumar, I visited your portfolio and would like to connect with you.";
    const encodedMessage = encodeURIComponent(defaultMessage);
    const whatsappUrl = `https://wa.me/919710209871?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
}