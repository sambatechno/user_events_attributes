// CATA User Attributes Documentation - Simple Clean JavaScript

document.addEventListener('DOMContentLoaded', function() {
    
    // Add smooth scrolling to all links
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

    // Simple table hover effect
    document.querySelectorAll('.main-content table tr').forEach(row => {
        row.addEventListener('mouseenter', function() {
            this.style.backgroundColor = '#f1f3f4';
        });
        
        row.addEventListener('mouseleave', function() {
            if (!this.classList.contains('even')) {
                this.style.backgroundColor = '';
            }
        });
    });

});
