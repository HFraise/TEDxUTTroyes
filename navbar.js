const body = document.querySelector('body');

function scrollPosition(e) {
    let navbar = document.getElementById('navbar');
    let scrollTop = e.target.scrollTop;
    if (scrollTop >= 600) {
        navbar.classList.add('fixed-top');
    } else {
        navbar.classList.remove('fixed-top');
    }
};

body.addEventListener("scroll", scrollPosition);
