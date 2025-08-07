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

// Course Grade Tabs
const coursesData = {
    primary: [
        {
            title: "Mathematics (1-5)",
            description: "Fun math activities with games and interactive exercises",
            price: "₹199/month",
            duration: "3 months",
            icon: "🔢"
        },
        {
            title: "English (1-5)",
            description: "Reading, writing, and vocabulary building with stories",
            price: "₹199/month",
            duration: "3 months",
            icon: "📚"
        },
        {
            title: "Science (3-5)",
            description: "Basic science concepts with fun experiments",
            price: "₹249/month",
            duration: "3 months",
            icon: "🧪"
        },
        {
            title: "General Knowledge",
            description: "World awareness and current affairs for young minds",
            price: "₹149/month",
            duration: "3 months",
            icon: "🌍"
        }
    ],
    middle: [
        {
            title: "Mathematics (6-8)",
            description: "Algebra, geometry, and problem-solving techniques",
            price: "₹299/month",
            duration: "6 months",
            icon: "📐"
        },
        {
            title: "Science (6-8)",
            description: "Physics, Chemistry, Biology with lab experiments",
            price: "₹349/month",
            duration: "6 months",
            icon: "🔬"
        },
        {
            title: "English (6-8)",
            description: "Grammar, literature, and creative writing",
            price: "₹249/month",
            duration: "6 months",
            icon: "✍️"
        },
        {
            title: "Social Studies (6-8)",
            description: "History, Geography, Civics with interactive maps",
            price: "₹249/month",
            duration: "6 months",
            icon: "🗺️"
        }
    ],
    secondary: [
        {
            title: "Mathematics (9-10)",
            description: "Advanced algebra, trigonometry, and geometry",
            price: "₹399/month",
            duration: "12 months",
            icon: "📊"
        },
        {
            title: "Science (9-10)",
            description: "Board exam preparation with mock tests",
            price: "₹449/month",
            duration: "12 months",
            icon: "⚗️"
        },
        {
            title: "English (9-10)",
            description: "Literature analysis and language skills",
            price: "₹299/month",
            duration: "12 months",
            icon: "📖"
        },
        {
            title: "Social Studies (9-10)",
            description: "In-depth history, geography, and political science",
            price: "₹349/month",
            duration: "12 months",
            icon: "🏛️"
        }
    ],
    senior: [
        {
            title: "Mathematics (11-12)",
            description: "Calculus, statistics, and advanced mathematics",
            price: "₹499/month",
            duration: "24 months",
            icon: "∫"
        },
        {
            title: "Physics (11-12)",
            description: "Mechanics, electricity, and modern physics",
            price: "₹499/month",
            duration: "24 months",
            icon: "⚛️"
        },
        {
            title: "Chemistry (11-12)",
            description: "Organic, inorganic, and physical chemistry",
            price: "₹499/month",
            duration: "24 months",
            icon: "🧬"
        },
        {
            title: "Biology (11-12)",
            description: "Botany, zoology, and human physiology",
            price: "₹499/month",
            duration: "24 months",
            icon: "🧬"
        }
    ]
};

// Load courses based on selected grade
function loadCourses(grade) {
    const coursesContainer = document.getElementById('courses-container');
    const courses = coursesData[grade];
    
    coursesContainer.innerHTML = courses.map(course => `
        <div class="course-card">
            <div class="course-image">${course.icon}</div>
            <div class="course-content">
                <h3>${course.title}</h3>
                <p>${course.description}</p>
                <div class="course-meta">
                    <span class="course-price">${course.price}</span>
                    <span class="course-duration">${course.duration}</span>
                </div>
                <a href="signup.html" class="btn btn-primary">Enroll Now</a>
            </div>
        </div>
    `).join('');
}

// Tab functionality
document.addEventListener('DOMContentLoaded', () => {
    const tabBtns = document.querySelectorAll('.tab-btn');
    
    // Load primary courses by default
    loadCourses('primary');
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all tabs
            tabBtns.forEach(tab => tab.classList.remove('active'));
            
            // Add active class to clicked tab
            btn.classList.add('active');
            
            // Load courses for selected grade
            const grade = btn.dataset.grade;
            loadCourses(grade);
        });
    });
});

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

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.feature-card, .course-card, .testimonial-card');
    
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Counter animation for hero stats with mobile stability fix
function animateCounters() {
    const counters = document.querySelectorAll('.stat h3');
    
    // First, set fixed widths to prevent jumping
    counters.forEach(counter => {
        counter.style.minWidth = '80px';
        counter.style.display = 'inline-block';
        counter.style.textAlign = 'center';
        counter.style.fontFamily = '"Inter", monospace'; // Use monospace for numbers
    });
    
    counters.forEach(counter => {
        const target = parseInt(counter.textContent.replace(/[^\d]/g, ''));
        const increment = target / 100;
        let current = 0;
        
        const timer = setInterval(() => {
            current += increment;
            
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            
            // Format the number based on original format
            const originalText = counter.textContent;
            if (originalText.includes('+')) {
                counter.textContent = Math.floor(current).toLocaleString() + '+';
            } else if (originalText.includes('%')) {
                counter.textContent = Math.floor(current) + '%';
            } else {
                counter.textContent = Math.floor(current).toLocaleString();
            }
        }, 50);
    });
}

// Trigger counter animation when hero section is visible
const heroObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCounters();
            heroObserver.unobserve(entry.target);
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const heroStats = document.querySelector('.hero-stats');
    if (heroStats) {
        heroObserver.observe(heroStats);
    }
});

// Form validation (for future forms)
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validateForm(formData) {
    const errors = [];
    
    if (!formData.name || formData.name.trim().length < 2) {
        errors.push('Name must be at least 2 characters long');
    }
    
    if (!formData.email || !validateEmail(formData.email)) {
        errors.push('Please enter a valid email address');
    }
    
    if (!formData.phone || formData.phone.trim().length < 10) {
        errors.push('Please enter a valid phone number');
    }
    
    return errors;
}

// Success message display
function showSuccessMessage(message) {
    const successDiv = document.createElement('div');
    successDiv.className = 'success-message';
    successDiv.textContent = message;
    successDiv.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: var(--primary-green);
        color: white;
        padding: 1rem 2rem;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        z-index: 10000;
        animation: slideIn 0.3s ease;
    `;
    
    document.body.appendChild(successDiv);
    
    setTimeout(() => {
        successDiv.remove();
    }, 3000);
}

// Add slideIn animation
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
`;
document.head.appendChild(style);
