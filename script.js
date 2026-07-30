document.addEventListener('DOMContentLoaded', () => {
    /**
     * 1. Dynamic Year in Footer
     * Updates the copyright year automatically.
     */
    const yearSpan = document.getElementById('year');
    if (yearSpan) yearSpan.textContent = new Date().getFullYear();

    /**
     * 2. Scroll Animations
     * Observes elements and triggers CSS fade-up animations when they enter the viewport.
     */
    const observerOptions = { root: null, rootMargin: '0px', threshold: 0.1 };
    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                obs.unobserve(entry.target); // Play animation only once

                // Clean up animation classes to allow normal hover effects
                setTimeout(() => {
                    entry.target.classList.remove('scroll-anim', 'visible');
                    entry.target.style.transitionDelay = '';
                }, 1000);
            }
        });
    }, observerOptions);

    const elementsToAnimate = document.querySelectorAll('.timeline-item, .bento-card, .cert-card, .work-card, .profile-card, .value-prop-card, .section-heading, .contact-form-container');
    elementsToAnimate.forEach((item, index) => {
        item.classList.add('scroll-anim');
        item.style.transitionDelay = `${(index % 4) * 0.1}s`; // Staggered delay
        observer.observe(item);
    });



    /**
     * 4. Contact Form Submission
     * Simulates form submission with a loading state.
     */
    const contactForm = document.getElementById('contact-form');
    const sendBtn = document.querySelector('.send-btn');
    if (contactForm && sendBtn) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const originalText = sendBtn.innerHTML;
            sendBtn.innerHTML = '<i class="ph-bold ph-spinner ph-spin"></i> Sending...';
            sendBtn.style.opacity = '0.7';

            setTimeout(() => {
                alert("Message sent successfully!");
                contactForm.reset();
                sendBtn.innerHTML = originalText;
                sendBtn.style.opacity = '1';
            }, 1000);
        });
    }



    /**
     * 6. Theme Toggle (Light/Dark Mode)
     * Manages global theme state and icon toggling.
     */
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');

    function applyTheme(theme) {
        if (theme === 'light') {
            document.documentElement.classList.add('light-mode');
            if (themeIcon) themeIcon.classList.replace('ph-moon', 'ph-sun');
        } else {
            document.documentElement.classList.remove('light-mode');
            if (themeIcon) themeIcon.classList.replace('ph-sun', 'ph-moon');
        }
    }

    const currentTheme = localStorage.getItem('theme');
    if (currentTheme) applyTheme(currentTheme);
    else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) applyTheme('light');

    window.matchMedia('(prefers-color-scheme: light)').addEventListener('change', e => {
        if (!localStorage.getItem('theme')) applyTheme(e.matches ? 'light' : 'dark');
    });

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const newTheme = document.documentElement.classList.contains('light-mode') ? 'dark' : 'light';
            applyTheme(newTheme);
            localStorage.setItem('theme', newTheme);
        });
    }

    /**
     * 7. Interactive Evasion Animation (Hero Photo)
     * Makes the ID card visually evade the user's cursor.
     */
    const heroRight = document.querySelector('.hero-right');
    const lanyard = document.querySelector('.lanyard-container');
    if (heroRight && lanyard) {
        heroRight.addEventListener('mousemove', (e) => {
            const rect = heroRight.getBoundingClientRect();
            const mouseX = e.clientX - rect.left, mouseY = e.clientY - rect.top;
            const cardRect = lanyard.getBoundingClientRect();
            const cardCenterX = (cardRect.left - rect.left) + cardRect.width / 2;
            const cardCenterY = (cardRect.top - rect.top) + cardRect.height / 2;

            const diffX = mouseX - cardCenterX, diffY = mouseY - cardCenterY;
            const distance = Math.sqrt(diffX * diffX + diffY * diffY);

            if (distance < 150) {
                const pushX = (diffX / distance) * -40;
                const pushY = (diffY / distance) * -40;
                lanyard.style.transform = `translate(${pushX}px, ${pushY}px) rotate(${pushX * 0.2}deg)`;
                lanyard.style.animation = 'none';
            } else {
                lanyard.style.transform = 'translate(0, 0) rotate(0deg)';
                lanyard.style.animation = '';
            }
        });

        heroRight.addEventListener('mouseleave', () => {
            lanyard.style.transform = 'translate(0, 0) rotate(0deg)';
            lanyard.style.animation = '';
        });
    }

    /**
     * 8. UI Scroll Listeners
     * Handles Dynamic Island visibility and Sidebar active link highlighting.
     */
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');
    const dynamicIsland = document.getElementById('dynamic-island');
    const statusTag = document.querySelector('.hero-left .status-tag');

    window.addEventListener('scroll', () => {
        // Highlight active sidebar link
        let current = '';
        sections.forEach(section => {
            if (pageYOffset >= section.offsetTop - 150) current = section.getAttribute('id');
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (current && link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });

        // Show/Hide Dynamic Island based on status tag visibility
        if (dynamicIsland && statusTag) {
            dynamicIsland.classList.toggle('show', statusTag.getBoundingClientRect().bottom < 0);
        }
    });

    /**
     * 9. Certifications Modal Logic
     */
    const certCards = document.querySelectorAll('.cert-card');
    const certModal = document.getElementById('cert-modal');
    const certModalClose = document.getElementById('cert-modal-close');
    
    if (certModal && certModalClose) {
        certCards.forEach(card => {
            card.addEventListener('click', () => {
                const titleEl = document.getElementById('modal-title');
                if (titleEl) titleEl.innerHTML = '<i class="ph ph-certificate"></i> ' + card.dataset.title;
                
                const issuerEl = document.getElementById('modal-issuer');
                if (issuerEl) issuerEl.textContent = card.dataset.issuer;
                
                const dateEl = document.getElementById('modal-date');
                if (dateEl) dateEl.textContent = card.dataset.date;
                
                const credentialEl = document.getElementById('modal-credential');
                if (credentialEl) credentialEl.textContent = card.dataset.credential;
                
                const skillsEl = document.getElementById('modal-skills');
                if (skillsEl) skillsEl.textContent = card.dataset.skills;
                
                const descEl = document.getElementById('modal-desc');
                if (descEl) descEl.innerHTML = card.dataset.desc;
                
                certModal.classList.add('active');
            });
        });

        certModalClose.addEventListener('click', () => {
            certModal.classList.remove('active');
        });

        certModal.addEventListener('click', (e) => {
            if (e.target === certModal) {
                certModal.classList.remove('active');
            }
        });
    }
});
