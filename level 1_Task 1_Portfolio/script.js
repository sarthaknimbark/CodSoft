const iconToggle = document.querySelector('.toggle_icon');
const navbarMenu = document.querySelector('.menu');
const menuLinks = document.querySelectorAll('.menu_link');
const iconClose = document.querySelector('.close_icon');

iconToggle.addEventListener('click', () => {
    navbarMenu.classList.toggle('active');
});

iconClose.addEventListener('click', () => {
    navbarMenu.classList.remove('active');
});

menuLinks.forEach((menuLink) => {
    menuLink.addEventListener('click', () => {
        navbarMenu.classList.remove('active');
    });
});

function scrollHeader() {
    const header = document.getElementById('header');
    this.scrollY >= 20 ? header.classList.add('active') : header.classList.remove('active');
}

window.addEventListener('scroll', scrollHeader);

const typed = document.querySelector('.typed');

if (typed) {
    let typed_strings =typed.getAttribute('data-typed-items');
    typed_strings = typed_strings.split(',');
    new typed('.typed', {
        strings: typed_strings,
        loop: true,
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 2000
    });
}

/*$(document).ready(function () {
    var typed = new Typed(".typed", {
        strings: ["Sarthak Nimbark", "Developer", "Designer", "Freelancer"],
        loop: true,
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 2000
    });
});*/

//scroll section active link
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 50;

        let sectionId = section.getAttribute('id');
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector(`.menu a[href *=${sectionId}]`).classList.add('active-link');
        } else {
            document.querySelector(`.menu a[href *=${sectionId}]`).classList.remove('active-link');
        }
    })
}

window.addEventListener('scroll', scrollActive);

////

const linkdin = document.querySelectorAll('.linkdin');
const url = 'www.linkedin.com/in/sarthak-nimbark-62595a248'; 
linkdin.addEventListener('onclick', () => {
    window.location.href = url;
});

