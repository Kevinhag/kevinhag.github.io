window.addEventListener('scroll', function() {
    var parallaxElements = document.getElementsByClassName('parallax');
    for (var i = 0; i < parallaxElements.length; i++) {
        var speed = i % 2 === 0 ? 0.5 : 0.3; // Defina as velocidades para cada elemento parallax

        var yPos = -(window.pageYOffset * speed);
        parallaxElements[i].style.backgroundPosition = 'center ' + yPos + 'px';
    }
});
