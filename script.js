// GSAP 등록
gsap.registerPlugin(ScrollTrigger);

// 페이지 로드 시 애니메이션
window.addEventListener('load', () => {
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
});

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

// 마우스 패럴랙스 효과 (Hero 섹션)
const heroSection = document.querySelector('.hero');
const coffeeAnimation = document.querySelector('.coffee-animation');

heroSection.addEventListener('mousemove', (e) => {
    const x = (e.clientX - window.innerWidth / 2) / 50;
    const y = (e.clientY - window.innerHeight / 2) / 50;
    
    gsap.to(coffeeAnimation, {
        x: x,
        y: y,
        duration: 0.5,
        ease: 'power2.out'
    });
});

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