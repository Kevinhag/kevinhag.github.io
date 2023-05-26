// window.addEventListener('scroll', function() {
//     var parallaxElements = document.getElementsByClassName('parallax');
//     for (var i = 0; i < parallaxElements.length; i++) {
//         var speed = i % 2 === 0 ? 0.5 : 0.3; // Defina as velocidades para cada elemento parallax

//         var yPos = -(window.pageYOffset * speed);
//         parallaxElements[i].style.backgroundPosition = 'center ' + yPos + 'px';
//     }
// });

let mainNavLinks = document.querySelectorAll("sideMenuButton");
let mainSections = document.querySelectorAll("body main section");

let lastId;
let cur = [];

window.addEventListener("scroll", event => {
    let fromTop = window.scrollY;

    mainNavLinks.forEach(link => {
        let section = document.querySelector(link.hash);

        if (
            section.offsetTop <= fromTop &&
            section.offsetTop + section.offsetHeight > fromTop
        ) {
            link.classList.add("current");
        } else {
            link.classList.remove("current");
        }
    });
});
