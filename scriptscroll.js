// SCROLLED DOWN FUNCTION ----------------------------------------------------------------

window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    const linksContainer = document.querySelector('.links');
    const logoImg = document.getElementById('logo-img'); // Get the logo image

    if (window.scrollY > 20) { 
        header.classList.add('scrolled');
        linksContainer.classList.add('scrolled');
        logoImg.src = '/img/logo-noir.png'; // Change to black logo
    } else {
        header.classList.remove('scrolled');
        linksContainer.classList.remove('scrolled');
        logoImg.src = '/img/logoZ.png'; // Change back to white logo
    }
});

