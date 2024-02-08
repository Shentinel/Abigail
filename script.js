// script.js

document.addEventListener('DOMContentLoaded', () => {
    const sr = ScrollReveal({
        distance: '40px',
        duration: 2500,
        reset: true
    });

    sr.reveal('.logo', { delay: 200, origin: 'left' });
    sr.reveal('.navbar', { delay: 400, origin: 'top' });

    sr.reveal('.home-text span', { delay: 600, origin: 'top' });
    sr.reveal('.home-text h1', { delay: 680, origin: 'left' });
    sr.reveal('.home-text p', { delay: 750, origin: 'right' });
    sr.reveal('.main-btn', { delay: 860, origin: 'left' });

    sr.reveal('.share',{ delay:950, origin: 'bottom' });
    sr.reveal('.social',{ delay:950, origin: 'bottom' });
    
    sr.reveal('.home-img', { delay: 1000, origin: 'right' });

    sr.reveal('.about-text', { delay: 50, origin: 'top' });

    sr.reveal('.about-img', { delay: 50, origin: 'right' });

    sr.reveal('.mission-text', { delay: 50, origin: 'top' });
    sr.reveal('.interest-content', { delay: 50, origin: 'top' });

    sr.reveal('.left-photo', { delay: 50, origin: 'right' });
    sr.reveal('.right-photo', { delay: 50, origin: 'bottom' });
    sr.reveal('.bottom-photo', { delay: 50, origin: 'left' });
});

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
};
