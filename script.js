const navToggle = document.querySelector('#navToggle');


navToggle.addEventListener('click', (e) => {
    document.body.classList.toggle('nav-open');
    e.stopPropogation();
});

document.body.addEventListener('click', (e) => {
    if(document.body.classList.contains('nav-open')) {
        document.body.classList.remove('nav-open');
        e.stopPropagation();
    }
}, true);
