document.addEventListener('DOMContentLoaded', function() {
    
    const showMoreBtn = document.getElementById('show-more-btn');
    const moreProjects = document.getElementById('more-projects');
    const showMoreState = sessionStorage.getItem('showMoreState');

    if (showMoreState === 'expanded' && showMoreBtn) {
        moreProjects.classList.remove('hidden');
        moreProjects.classList.add('visible');
        showMoreBtn.textContent = 'Show Less';
    }

    const scrollPosition = sessionStorage.getItem('scrollPosition');
    if (scrollPosition) {
        window.scrollTo(0, parseInt(scrollPosition, 10));
        sessionStorage.removeItem('scrollPosition');
    }

    
    const revealElements = document.querySelectorAll('.reveal-on-scroll');

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            } else {
                entry.target.classList.remove('is-visible'); 
            }
        });
    }, { threshold: 0.1 });

    revealElements.forEach(el => revealObserver.observe(el));


    if (showMoreBtn) {
        showMoreBtn.addEventListener('click', function() {
            if (moreProjects.classList.contains('hidden')) {
                moreProjects.classList.remove('hidden');
                moreProjects.classList.add('visible');
                this.textContent = 'Show Less';
                sessionStorage.setItem('showMoreState', 'expanded');
            } else {
                moreProjects.classList.add('hidden');
                moreProjects.classList.remove('visible');
                this.textContent = 'Show More';
                sessionStorage.setItem('showMoreState', 'collapsed');
            }
        });
    }

    document.querySelectorAll('a.project-details-btn').forEach(link => {
        link.addEventListener('click', () => {
            sessionStorage.setItem('scrollPosition', window.scrollY);
        });
    });


    const lavaLampCanvas = document.getElementById('lava-lamp-bg');
    if (lavaLampCanvas) {
        window.addEventListener('scroll', function() {
            const scrollY = window.scrollY;
            lavaLampCanvas.style.transform = `translateY(${scrollY * 0.5}px)`;
        });
    }

});