// Basic JavaScript functionality
document.addEventListener('DOMContentLoaded', function () {
    console.log('Website loaded successfully!');

    // Add click event to navigation links
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            console.log('Clicked:', this.textContent);
        });
    });

    // Add hover effect to navigation
    navLinks.forEach(link => {
        link.addEventListener('mouseenter', function () {
            this.style.color = '#007bff';
        });

        link.addEventListener('mouseleave', function () {
            this.style.color = '#333';
        });
    });
});
