// GSAP 등록
gsap.registerPlugin(ScrollTrigger);

// Loading Screen
window.addEventListener('load', () => {
    setTimeout(() => {
        const loadingScreen = document.querySelector('.loading-screen');
        if (loadingScreen) {
            loadingScreen.classList.add('hidden');
            setTimeout(() => {
                loadingScreen.style.display = 'none';
            }, 500);
        }
        initAnimations();
    }, 2000);
});

// Initialize all animations
function initAnimations() {
    // Initialize AOS
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 1000,
            once: false,
            offset: 100
        });
    }

    // Initialize Particles.js
    if (typeof particlesJS !== 'undefined' && document.getElementById('particles-js')) {
        particlesJS('particles-js', {
        particles: {
            number: {
                value: 80,
                density: {
                    enable: true,
                    value_area: 800
                }
            },
            color: {
                value: '#8B4513'
            },
            shape: {
                type: 'circle'
            },
            opacity: {
                value: 0.3,
                random: true
            },
            size: {
                value: 3,
                random: true
            },
            line_linked: {
                enable: true,
                distance: 150,
                color: '#8B4513',
                opacity: 0.2,
                width: 1
            },
            move: {
                enable: true,
                speed: 2,
                direction: 'none',
                random: false,
                straight: false,
                out_mode: 'out',
                bounce: false
            }
        },
        interactivity: {
            detect_on: 'canvas',
            events: {
                onhover: {
                    enable: true,
                    mode: 'grab'
                },
                onclick: {
                    enable: true,
                    mode: 'push'
                },
                resize: true
            },
            modes: {
                grab: {
                    distance: 140,
                    line_linked: {
                        opacity: 0.5
                    }
                },
                push: {
                    particles_nb: 4
                }
            }
        },
        retina_detect: true
        });
    }

    // Typed.js for hero subtitle
    if (typeof Typed !== 'undefined' && document.querySelector('.typed-text')) {
        new Typed('.typed-text', {
        strings: [
            '우리가 만든 첫 번째 프로젝트',
            '1주일의 도전과 성장',
            '커피와 코드의 만남'
        ],
        typeSpeed: 50,
        backSpeed: 30,
        backDelay: 2000,
        loop: true
        });
    }

    // Hero 애니메이션
    gsap.timeline()
        .to('.title-line', {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: 'power3.out'
        })
        .to('.hero-subtitle', {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: 'power3.out'
        }, '-=0.4')
        .to('.hero-description', {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: 'power3.out'
        }, '-=0.4')
        .to('.hero-cta', {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: 'power3.out'
        }, '-=0.4')
        .from('.coffee-animation', {
            scale: 0,
            opacity: 0,
            duration: 1,
            ease: 'back.out(1.7)'
        }, '-=1');
}

// 스크롤 기반 애니메이션
// Section 타이틀 애니메이션
gsap.utils.toArray('.section-title').forEach(title => {
    gsap.to(title, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        scrollTrigger: {
            trigger: title,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
        }
    });
});

gsap.utils.toArray('.section-subtitle').forEach(subtitle => {
    gsap.to(subtitle, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: 0.2,
        scrollTrigger: {
            trigger: subtitle,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
        }
    });
});

// Team 멤버 카드 애니메이션
gsap.utils.toArray('.team-member').forEach((member, index) => {
    gsap.to(member, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        delay: index * 0.1,
        scrollTrigger: {
            trigger: member,
            start: 'top 85%',
            end: 'bottom 15%',
            toggleActions: 'play none none reverse'
        }
    });
});

// Project 카드 애니메이션
gsap.utils.toArray('.info-card').forEach((card, index) => {
    gsap.to(card, {
        opacity: 1,
        x: 0,
        duration: 0.8,
        delay: index * 0.2,
        scrollTrigger: {
            trigger: card,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
        }
    });
});

// Project 링크 애니메이션
gsap.utils.toArray('.link-card').forEach((link, index) => {
    gsap.to(link, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        delay: index * 0.1,
        scrollTrigger: {
            trigger: link,
            start: 'top 85%',
            end: 'bottom 15%',
            toggleActions: 'play none none reverse'
        }
    });
});

// Tech 카테고리 애니메이션
gsap.utils.toArray('.tech-category').forEach((category, index) => {
    gsap.to(category, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: index * 0.2,
        scrollTrigger: {
            trigger: category,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
        }
    });
});

// Demo flow steps 애니메이션
gsap.utils.toArray('.flow-step').forEach((step, index) => {
    gsap.to(step, {
        opacity: 1,
        x: 0,
        duration: 0.6,
        delay: index * 0.2,
        scrollTrigger: {
            trigger: step,
            start: 'top 85%',
            end: 'bottom 15%',
            toggleActions: 'play none none reverse'
        }
    });
});

// Browser mockup 애니메이션
gsap.to('.browser-mockup', {
    opacity: 1,
    scale: 1,
    duration: 1,
    scrollTrigger: {
        trigger: '.browser-mockup',
        start: 'top 70%',
        end: 'bottom 30%',
        toggleActions: 'play none none reverse'
    }
});

// Challenge 카드 애니메이션
gsap.utils.toArray('.challenge-card').forEach((card, index) => {
    gsap.to(card, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: index * 0.15,
        scrollTrigger: {
            trigger: card,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
        }
    });
});

// Growth 카드 애니메이션
gsap.utils.toArray('.growth-card').forEach((card, index) => {
    gsap.to(card, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: index * 0.15,
        scrollTrigger: {
            trigger: card,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
        }
    });
});

// Final message 애니메이션
gsap.to('.final-message', {
    opacity: 1,
    scale: 1,
    duration: 1,
    scrollTrigger: {
        trigger: '.final-message',
        start: 'top 70%',
        end: 'bottom 30%',
        toggleActions: 'play none none reverse'
    }
});

// 네비게이션 숨기기/보이기
let lastScrollY = window.scrollY;
const nav = document.querySelector('.main-nav');

window.addEventListener('scroll', () => {
    if (window.scrollY > lastScrollY && window.scrollY > 100) {
        nav.classList.add('hidden');
    } else {
        nav.classList.remove('hidden');
    }
    lastScrollY = window.scrollY;
});

// 스크롤 프로그레스 바
const progressBar = document.querySelector('.progress-fill');

window.addEventListener('scroll', () => {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight - windowHeight;
    const scrolled = window.scrollY;
    const progress = (scrolled / documentHeight) * 100;
    progressBar.style.width = `${progress}%`;
});

// 네비게이션 활성화 상태
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('data-section') === current) {
            link.classList.add('active');
        }
    });
});

// 부드러운 스크롤
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

// 팀 멤버 호버 효과
const teamMembers = document.querySelectorAll('.team-member');

teamMembers.forEach(member => {
    member.addEventListener('mouseenter', () => {
        gsap.to(member, {
            scale: 1.05,
            duration: 0.3,
            ease: 'power2.out'
        });
    });
    
    member.addEventListener('mouseleave', () => {
        gsap.to(member, {
            scale: 1,
            duration: 0.3,
            ease: 'power2.out'
        });
    });
});

// Tech 아이템 호버 효과
const techItems = document.querySelectorAll('.tech-item');

techItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        gsap.to(item, {
            y: -5,
            duration: 0.3,
            ease: 'power2.out'
        });
    });
    
    item.addEventListener('mouseleave', () => {
        gsap.to(item, {
            y: 0,
            duration: 0.3,
            ease: 'power2.out'
        });
    });
});

// 커피 컵 회전 애니메이션
gsap.to('.coffee-cup', {
    rotation: 360,
    duration: 20,
    repeat: -1,
    ease: 'none'
});

// 마우스 패럴랙스 효과 (Hero 섹션) - 삭제 (중복)

// 타이핑 효과 (선택적)
function typeWriter(element, text, speed = 50) {
    let i = 0;
    element.textContent = '';
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// 페이지 로드 시 카운트 애니메이션 (Results 섹션용 - 추후 추가 가능)
function animateValue(element, start, end, duration) {
    const range = end - start;
    const startTime = performance.now();
    
    function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const value = Math.floor(progress * range + start);
        element.textContent = value;
        
        if (progress < 1) {
            requestAnimationFrame(update);
        }
    }
    
    requestAnimationFrame(update);
}

// 3D Card Flip Effect
document.querySelectorAll('.flip-card').forEach(card => {
    card.addEventListener('click', () => {
        card.classList.toggle('flipped');
    });
});

// Enhanced 3D Tilt Effect for Coffee Cup
const coffeeAnimation = document.querySelector('.coffee-animation');
const heroSection = document.querySelector('.hero');

if (heroSection && coffeeAnimation) {
    heroSection.addEventListener('mousemove', (e) => {
    const rect = heroSection.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / 20;
    const rotateY = (centerX - x) / 20;
    
    gsap.to(coffeeAnimation, {
        rotationX: rotateX,
        rotationY: rotateY,
        duration: 0.5,
        ease: 'power2.out'
    });
    });

    heroSection.addEventListener('mouseleave', () => {
    gsap.to(coffeeAnimation, {
        rotationX: 0,
        rotationY: 0,
        duration: 0.5,
        ease: 'power2.out'
    });
    });
}

// Parallax Effect Enhancement
gsap.utils.toArray('.info-card').forEach((card, index) => {
    gsap.fromTo(card, 
        {
            y: 100 * (index + 1),
            opacity: 0
        },
        {
            y: 0,
            opacity: 1,
            duration: 1,
            scrollTrigger: {
                trigger: card,
                start: 'top 85%',
                end: 'bottom 15%',
                scrub: 1
            }
        }
    );
});

// Glitch Effect Control
document.querySelectorAll('.glitch').forEach(element => {
    element.addEventListener('mouseenter', () => {
        element.style.animation = 'none';
        setTimeout(() => {
            element.style.animation = '';
        }, 100);
    });
});

// Advanced Scroll Animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.1
});

document.querySelectorAll('.tech-item').forEach(item => {
    observer.observe(item);
});

// Magnetic Button Effect
document.querySelectorAll('.cta-button, .cta-button-outline').forEach(button => {
    button.addEventListener('mousemove', (e) => {
        const rect = button.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        
        gsap.to(button, {
            x: x * 0.3,
            y: y * 0.3,
            duration: 0.3,
            ease: 'power2.out'
        });
    });
    
    button.addEventListener('mouseleave', () => {
        gsap.to(button, {
            x: 0,
            y: 0,
            duration: 0.3,
            ease: 'power2.out'
        });
    });
});

// Initialize animations after DOM load
document.addEventListener('DOMContentLoaded', () => {
    // Smooth reveal animations
    gsap.from('.nav-logo', {
        y: -50,
        opacity: 0,
        duration: 1,
        delay: 2.5
    });
    
    gsap.from('.nav-links li', {
        y: -50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        delay: 2.7
    });
});