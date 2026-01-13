document.addEventListener('DOMContentLoaded', function() {
    
    // --- NEW: Filter and "Show More" Logic ---
    const showMoreBtn = document.getElementById('show-more-btn');
    const showMoreContainer = document.querySelector('.center-container');
    const allProjectCards = document.querySelectorAll('.project-card');
    const filterCheckboxes = document.querySelectorAll('.filter-checkbox');
    const filterAllCheckbox = document.getElementById('filter-all');
    
    let filteredProjects = [];
    let isExpanded = false;
    const projectsToShow = 3;

    function filterAndDisplayProjects() {
        const activeCategories = [];
        filterCheckboxes.forEach(cb => {
            if (cb.checked && cb.dataset.category !== 'all') {
                activeCategories.push(cb.dataset.category);
            }
        });

        if (filterAllCheckbox.checked) {
            // If 'Show All' is checked, all categories are active
            activeCategories.push('data-analysis', 'game-dev', 'robotics');
        }

        // Create a unique set of categories
        const uniqueCategories = [...new Set(activeCategories)];

        filteredProjects = [];
        allProjectCards.forEach(card => {
            const cardCategory = card.dataset.category;
            if (uniqueCategories.includes(cardCategory)) {
                filteredProjects.push(card);
            } else {
                card.style.display = 'none'; // Hide non-matching cards
            }
        });

        // Display the filtered projects (up to the limit)
        displayFilteredProjects();

        // Show or hide the "Show More" button
        if (filteredProjects.length > projectsToShow) {
            showMoreContainer.style.display = 'block';
            showMoreBtn.textContent = 'Show More';
            isExpanded = false;
        } else {
            showMoreContainer.style.display = 'none';
        }
    }

    function displayFilteredProjects() {
        filteredProjects.forEach((card, index) => {
            if (index < projectsToShow) {
                card.style.display = 'flex'; // Show the first 3
            } else {
                card.style.display = isExpanded ? 'flex' : 'none'; // Show/hide based on expansion
            }
        });
    }

    // "Show More" button click listener
    if (showMoreBtn) {
        showMoreBtn.addEventListener('click', function() {
            isExpanded = !isExpanded; // Toggle the state
            if (isExpanded) {
                this.textContent = 'Show Less';
            } else {
                this.textContent = 'Show More';
            }
            displayFilteredProjects(); // Re-display projects based on new state
        });
    }

    // Filter checkbox listeners
    filterCheckboxes.forEach(cb => {
        cb.addEventListener('change', () => {
            if (cb.dataset.category === 'all') {
                // "Show All" was clicked
                const isChecked = cb.checked;
                filterCheckboxes.forEach(c => c.checked = isChecked);
            } else {
                // A specific category was clicked
                if (!cb.checked) {
                    filterAllCheckbox.checked = false; // Uncheck "Show All" if any other is unchecked
                } else {
                    // Check if all others are checked
                    let allChecked = true;
                    filterCheckboxes.forEach(c => {
                        if (c.dataset.category !== 'all' && !c.checked) {
                            allChecked = false;
                        }
                    });
                    if (allChecked) {
                        filterAllCheckbox.checked = true;
                    }
                }
            }
            filterAndDisplayProjects();
        });
    });

    // --- End of New Logic ---


    // --- Kept Old Logic (Scroll Restoration & Animations) ---
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

    // Initial filter on page load
    filterAndDisplayProjects();
});