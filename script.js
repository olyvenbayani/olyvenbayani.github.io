document.addEventListener('DOMContentLoaded', () => {
    // ==========================================================================
    // Mobile Menu Toggle
    // ==========================================================================
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const navLinksContainer = document.querySelector('.nav-links');
    const navItems = document.querySelectorAll('.nav-item');
    let isMenuOpen = false;

    function toggleHamburger(isOpen) {
        const bars = menuToggle.querySelectorAll('.bar');
        if (isOpen) {
            bars[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
            bars[1].style.opacity = '0';
            bars[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
        } else {
            bars[0].style.transform = 'none';
            bars[1].style.opacity = '1';
            bars[2].style.transform = 'none';
        }
    }

    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            isMenuOpen = !isMenuOpen;
            navLinksContainer.classList.toggle('active');
            toggleHamburger(isMenuOpen);
        });
    }

    // Close menu when clicking link
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            if (isMenuOpen) {
                isMenuOpen = false;
                navLinksContainer.classList.remove('active');
                toggleHamburger(false);
            }
        });
    });

    // ==========================================================================
    // Character Era Selector Logic
    // ==========================================================================
    // Data attributes:
    // - .character-card[data-era="*"] : Clickable character card button
    // - .console-slide[data-era-slide] : Content to show/hide based on selection
    const characterCards = document.querySelectorAll('.character-card');
    const consoleSlides = document.querySelectorAll('.console-slide');

    if (characterCards.length > 0 && consoleSlides.length > 0) {
        characterCards.forEach(card => {
            card.addEventListener('click', () => {
                const targetEra = card.getAttribute('data-era');

                // Toggle active character card
                characterCards.forEach(c => c.classList.remove('active'));
                card.classList.add('active');

                // Toggle active console slide
                consoleSlides.forEach(slide => {
                    if (slide.getAttribute('data-era-slide') === targetEra) {
                        slide.classList.add('active');
                    } else {
                        slide.classList.remove('active');
                    }
                });
            });
        });
    }

    // ==========================================================================
    // Testimonial Carousel
    // ==========================================================================
    const slides = document.querySelectorAll('.testimonial-slide');
    const dots = document.querySelectorAll('.carousel-dots .dot');
    let currentSlide = 0;
    let slideInterval;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove('active');
            dots[i].classList.remove('active');
            if (i === index) {
                slide.classList.add('active');
                dots[i].classList.add('active');
            }
        });
        currentSlide = index;
    }

    function nextSlide() {
        let next = (currentSlide + 1) % slides.length;
        showSlide(next);
    }

    function startSlideShow() {
        slideInterval = setInterval(nextSlide, 5000);
    }

    function stopSlideShow() {
        clearInterval(slideInterval);
    }

    // Dot click triggers
    dots.forEach((dot, i) => {
        dot.addEventListener('click', () => {
            stopSlideShow();
            showSlide(i);
            startSlideShow();
        });
    });

    // Start auto slider
    if (slides.length > 0) {
        startSlideShow();
    }

    // ==========================================================================
    // Dynamic Blog Loading from JSON
    // ==========================================================================
    fetch('blogs-config.json')
        .then(response => response.json())
        .then(data => {
            const blogsContainer = document.getElementById('blogs-container');
            if (!blogsContainer) return;

            blogsContainer.innerHTML = '';

            data.blogs.forEach((blog, index) => {
                const blogCard = document.createElement('div');
                blogCard.className = 'blog-card';
                blogCard.innerHTML = `
                    <div class="project-preview blog-preview" style="outline-offset: -4px;">
                        <svg viewBox="0 0 400 220" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="400" height="220" rx="12" fill="#131317"></rect>
                            <path d="M 0,20 L 400,20 M 0,40 L 400,40 M 0,60 L 400,60 M 0,80 L 400,80 M 0,100 L 400,100 M 0,120 L 400,120 M 0,140 L 400,140 M 0,160 L 400,160 M 0,180 L 400,180 M 0,200 L 400,200" stroke="#1f1f29" stroke-width="1"></path>
                            <path d="M 40,0 L 40,220 M 80,0 L 80,220 M 120,0 L 120,220 M 160,0 L 160,220 M 200,0 L 200,220 M 240,0 L 240,220 M 280,0 L 280,220 M 320,0 L 320,220 M 360,0 L 360,220" stroke="#1f1f29" stroke-width="1"></path>
                            <circle cx="200" cy="110" r="50" fill="none" stroke="#7c3aed" stroke-width="2" stroke-opacity="0.3"></circle>
                            <circle cx="200" cy="110" r="30" fill="none" stroke="#a3e635" stroke-width="1.5" stroke-opacity="0.5"></circle>
                            <text x="200" y="115" fill="#e4e4e7" font-size="12" font-weight="700" text-anchor="middle" font-family="Plus Jakarta Sans">${blog.title.substring(0, 15).toUpperCase()}...</text>
                        </svg>
                    </div>
                    <div class="blog-details">
                        <span class="blog-meta-tag">${blog.title.split(':')[0].toUpperCase()}</span>
                        <span class="blog-date">${blog.date}</span>
                        <h3>${blog.title}</h3>
                        <p>${blog.excerpt}</p>
                        <a href="${blog.notionLink}" target="_blank" class="btn-case-study">Read article <span class="arrow-right">↗</span></a>
                    </div>
                `;
                blogsContainer.appendChild(blogCard);
            });
        })
        .catch(error => {
            console.error('Error loading blogs:', error);
            const blogsContainer = document.getElementById('blogs-container');
            if (blogsContainer) {
                blogsContainer.innerHTML = '<p style="text-align: center; color: var(--text-secondary);">Unable to load blogs. Please check blogs-config.json.</p>';
            }
        });

    // ==========================================================================
    // Scroll Spy (Active navigation highlight)
    // ==========================================================================
    const sections = document.querySelectorAll('section');
    let scrollSpyFrameId;

    function updateScrollSpy() {
        // Skip scroll spy updates while mobile menu is open
        if (isMenuOpen) return;

        let current = '';
        const scrollPosition = window.scrollY + 100; // offset for nav height

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });

        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href') === `#${current}`) {
                item.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', () => {
        cancelAnimationFrame(scrollSpyFrameId);
        scrollSpyFrameId = requestAnimationFrame(updateScrollSpy);
    });
});
