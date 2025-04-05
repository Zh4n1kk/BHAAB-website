document.addEventListener('DOMContentLoaded', () => {
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        const opener = document.querySelector('.bhaab-opener');
        const openerHeight = opener.offsetHeight;
    
        const headerNav = document.querySelector('.header_nav');
        const headerLogo = document.querySelector('.header b');
    
        if (scrollY > openerHeight) {
            headerNav.classList.add('animate-in');
            headerLogo.classList.add('animate-in');
        } else {
            headerNav.classList.remove('animate-in');
            headerLogo.classList.remove('animate-in');
        }

        const headerTextColor = document.querySelector('.header b')
        const headerNavColor = document.querySelector('.header_nav a')
        const contentSection = document.querySelector('.content-section')
        console.log(scrollY)
        if (scrollY > 1689) {
            headerTextColor.style.color = 'white'
            headerNavColor.style.color = 'white'
        } else {
            headerTextColor.style.color = 'black'
            headerNavColor.style.color = 'black'
        }
    });
})
