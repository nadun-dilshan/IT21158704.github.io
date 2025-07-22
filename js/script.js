// Enhanced Preloader with Progress
window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    preloader.style.opacity = '0';
    setTimeout(() => {
        preloader.style.display = 'none';
        document.body.classList.add('loaded');
    }, 500);
});

// Enhanced Floating Particles System
function createParticles() {
    const particlesContainer = document.querySelector('.particles');
    const particleCount = window.innerWidth < 768 ? 20 : 50;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 6 + 's';
        particle.style.animationDuration = (Math.random() * 4 + 4) + 's';
        particlesContainer.appendChild(particle);
    }
}

createParticles();

// Enhanced Custom Cursor
const cursor = document.querySelector('.cursor');
let mouseX = 0, mouseY = 0;
let cursorX = 0, cursorY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

function updateCursor() {
    cursorX += (mouseX - cursorX) * 0.1;
    cursorY += (mouseY - cursorY) * 0.1;

    cursor.style.left = `${cursorX}px`;
    cursor.style.top = `${cursorY}px`;

    requestAnimationFrame(updateCursor);
}

updateCursor();

document.addEventListener('mouseover', (e) => {
    if (e.target.closest('a, button, .portfolio-box, .contact-box, .services-box')) {
        cursor.classList.add('hovered');
    } else {
        cursor.classList.remove('hovered');
    }
});

// Enhanced Navigation
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
    document.body.classList.toggle('menu-open');
};

// Enhanced Active Section Detection
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active');
        }
    });

    // Enhanced sticky header
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    // Close mobile menu on scroll
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
    document.body.classList.remove('menu-open');
});

// Enhanced ScrollReveal
ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200,
    reset: false
});

ScrollReveal().reveal('.home-content h3', { origin: 'top', delay: 300 });
ScrollReveal().reveal('.home-content h1', { origin: 'left', delay: 500 });
ScrollReveal().reveal('.home-content .subtitle', { origin: 'right', delay: 700 });
ScrollReveal().reveal('.home-content p', { origin: 'bottom', delay: 900 });
ScrollReveal().reveal('.social-media', { origin: 'bottom', delay: 1100 });
ScrollReveal().reveal('.btn', { origin: 'bottom', delay: 1300 });

// Enhanced Typed.js with more options
const typed = new Typed('.multiple-text', {
    strings: [
        'Frontend Developer',
        'Backend Developer',
        'Mobile App Developer',
        'Full-Stack Engineer',
        'UI/UX Enthusiast',
        'Problem Solver'
    ],
    typeSpeed: 80,
    backSpeed: 60,
    backDelay: 1500,
    startDelay: 1000,
    loop: true,
    showCursor: true,
    cursorChar: '|',
    smartBackspace: true
});

// Enhanced AOS
AOS.init({
    offset: 150,
    duration: 1000,
    easing: 'ease-in-out-cubic',
    once: true,
    anchorPlacement: 'top-bottom'
});

// Enhanced Vanilla Tilt
VanillaTilt.init(document.querySelectorAll('.portfolio-box'), {
    max: 20,
    speed: 400,
    glare: true,
    'max-glare': 0.3,
    perspective: 1000,
    scale: 1.05
});

// Enhanced Contact Box Interactions
document.getElementById('contact-whatsapp').addEventListener('click', () => {
    window.open('https://wa.me/+94765220104', '_blank');
});

document.getElementById('contact-email').addEventListener('click', () => {
    window.location.href = 'mailto:nadun.dev@outlook.com';
});

document.getElementById('contact-fb').addEventListener('click', () => {
    window.open('https://www.facebook.com/KTDNadun', '_blank');
});

document.getElementById('contact-linkedin')?.addEventListener('click', () => {
    window.open('https://www.linkedin.com/in/nadun-dilshan/', '_blank');
});

document.getElementById('contact-github')?.addEventListener('click', () => {
    window.open('https://github.com/IT21158704', '_blank');
});

// Enhanced Web3Forms Submission with better UX
const form = document.querySelector('.contact-form');
const formMessage = document.querySelector('.form-message');
const submitButton = form.querySelector('button[type="submit"]');

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Show loading state
    const originalText = submitButton.innerHTML;
    submitButton.innerHTML = '<span>Sending...</span>';
    submitButton.disabled = true;

    formMessage.style.display = 'none';
    formMessage.classList.remove('success', 'error');

    const formData = new FormData(form);

    try {
        const response = await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            body: formData
        });

        const result = await response.json();

        if (result.success) {
            formMessage.textContent = '✅ Message sent successfully! I\'ll get back to you soon.';
            formMessage.classList.add('success');
            form.reset();

            // Animate success
            formMessage.style.transform = 'translateY(-10px)';
            setTimeout(() => {
                formMessage.style.transform = 'translateY(0)';
            }, 300);
        } else {
            throw new Error('Form submission failed');
        }
    } catch (error) {
        formMessage.textContent = '❌ Failed to send message. Please try again or contact me directly.';
        formMessage.classList.add('error');
        console.error('Form submission error:', error);
    } finally {
        // Reset button state
        submitButton.innerHTML = originalText;
        submitButton.disabled = false;

        formMessage.style.display = 'block';

        // Auto-hide message after 8 seconds
        setTimeout(() => {
            formMessage.style.opacity = '0';
            setTimeout(() => {
                formMessage.style.display = 'none';
                formMessage.style.opacity = '1';
            }, 300);
        }, 8000);
    }
});

// Enhanced Dark Mode Toggle
function toggleDarkMode() {
    const icon = document.getElementById('toggleDark');
    const body = document.body;
    const root = document.documentElement;

    icon.classList.toggle('bx-sun');
    icon.classList.toggle('bx-moon');
    body.classList.toggle('dark-mode');

    const isDarkMode = icon.classList.contains('bx-moon');

    if (isDarkMode) {
        root.style.setProperty('--bg-color', '#e8ecef');
        root.style.setProperty('--second-bg-color', '#f8f9fa');
        root.style.setProperty('--text-color', '#1a2526');
        root.style.setProperty('--main-color', '#1e88e5');
        root.style.setProperty('--accent-color', '#8e24aa');
        root.style.setProperty('--gradient-1', 'linear-gradient(135deg, #1e88e5, #8e24aa)');
        root.style.setProperty('--gradient-2', 'linear-gradient(135deg, #42a5f5, #ab47bc)');
        root.style.setProperty('--gradient-3', 'linear-gradient(135deg, #ef5350, #f06292)');
        root.style.setProperty('--glass-bg', 'rgba(255, 255, 255, 0.3)');
        root.style.setProperty('--glass-border', 'rgba(0, 0, 0, 0.15)');
    } else {
        root.style.setProperty('--bg-color', '#0a0a0f');
        root.style.setProperty('--second-bg-color', '#151520');
        root.style.setProperty('--text-color', '#ffffff');
        root.style.setProperty('--main-color', '#00c4cc');
        root.style.setProperty('--accent-color', '#6246e9');
        root.style.setProperty('--gradient-1', 'linear-gradient(135deg, #00c4cc, #6246e9)');
        root.style.setProperty('--gradient-2', 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)');
        root.style.setProperty('--gradient-3', 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)');
        root.style.setProperty('--glass-bg', 'rgba(255, 255, 255, 0.05)');
        root.style.setProperty('--glass-border', 'rgba(255, 255, 255, 0.1)');
    }

    // Save preference
    localStorage.setItem('darkMode', isDarkMode);
}

// Apply saved dark mode preference
const savedDarkMode = localStorage.getItem('darkMode') === 'true';
if (savedDarkMode) {
    toggleDarkMode();
}

document.getElementById('toggleDark').addEventListener('click', toggleDarkMode);
document.getElementById('toggleDarkM').addEventListener('click', toggleDarkMode);

// Enhanced Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });

            // Close mobile menu if open
            menuIcon.classList.remove('bx-x');
            navbar.classList.remove('active');
            document.body.classList.remove('menu-open');
        }
    });
});

// Enhanced Performance Monitoring
window.addEventListener('load', () => {
    // Log performance metrics
    const perfData = performance.getEntriesByType('navigation')[0];
    console.log(`Page loaded in ${perfData.loadEventEnd - perfData.loadEventStart}ms`);

    // Lazy load images
    const images = document.querySelectorAll('img[loading="lazy"]');
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.classList.add('fade-in');
                    observer.unobserve(img);
                }
            });
        });

        images.forEach(img => imageObserver.observe(img));
    }
});

// Enhanced Error Handling
window.addEventListener('error', (e) => {
    console.error('JavaScript error:', e.error);
});

// Enhanced Keyboard Navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        menuIcon.classList.remove('bx-x');
        navbar.classList.remove('active');
        document.body.classList.remove('menu-open');
    }
});

// Portfolio Project Links Enhancement
document.querySelectorAll('.project-link').forEach((link, index) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        // Add your actual project URLs here
        const projectUrls = [
            'https://github.com/IT21158704/LMS-System.git',
            'https://github.com/IT21158704/Leave-Management-System',
            'https://github.com/IT21158704/dry-food-mart.git',
            // 'https://github.com/nadun/employee-management',
            'https://github.com/IT21158704/Fuel-Station-Management-System-ITP-Project.git',
            'https://github.com/IT21158704/Quick-Job.git',
            'https://github.com/IT21158704/Online-Event-Management-System.git',
            'https://github.com/IT21158704/Photography-Event-Management-System.git'
        ];

        if (projectUrls[index]) {
            window.open(projectUrls[index], '_blank');
        } else {
            console.log(`Project ${index + 1} - Demo not available`);
        }
    });
});