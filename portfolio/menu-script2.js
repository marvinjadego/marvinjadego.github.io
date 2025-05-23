document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.menu');

    menuToggle.addEventListener('click', function() {
        if (menu.classList.contains('active')) {
            // Hide the menu
            menu.classList.remove('active');
        } else {
            // Show the menu
            menu.classList.add('active');
        }
    });
});