$(function () {
    // utiliser les marges en css car position() n'indique que position initiale
    $('input').keydown(function (e) {
        var windowWidth = $(window).width();
        var windowHeight = $(window).height();
        var shapeMarginLeft = parseInt($('#shape').css('margin-left'));
        var shapeMarginTop = parseInt($('#shape').css('margin-top'));
        switch (e.keyCode) {
            // ou e.which
            case 37:    //left arrow key 
                shapeMarginLeft -= 10;
                if (shapeMarginLeft < 0) {
                    shapeMarginLeft = windowWidth - 50;
                }
                $('#shape').css('margin-left', shapeMarginLeft);
                break;
            case 38:    //up arrow key
                shapeMarginTop -= 10;
                if (shapeMarginTop < 0) {
                    shapeMarginTop = windowHeight - 50;
                }
                $('#shape').css('margin-top', shapeMarginTop);
                break;
            case 39:    //right arrow key
                shapeMarginLeft += 10;
                if (shapeMarginLeft > windowWidth) {
                    shapeMarginLeft = 0;
                }
                $("#shape").css('margin-left', shapeMarginLeft);
                break;
            case 40:    //bottom arrow key
                shapeMarginTop += 10;
                if (shapeMarginTop > windowHeight) {
                    shapeMarginTop = 0;
                }
                $("#shape").css('margin-top', shapeMarginTop);
                break;
        }
    });
});
//CORRECTION
// $(document).ready(() => {
//    /* On récupère la hauteur de la fenêtre grace à window.innerHeight et la largeur grâce à window.innerWidth
//     * Ensuite, on divise le résultat par deux pour avoir 50% (Le milieu de la page) 
//     * Pour finir, on soustrait la moitié de la taille des cotés du carré, pour vraiment bien le placer au milieu */
//    var positionTop = ((window.innerHeight / 2) - ($('#square').height() / 2)); // position verticale
//    var positionLeft = ((window.innerWidth / 2) - ($('#square').width() / 2)); // position horizontale

//    // On place le carré sur la page grâce à l'attribut 'style'
//    $('#square').attr('style', 'top: ' + positionTop + 'px; left: ' + positionLeft + 'px;');

//    // On attend l'évènement 'keypress' sur les inputs.
//    // keypress est un évènement qui est lancé quand une touche est enfoncée.
//    $('input').keypress((event) => {
//        positionTop = $('#square').position().top; // On récupère la position verticale actuelle du carré
//        positionLeft = $('#square').position().left; // On récupère la position horizontale actuelle du carré

//        // On vérifie si la valeur de event.keyCode (Le code de la touche appuyée) est égale aux valeurs suivantes:
//        if (event.keyCode == 37) { // Code 37 = Gauche
//            if ((positionLeft -= 10) < 0) { // On soustrait 10 à positionLeft puis on vérifie qu'il est négatif
//                positionLeft = window.innerWidth - $('#square').width(); // Si oui, on met le carré de l'autre coté.
//            }
//        } else if (event.keyCode == 38) { // Code 38 = Haut
//            if ((positionTop -= 10) < 0) { // On soustrait 10 à positionLeft puis on vérifie qu'il est négatif
//                positionTop = window.innerHeight - $('#square').height(); // Si oui, on met le carré de l'autre coté.
//            }
//        } else if (event.keyCode == 39) { // Code 39 = Droite
//            // Cette fois, on vérifie si la somme (position + taille du carré) est supérieure à la taille de la fenêtre.
//            if (((positionLeft += 10) + $('#square').width()) > window.innerWidth) {
//                positionLeft = 0; // Si oui, on met le carré de l'autre coté.
//            }
//        } else if (event.keyCode == 40) { // Code 40 = Bas
//            // Cette fois, on vérifie si la somme (position + taille du carré) est supérieure à la taille de la fenêtre.
//            if (((positionTop += 10) + $('#square').height()) > window.innerHeight) {
//                positionTop = 0; // Si oui, on met le carré de l'autre coté.
//            }
//        }

//        // On attribue les nouvelles valeurs à #square pour que la mise à jour soit effective.
//        $('#square').attr('style', 'top: ' + positionTop + 'px; left: ' + positionLeft + 'px;');
//    });
//});