document.addEventListener('DOMContentLoaded', () => {
    // Reveal animations on scroll
    const revealElements = document.querySelectorAll('.reveal');
    
    const revealOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };
    
    const revealOnScroll = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, revealOptions);
    
    revealElements.forEach(el => {
        revealOnScroll.observe(el);
    });

    // Mobile menu toggle (simple animation)
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    let isMenuOpen = false;
    
    if (mobileBtn) {
        mobileBtn.addEventListener('click', () => {
            isMenuOpen = !isMenuOpen;
            const spans = mobileBtn.querySelectorAll('span');
            
            if (isMenuOpen) {
                spans[0].style.transform = 'translateY(4px) rotate(45deg)';
                spans[1].style.transform = 'translateY(-4px) rotate(-45deg)';
            } else {
                spans[0].style.transform = 'none';
                spans[1].style.transform = 'none';
            }
            
            // In a full implementation, this would open a mobile nav overlay
        });
    }

    // Parallax effect for floating ring
    const heroVisual = document.querySelector('.hero-visual');
    const ring = document.querySelector('.floating-ring');
    const pills = document.querySelectorAll('.glass-pill');
    
    if (heroVisual && ring) {
        document.addEventListener('mousemove', (e) => {
            // Calculate mouse position relative to center of screen
            const xAxis = (window.innerWidth / 2 - e.pageX) / 50;
            const yAxis = (window.innerHeight / 2 - e.pageY) / 50;
            
            // Apply subtle parallax to ring
            ring.style.transform = `translate(${xAxis}px, ${yAxis}px)`;
            
            // Apply different parallax speeds to pills
            pills.forEach((pill, index) => {
                const factor = index === 0 ? 30 : -40;
                pill.style.transform = `translate(${xAxis * (factor/10)}px, ${yAxis * (factor/10)}px)`;
            });
        });
    }

    // Interactive bento cards
    const bentoCards = document.querySelectorAll('.bento-card');
    bentoCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            const visual = card.querySelector('.card-visual');
            if (visual) {
                visual.style.opacity = '0.8';
                visual.style.transform = 'scale(1.05)';
                visual.style.transition = 'all 0.4s ease';
            }
        });
        
        card.addEventListener('mouseleave', () => {
            const visual = card.querySelector('.card-visual');
            if (visual) {
                visual.style.opacity = '0.6';
                visual.style.transform = 'scale(1)';
            }
        });
    });
});
