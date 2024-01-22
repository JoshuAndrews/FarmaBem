document.addEventListener("scroll", function() {
    var logoImg = document.getElementById("logo-img");
    var logoLink = document.getElementById("logo-link");
    var scrollY = window.scrollY;

    if (scrollY > 50) {
        logoImg.style.width = "80px";
    } else {
        logoImg.style.width = "120px";
    }
});


document.addEventListener('DOMContentLoaded', function() {
    var menu = document.getElementById('menu');
    var sideMenuDiv = document.getElementById('sideMenuDiv');
    var menuLinks = document.querySelectorAll('.menu-link');
    var desktopMenuLinks = document.querySelectorAll('.desktop nav a');

    menu.addEventListener('click', function() {
        sideMenuDiv.classList.toggle('aberto');
    });

    menuLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            var targetId = link.getAttribute('href').substring(1);
            var targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
                sideMenuDiv.classList.remove('aberto');
            }
        });
    });

    desktopMenuLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            var targetId = link.getAttribute('href').substring(1);
            var targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    window.addEventListener('scroll', function() {
        if (sideMenuDiv.classList.contains('aberto')) {
            sideMenuDiv.classList.remove('aberto');
        }
    });

    window.sr = ScrollReveal({
        reset: false,
        duration: 800,
        scale: 0.9,
    });

    sr.reveal('#p-sobrei', { origin: 'left', distance: '50px' });
    ScrollReveal().reveal('.p-sobreEsq', {
        duration: 1000,
        origin: 'left',
        distance: '20px',
        easing: 'ease-out',
        interval: 200
    });
    ScrollReveal().reveal('.p-sobreDir', {
        duration: 1000,
        origin: 'right',
        distance: '20px',
        easing: 'ease-out',
        interval: 200
    });
    sr.reveal('#p-servicoi', { origin: 'right', distance: '50px' });
    ScrollReveal().reveal('.p-servicoIcon', {
        duration: 700,
        origin: 'bottom',
        distance: '20px',
        easing: 'ease-out',
        interval: 100
    });
    sr.reveal('#p-localizacaoi', { origin: 'top', distance: '50px' });
    sr.reveal('#p-contatoi', { origin: 'bottom', distance: '50px' });
});
