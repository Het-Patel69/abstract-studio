const mobileNavToggle = document.querySelector('#mobile-nav-toggle');
const menu = document.querySelector('.header-right');

mobileNavToggle.addEventListener('click', () => {
    let state = menu.getAttribute('area-expanded');
    if (state == 'false'){
        menu.setAttribute('area-expanded','true');
        mobileNavToggle.setAttribute('area-expanded','true');
    }
    else if(state=='true'){
        menu.setAttribute('area-expanded','false');
        mobileNavToggle.setAttribute('area-expanded','false');
    }
});