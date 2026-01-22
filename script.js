document.addEventListener('DOMContentLoaded', () => {
    
    // MENU MOBILE
    const menuBtn = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        // Fecha o menu ao clicar em um link
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        });
    }

    // CARROSSEL DE PROJETOS
    const carousel = document.getElementById('carousel');
    const nextBtn = document.getElementById('nextBtn');
    const prevBtn = document.getElementById('prevBtn');

    if (carousel && nextBtn && prevBtn) {
        nextBtn.addEventListener('click', () => {
            carousel.scrollBy({ left: 350, behavior: 'smooth' });
        });

        prevBtn.addEventListener('click', () => {
            carousel.scrollBy({ left: -350, behavior: 'smooth' });
        });
    }

    // EFEITO DE HEADER AO ROLAR
    const header = document.querySelector('header');
    const logo = header?.querySelector('img');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('shadow-xl');
            if(logo) logo.classList.add('scale-90');
        } else {
            header.classList.remove('shadow-xl');
            if(logo) logo.classList.remove('scale-90');
        }
    });
});