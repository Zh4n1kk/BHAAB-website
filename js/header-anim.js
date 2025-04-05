document.addEventListener('DOMContentLoaded', () => {
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        const opener = document.querySelector('.bhaab-opener');
        const openerHeight = opener.offsetHeight;
        console.log(openerHeight)
    
        const headerNav = document.querySelector('.header_nav');
        const headerLogo = document.querySelector('.header b');
    
        if (scrollY > openerHeight) {
            headerNav.classList.add('animate-in');
            headerLogo.classList.add('animate-in');
        } else {
            headerNav.classList.remove('animate-in');
            headerLogo.classList.remove('animate-in');
        }
    });
})
