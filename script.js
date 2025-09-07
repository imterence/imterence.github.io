// Enhanced JavaScript for Modern Data Science Portfolio - Dark Masculine Theme

// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Smooth scrolling for navigation links
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

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(15, 23, 42, 0.95)';
        navbar.style.backdropFilter = 'blur(20px)';
        navbar.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.4)';
    } else {
        navbar.style.background = 'rgba(30, 41, 59, 0.8)';
        navbar.style.backdropFilter = 'blur(20px)';
        navbar.style.boxShadow = 'none';
    }
});

// Skill Level Animation
function animateSkillLevels() {
    const skillLevels = document.querySelectorAll('.skill-level');
    
    skillLevels.forEach(skill => {
        const level = skill.getAttribute('data-level');
        skill.style.setProperty('--level', level + '%');
        
        // Animate the skill level bar
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    skill.style.setProperty('--level', level + '%');
                    observer.unobserve(entry.target);
                }
            });
        });
        
        observer.observe(skill);
    });
}

// Enhanced Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            
            // Add staggered animation for skill items
            if (entry.target.classList.contains('skill-category')) {
                const skillItems = entry.target.querySelectorAll('.skill-item');
                skillItems.forEach((item, index) => {
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'translateX(0)';
                    }, index * 100);
                });
            }
            
            // Add staggered animation for project cards
            if (entry.target.classList.contains('project-card')) {
                entry.target.style.animationDelay = '0.1s';
            }
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    // Initialize skill levels
    animateSkillLevels();
    
    // Set initial states for animations
    const animateElements = document.querySelectorAll('.skill-category, .project-card, .timeline-item');
    
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
    
    // Set initial states for skill items
    const skillItems = document.querySelectorAll('.skill-item');
    skillItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateX(-20px)';
        item.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
    });
});

// Contact form handling with enhanced validation
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');
        
        // Enhanced validation
        if (!name || !email || !message) {
            showNotification('Please fill in all fields', 'error');
            return;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            showNotification('Please enter a valid email address', 'error');
            return;
        }
        
        // Show success message
        showNotification('Thank you for your message! I\'ll get back to you soon.', 'success');
        this.reset();
    });
}

// Enhanced button interactions with masculine theme
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function() {
        if (this.type !== 'submit') {
            // Add ripple effect with dark theme colors
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = event.clientX - rect.left - size / 2;
            const y = event.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        }
    });
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        const rate = scrolled * -0.3;
        hero.style.transform = `translateY(${rate}px)`;
    }
});

// Enhanced typing effect for hero title
function typeWriter(element, text, speed = 50) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Initialize typing effect when page loads
document.addEventListener('DOMContentLoaded', () => {
    const heroTitle = document.querySelector('.hero-title .gradient-text');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        setTimeout(() => {
            typeWriter(heroTitle, originalText, 50);
        }, 1000);
    }
});

// Animated counter for hero stats
function animateCounters() {
    const counters = document.querySelectorAll('.stat-number');
    
    counters.forEach(counter => {
        const target = counter.textContent;
        const isPercentage = target.includes('%');
        const isCurrency = target.includes('$');
        const isNumber = !isNaN(parseFloat(target.replace(/[^0-9.]/g, '')));
        
        if (isNumber) {
            const finalValue = parseFloat(target.replace(/[^0-9.]/g, ''));
            let currentValue = 0;
            const increment = finalValue / 50;
            
            const updateCounter = () => {
                if (currentValue < finalValue) {
                    currentValue += increment;
                    if (isCurrency) {
                        counter.textContent = '$' + Math.floor(currentValue) + 'M';
                    } else if (isPercentage) {
                        counter.textContent = Math.floor(currentValue) + '%';
                    } else {
                        counter.textContent = Math.floor(currentValue) + '+';
                    }
                    requestAnimationFrame(updateCounter);
                } else {
                    counter.textContent = target;
                }
            };
            
            updateCounter();
        }
    });
}

// Initialize counter animation when hero section is visible
const heroObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCounters();
            heroObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const heroSection = document.querySelector('.hero');
if (heroSection) {
    heroObserver.observe(heroSection);
}

// Enhanced scroll progress indicator with dark theme
const createScrollProgress = () => {
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress';
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 0%;
        height: 4px;
        background: linear-gradient(90deg, #1e3a8a, #1e40af, #3b82f6);
        z-index: 9999;
        transition: width 0.1s ease;
        border-radius: 0 2px 2px 0;
    `;
    document.body.appendChild(progressBar);
    
    window.addEventListener('scroll', () => {
        const scrolled = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
        progressBar.style.width = scrolled + '%';
    });
};

// Initialize scroll progress
createScrollProgress();

// Notification system with dark theme colors
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        color: white;
        font-weight: 500;
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        max-width: 300px;
    `;
    
    // Set background based on type with masculine colors
    switch (type) {
        case 'success':
            notification.style.background = 'linear-gradient(135deg, #059669 0%, #047857 100%)';
            break;
        case 'error':
            notification.style.background = 'linear-gradient(135deg, #dc2626 0%, #b91c1c 100%)';
            break;
        default:
            notification.style.background = 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)';
    }
    
    notification.textContent = message;
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 5 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 5000);
}

// Add CSS for ripple effect with dark theme
const rippleCSS = `
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(59, 130, 246, 0.6);
        transform: scale(0);
        animation: ripple-animation 0.6s linear;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;

const style = document.createElement('style');
style.textContent = rippleCSS;
document.head.appendChild(style);

// Enhanced floating shapes animation
function animateFloatingShapes() {
    const shapes = document.querySelectorAll('.shape');
    
    shapes.forEach((shape, index) => {
        shape.style.animationDelay = `${index * 1.2}s`;
        shape.style.animationDuration = `${6 + index * 0.5}s`;
    });
}

// Initialize floating shapes animation
document.addEventListener('DOMContentLoaded', () => {
    animateFloatingShapes();
});

// Smooth reveal animation for timeline items
function animateTimeline() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    timelineItems.forEach((item, index) => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }, index * 200);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.3 });
        
        observer.observe(item);
    });
}

// Initialize timeline animation
document.addEventListener('DOMContentLoaded', () => {
    animateTimeline();
});

// Add hover effects for skill items with dark theme
document.querySelectorAll('.skill-item').forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.transform = 'translateX(10px) scale(1.02)';
        this.style.background = 'rgba(59, 130, 246, 0.15)';
        this.style.borderRadius = 'var(--border-radius)';
    });
    
    item.addEventListener('mouseleave', function() {
        this.style.transform = 'translateX(0) scale(1)';
        this.style.background = 'transparent';
    });
});

// Enhanced project card interactions with dark theme
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
        this.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.5)';
        this.style.borderColor = 'rgba(59, 130, 246, 0.4)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
        this.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.3)';
        this.style.borderColor = 'rgba(59, 130, 246, 0.1)';
    });
});

// Add masculine hover effects for buttons
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('mouseenter', function() {
        if (this.classList.contains('btn-primary')) {
            this.style.boxShadow = '0 15px 30px rgba(99, 102, 241, 0.5)';
        }
    });
    
    btn.addEventListener('mouseleave', function() {
        if (this.classList.contains('btn-primary')) {
            this.style.boxShadow = '0 15px 30px rgba(99, 102, 241, 0.4)';
        }
    });
});

// Performance optimization: Throttle scroll events
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// Apply throttling to scroll events
window.addEventListener('scroll', throttle(() => {
    // Scroll-based animations here
}, 16)); // 60fps

// Add subtle glow effect to tech elements
function addTechGlow() {
    const techElements = document.querySelectorAll('.logo-icon, .project-icon, .company-logo');
    
    techElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            this.style.boxShadow = '0 0 20px rgba(99, 102, 241, 0.6)';
            this.style.transform = 'scale(1.05)';
        });
        
        element.addEventListener('mouseleave', function() {
            this.style.boxShadow = 'none';
            this.style.transform = 'scale(1)';
        });
    });
}

// Initialize tech glow effects
document.addEventListener('DOMContentLoaded', () => {
    addTechGlow();
});

// Enhanced data cube animation
function enhanceDataCube() {
    const dataCube = document.querySelector('.data-cube');
    if (dataCube) {
        dataCube.addEventListener('mouseenter', function() {
            this.style.animationDuration = '10s';
            this.style.filter = 'drop-shadow(0 0 20px rgba(99, 102, 241, 0.4))';
        });
        
        dataCube.addEventListener('mouseleave', function() {
            this.style.animationDuration = '20s';
            this.style.filter = 'none';
        });
    }
}

// Initialize enhanced data cube
document.addEventListener('DOMContentLoaded', () => {
    enhanceDataCube();
});

// Image Gallery Modal Functionality
class ImageGallery {
    constructor() {
        this.modal = document.getElementById('imageModal');
        this.galleryTrack = document.getElementById('galleryTrack');
        this.galleryItems = document.querySelectorAll('.gallery-item');
        this.prevBtn = document.getElementById('prevBtn');
        this.nextBtn = document.getElementById('nextBtn');
        this.indicatorsContainer = document.getElementById('galleryIndicators');
        this.currentIndex = 0;
        this.totalItems = this.galleryItems.length;
        
        this.init();
    }
    
    init() {
        this.createIndicators();
        this.bindEvents();
        this.updateNavigation();
        this.updateIndicators();
    }
    
    createIndicators() {
        this.indicatorsContainer.innerHTML = '';
        for (let i = 0; i < this.totalItems; i++) {
            const indicator = document.createElement('div');
            indicator.className = 'indicator';
            if (i === 0) indicator.classList.add('active');
            indicator.addEventListener('click', () => this.goToSlide(i));
            this.indicatorsContainer.appendChild(indicator);
        }
    }
    
    bindEvents() {
        // Screenshots button click
        const screenshotsBtn = document.getElementById('screenshotsBtn');
        if (screenshotsBtn) {
            screenshotsBtn.addEventListener('click', (e) => {
                e.preventDefault();
                this.openModal();
            });
        }
        
        // Close modal events
        const closeBtn = document.querySelector('.close');
        if (closeBtn) {
            closeBtn.addEventListener('click', () => this.closeModal());
        }
        
        // Click outside modal to close
        this.modal.addEventListener('click', (e) => {
            if (e.target === this.modal) {
                this.closeModal();
            }
        });
        
        // Navigation buttons
        if (this.prevBtn) {
            this.prevBtn.addEventListener('click', () => this.previousSlide());
        }
        
        if (this.nextBtn) {
            this.nextBtn.addEventListener('click', () => this.nextSlide());
        }
        
        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (this.modal.classList.contains('show')) {
                switch(e.key) {
                    case 'Escape':
                        this.closeModal();
                        break;
                    case 'ArrowLeft':
                        this.previousSlide();
                        break;
                    case 'ArrowRight':
                        this.nextSlide();
                        break;
                }
            }
        });
        
        // Touch/swipe support for mobile
        this.addTouchSupport();
    }
    
    addTouchSupport() {
        let startX = 0;
        let startY = 0;
        let endX = 0;
        let endY = 0;
        
        this.galleryTrack.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
            startY = e.touches[0].clientY;
        });
        
        this.galleryTrack.addEventListener('touchend', (e) => {
            endX = e.changedTouches[0].clientX;
            endY = e.changedTouches[0].clientY;
            this.handleSwipe(startX, startY, endX, endY);
        });
    }
    
    handleSwipe(startX, startY, endX, endY) {
        const deltaX = endX - startX;
        const deltaY = endY - startY;
        const minSwipeDistance = 50;
        
        // Check if it's a horizontal swipe (not vertical)
        if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > minSwipeDistance) {
            if (deltaX > 0) {
                this.previousSlide();
            } else {
                this.nextSlide();
            }
        }
    }
    
    openModal() {
        this.modal.classList.add('show');
        document.body.style.overflow = 'hidden';
        
        // Reset to first slide
        this.currentIndex = 0;
        this.updateSlidePosition();
        this.updateNavigation();
        this.updateIndicators();
        
        // Add entrance animation
        this.modal.style.animation = 'modalFadeIn 0.3s ease';
    }
    
    closeModal() {
        this.modal.classList.remove('show');
        document.body.style.overflow = '';
        
        // Add exit animation
        this.modal.style.animation = 'modalFadeOut 0.3s ease';
        setTimeout(() => {
            this.modal.style.animation = '';
        }, 300);
    }
    
    nextSlide() {
        if (this.currentIndex < this.totalItems - 1) {
            this.currentIndex++;
            this.updateSlidePosition();
            this.updateNavigation();
            this.updateIndicators();
        }
    }
    
    previousSlide() {
        if (this.currentIndex > 0) {
            this.currentIndex--;
            this.updateSlidePosition();
            this.updateNavigation();
            this.updateIndicators();
        }
    }
    
    goToSlide(index) {
        this.currentIndex = index;
        this.updateSlidePosition();
        this.updateNavigation();
        this.updateIndicators();
    }
    
    updateSlidePosition() {
        const translateX = -this.currentIndex * 100;
        this.galleryTrack.style.transform = `translateX(${translateX}%)`;
    }
    
    updateNavigation() {
        // Update previous button
        if (this.prevBtn) {
            this.prevBtn.disabled = this.currentIndex === 0;
        }
        
        // Update next button
        if (this.nextBtn) {
            this.nextBtn.disabled = this.currentIndex === this.totalItems - 1;
        }
    }
    
    updateIndicators() {
        const indicators = this.indicatorsContainer.querySelectorAll('.indicator');
        indicators.forEach((indicator, index) => {
            indicator.classList.toggle('active', index === this.currentIndex);
        });
    }
}

// Initialize the image gallery when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new ImageGallery();
});

// Add CSS for modal fade out animation
const modalAnimationCSS = `
    @keyframes modalFadeOut {
        from {
            opacity: 1;
        }
        to {
            opacity: 0;
        }
    }
`;

const modalStyle = document.createElement('style');
modalStyle.textContent = modalAnimationCSS;
document.head.appendChild(modalStyle);
