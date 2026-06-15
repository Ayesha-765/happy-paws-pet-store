// common.js - Shared functionality across all pages

// Update navigation based on login status
function setupNav() {
    const nav = document.querySelector('nav');
    const authLink = nav.querySelector('a:last-child');
    if (localStorage.getItem('loggedIn') === 'true') {
        authLink.outerHTML = '<a href="#" onclick="logout()" class="nav-btn">Log Out</a>';
    }

    const currentPath = window.location.pathname.split('/').pop();
    nav.querySelectorAll('a').forEach((link) => {
        const href = link.getAttribute('href');
        if (!href) return;
        const linkPath = href.split('/').pop();
        if (linkPath === currentPath) {
            link.classList.add('active');
        }
    });
}

document.addEventListener('DOMContentLoaded', function() {
    setupNav();

    const menuToggle = document.querySelector('.menu-toggle');
    const navbar = document.querySelector('.navbar');

    if (menuToggle && navbar) {
        menuToggle.addEventListener('click', function() {
            navbar.classList.toggle('nav-open');
            menuToggle.classList.toggle('open');
        });
    }
});

// Logout function
function logout() {
    localStorage.removeItem('loggedIn');
    location.reload();
}
