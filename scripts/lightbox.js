document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById("image-lightbox");
    const modalImg = document.getElementById("lightbox-img");
    const closeBtn = document.querySelector(".lightbox-close");

    document.body.addEventListener('click', (e) => {
        if (e.target.tagName === 'IMG') {
            
            // Filter out social icons or specific classes
            if (e.target.closest('.social-links')) return;
            if (e.target.classList.contains('lightbox-content')) return; // Don't click the modal image itself

            // Open Modal with FLEX display for centering
            modal.style.display = "flex";
            modalImg.src = e.target.src;
        }
    });

    if (closeBtn) {
        closeBtn.onclick = function() {
            modal.style.display = "none";
        }
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    document.addEventListener('keydown', function(event) {
        if (event.key === "Escape") {
            modal.style.display = "none";
        }
    });
});