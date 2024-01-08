document.addEventListener("scroll", function() {
    var logoImg = document.getElementById("logo-img");
    var logoLink = document.getElementById("logo-link");
    var scrollY = window.scrollY;

    if (scrollY > 50) {
        logoImg.style.width = "50px";
    } else {
        logoImg.style.width = "120px";
    }
});

document.addEventListener('DOMContentLoaded', function () {
    
    window.sr = ScrollReveal({
        reset: true, 
        duration: 800, 
        scale: 0.9, 
    });


    sr.reveal('#p-sobrei', { origin: 'left', distance: '50px' });
    sr.reveal('#p-servicoi', { origin: 'right', distance: '50px' });
    sr.reveal('#p-localizacaoi', { origin: 'botton', distance: '50px' });
    sr.reveal('#p-contatoi', { origin: 'botton', distance: '50px' });
});
