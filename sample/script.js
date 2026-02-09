/* ============================================================
   GOD OF WAR THEMED SYMPOSIUM - KRANTI 2K26
   MSEC - Department of CSE
   JavaScript Engine
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

    // ==================== PRELOADER ====================
    const preloader = document.getElementById('preloader');
    
    window.addEventListener('load', () => {
        setTimeout(() => {
            preloader.classList.add('hidden');
        }, 3000);
    });

    // Fallback: hide preloader after 5 seconds regardless
    setTimeout(() => {
        preloader.classList.add('hidden');
    }, 5000);

    // ==================== BACKGROUND SLIDESHOW ====================
    const slides = document.querySelectorAll('.bg-slide');
    const realmNames = [
        'MIDGARD PLAINS',
        'MOUNT OLYMPUS',
        'ALFHEIM LIGHT',
        'MUSPELHEIM FIRE',
        'JOTUNHEIM FROST',
        'HALLS OF HADES'
    ];
    const realmNameEl = document.getElementById('current-realm');
    let currentSlide = 0;
    const slideInterval = 10000; // 10 seconds

    function changeSlide() {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
        
        // Update realm name with fade effect
        realmNameEl.style.opacity = 0;
        setTimeout(() => {
            realmNameEl.textContent = realmNames[currentSlide];
            realmNameEl.style.opacity = 1;
        }, 500);
    }

    setInterval(changeSlide, slideInterval);

    // ==================== FLOATING EMBERS CANVAS ====================
    const canvas = document.getElementById('embers-canvas');
    const ctx = canvas.getContext('2d');
    
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    class Ember {
        constructor() {
            this.reset();
        }

        reset() {
            this.x = Math.random() * canvas.width;
            this.y = canvas.height + Math.random() * 100;
            this.size = Math.random() * 3 + 1;
            this.speedX = (Math.random() - 0.5) * 1.5;
            this.speedY = -(Math.random() * 2 + 0.5);
            this.opacity = Math.random() * 0.8 + 0.2;
            this.fadeRate = Math.random() * 0.005 + 0.002;
            this.color = Math.random() > 0.5 ? 
                `rgba(212, 168, 67, ${this.opacity})` : 
                `rgba(255, 69, 0, ${this.opacity})`;
            this.life = 1;
        }

        update() {
            this.x += this.speedX;
            this.y += this.speedY;
            this.life -= this.fadeRate;
            
            if (this.life <= 0 || this.y < -10) {
                this.reset();
            }
        }

        draw() {
            ctx.save();
            ctx.globalAlpha = this.life * this.opacity;
            ctx.fillStyle = this.color;
            ctx.shadowBlur = 10;
            ctx.shadowColor = this.color;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
            ctx.restore();
        }
    }

    const embers = Array.from({ length: 60 }, () => new Ember());

    function animateEmbers() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        embers.forEach(ember => {
            ember.update();
            ember.draw();
        });
        requestAnimationFrame(animateEmbers);
    }
    animateEmbers();

    // ==================== NAVIGATION ====================
    const nav = document.getElementById('main-nav');
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    // Scroll effect for nav
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }

        // Active nav link based on scroll
        updateActiveNavLink();
    });

    // Hamburger toggle
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        mobileMenu.classList.toggle('open');
    });

    // Close mobile menu on link click
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            mobileMenu.classList.remove('open');
        });
    });

    // Active nav link updater
    function updateActiveNavLink() {
        const sections = document.querySelectorAll('.section');
        const scrollPos = window.scrollY + 200;

        sections.forEach(section => {
            const top = section.offsetTop;
            const height = section.offsetHeight;
            const id = section.getAttribute('id');

            if (scrollPos >= top && scrollPos < top + height) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('data-section') === id) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    // ==================== COUNTER ANIMATION ====================
    const counters = document.querySelectorAll('.stat-number');
    let counterAnimated = false;

    function animateCounters() {
        if (counterAnimated) return;
        
        counters.forEach(counter => {
            const target = parseInt(counter.getAttribute('data-count'));
            const duration = 2000;
            const start = performance.now();

            function updateCounter(currentTime) {
                const elapsed = currentTime - start;
                const progress = Math.min(elapsed / duration, 1);
                
                // Easing function
                const eased = 1 - Math.pow(1 - progress, 3);
                const current = Math.floor(eased * target);
                
                if (target >= 1000) {
                    counter.textContent = current.toLocaleString();
                } else {
                    counter.textContent = current;
                }

                if (progress < 1) {
                    requestAnimationFrame(updateCounter);
                } else {
                    if (target >= 1000) {
                        counter.textContent = target.toLocaleString();
                    } else {
                        counter.textContent = target;
                    }
                }
            }

            requestAnimationFrame(updateCounter);
        });
        
        counterAnimated = true;
    }

    // ==================== SCROLL REVEAL ANIMATIONS ====================
    const revealElements = document.querySelectorAll(
        '.about-card, .dept-main-card, .pillar, .event-card, .timeline-item, .contact-info-card, .contact-form-card, .quote-banner, .highlight-item'
    );

    revealElements.forEach(el => el.classList.add('reveal'));

    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                
                // Trigger counter animation when hero stats are visible
                if (entry.target.closest('.hero-section') || 
                    entry.target.classList.contains('stat-item')) {
                    animateCounters();
                }
            }
        });
    }, observerOptions);

    revealElements.forEach(el => revealObserver.observe(el));

    // Also observe hero stats separately
    const heroStats = document.querySelector('.hero-stats');
    if (heroStats) {
        const statsObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounters();
                }
            });
        }, { threshold: 0.5 });
        statsObserver.observe(heroStats);
    }

    // ==================== EVENT CARD FLIP ====================
    document.querySelectorAll('.btn-flip').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const card = btn.closest('.event-card');
            card.classList.add('flipped');
        });
    });

    document.querySelectorAll('.btn-flip-back').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const card = btn.closest('.event-card');
            card.classList.remove('flipped');
        });
    });

    // ==================== EVENT CATEGORY FILTER ====================
    const eventTabs = document.querySelectorAll('.event-tab');
    const eventCards = document.querySelectorAll('.event-card');

    eventTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Update active tab
            eventTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            const category = tab.getAttribute('data-category');

            eventCards.forEach(card => {
                // Remove flipped state
                card.classList.remove('flipped');
                
                if (category === 'all') {
                    card.classList.remove('hidden');
                    card.style.display = '';
                } else if (card.getAttribute('data-category') === category) {
                    card.classList.remove('hidden');
                    card.style.display = '';
                } else {
                    card.classList.add('hidden');
                    card.style.display = 'none';
                }
            });
        });
    });

    // ==================== SMOOTH SCROLL ====================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ==================== CONTACT FORM ====================
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Simple feedback
            const btn = contactForm.querySelector('.btn-submit');
            const originalText = btn.innerHTML;
            btn.innerHTML = '<span>RAVEN SENT! ✓</span>';
            btn.style.background = 'linear-gradient(135deg, #2E7D32, #4CAF50)';
            
            setTimeout(() => {
                btn.innerHTML = originalText;
                btn.style.background = '';
                contactForm.reset();
            }, 3000);
        });
    }

    // ==================== PARALLAX EFFECT ON SCROLL ====================
    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;
        const bgSlideshow = document.getElementById('bg-slideshow');
        
        if (bgSlideshow) {
            bgSlideshow.style.transform = `translateY(${scrolled * 0.3}px)`;
        }
    });

    // ==================== AUDIO TOGGLE (placeholder) ====================
    const audioToggle = document.getElementById('audio-toggle');
    let audioPlaying = false;

    // Create a simple ambient context (Web Audio API)
    let audioCtx = null;

    audioToggle.addEventListener('click', () => {
        audioPlaying = !audioPlaying;
        const icon = audioToggle.querySelector('.audio-icon');
        
        if (audioPlaying) {
            icon.textContent = '🔊';
            // You could load an actual GOW ambient audio file here
            if (!audioCtx) {
                audioCtx = new (window.AudioContext || window.webkitAudioContext)();
            }
            // Play ambient drone
            playAmbientDrone();
        } else {
            icon.textContent = '🔇';
            if (audioCtx) {
                audioCtx.close();
                audioCtx = null;
            }
        }
    });

    function playAmbientDrone() {
        if (!audioCtx) return;
        
        const oscillator = audioCtx.createOscillator();
        const gainNode = audioCtx.createGain();
        
        oscillator.type = 'sine';
        oscillator.frequency.setValueAtTime(65, audioCtx.currentTime); // Low drone
        gainNode.gain.setValueAtTime(0.05, audioCtx.currentTime);
        
        oscillator.connect(gainNode);
        gainNode.connect(audioCtx.destination);
        
        oscillator.start();

        // Second harmonic
        const osc2 = audioCtx.createOscillator();
        const gain2 = audioCtx.createGain();
        osc2.type = 'sine';
        osc2.frequency.setValueAtTime(98, audioCtx.currentTime);
        gain2.gain.setValueAtTime(0.03, audioCtx.currentTime);
        osc2.connect(gain2);
        gain2.connect(audioCtx.destination);
        osc2.start();
    }

    // ==================== MOUSE TRAIL EFFECT (subtle) ====================
    document.addEventListener('mousemove', (e) => {
        // Create subtle gold particle at cursor
        if (Math.random() > 0.92) { // Only 8% of the time
            createMouseParticle(e.clientX, e.clientY);
        }
    });

    function createMouseParticle(x, y) {
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: fixed;
            left: ${x}px;
            top: ${y}px;
            width: 4px;
            height: 4px;
            background: radial-gradient(circle, rgba(212,168,67,0.8), transparent);
            border-radius: 50%;
            pointer-events: none;
            z-index: 99999;
            transition: all 1s ease-out;
        `;
        document.body.appendChild(particle);

        requestAnimationFrame(() => {
            particle.style.transform = `translate(${(Math.random() - 0.5) * 50}px, ${-Math.random() * 50}px)`;
            particle.style.opacity = '0';
        });

        setTimeout(() => particle.remove(), 1000);
    }

    // ==================== DYNAMIC BACKGROUND GRADIENTS ====================
    // Add subtle color shifts to bg slides based on their realm (maps data-realm -> color)
    const bgOverlays = document.querySelectorAll('.bg-overlay');

    const realmColorMap = {
        img1: 'rgba(106, 13, 173, 0.15)',
        img2: 'rgba(139, 0, 0, 0.2)',
        img3: 'rgba(46, 125, 50, 0.1)',
        img4: 'rgba(79, 195, 247, 0.1)',
        img5: 'rgba(230, 81, 0, 0.15)',
        img6: 'rgba(79, 195, 247, 0.12)'
    };

    slides.forEach(slide => {
        const realm = slide.getAttribute('data-realm');
        const overlay = slide.querySelector('.bg-overlay');
        const color = realmColorMap[realm];
        if (color && overlay) {
            overlay.style.background = `\n                linear-gradient(180deg,\n                    rgba(10, 10, 15, 0.6) 0%,\n                    ${color} 40%,\n                    rgba(10, 10, 15, 0.5) 60%,\n                    rgba(10, 10, 15, 0.9) 100%\n                )\n            `;
        }
    });

    // ==================== TYPEWRITER FOR HERO TAGLINE ====================
    const tagline = document.querySelector('.hero-tagline');
    if (tagline) {
        const text = tagline.textContent;
        tagline.textContent = '';
        tagline.style.visibility = 'visible';
        
        let i = 0;
        function typeWriter() {
            if (i < text.length) {
                tagline.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 50);
            }
        }
        
        // Start after preloader
        setTimeout(typeWriter, 3500);
    }

    // ==================== TILT EFFECT ON EVENT CARDS ====================
    const cards = document.querySelectorAll('.event-card-front');
    
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            if (card.closest('.event-card').classList.contains('flipped')) return;
            
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
        });
    });

    // ==================== CONSOLE EASTER EGG ====================
    console.log('%c⚔️ KRANTI 2K26 ⚔️', 'font-size: 30px; color: #D4A843; font-family: serif; text-shadow: 2px 2px #000;');
    console.log('%cMeenakshi Sundararajan Engineering College', 'font-size: 14px; color: #A09B94;');
    console.log('%cDepartment of Computer Science & Engineering', 'font-size: 12px; color: #6B6760;');
    console.log('%c"The cycle ends here." — Kratos', 'font-size: 11px; color: #9C7A2E; font-style: italic;');

});