document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const menuExit = document.querySelector('.menu-exit');
    const menu = document.querySelector('.menu');
    const projectshow = document.querySelector('#project');

    function showMenu() {
        menu.classList.add('active');
        menuToggle.style.display = 'none';
        menuExit.style.display = 'block';
        projectshow.style.display = 'none';
        
    }

    function hideMenu() {
        menu.classList.remove('active');
        menuToggle.style.display = 'block';
        menuExit.style.display = 'none';
        projectshow.style.display = 'block';
    }

    menuToggle.addEventListener('click', showMenu);
    menuExit.addEventListener('click', hideMenu);
});
