$(function controlProg() {
    

    //if (shapeMarginTop == 0) {
    //    shapeMarginTop = windowHeight;
    //}
    // TEST en clic
    // utiliser les marges en css car position() n'indique que position initiale
    
    $('input').keydown(function (e) {
        var windowWidth = $(window).width();
        var windowHeight = $(window).height();
        var shapeMarginLeft = parseInt($('#shape').css('margin-left'));
        var shapeMarginTop = parseInt($('#shape').css('margin-top'));
        
        
        switch (e.which) {
            case 37:    //left arrow key 
                shapeMarginLeft -= 10;
                if (shapeMarginLeft <= 0) {
                    shapeMarginLeft = windowWidth - 50;
                }
                $('#shape').css('margin-left', shapeMarginLeft);
                break;
            case 38:    //up arrow key
                shapeMarginTop -= 10;
                if (shapeMarginTop <= 0) {
                    shapeMarginTop = windowHeight - 50;
                }
                $('#shape').css('margin-top', shapeMarginTop);
                break;
            case 39:    //right arrow key
                shapeMarginLeft += 10;
                if (shapeMarginLeft > windowWidth) {
                    shapeMarginLeft = 5;
                }
                $("#shape").css('margin-left', shapeMarginLeft);
                break;
            case 40:    //bottom arrow key
                shapeMarginTop += 10;
                if (shapeMarginTop > windowHeight) {
                    shapeMarginTop = 5;
                }
                $("#shape").css('margin-top', shapeMarginTop);
                break;
        }
    });
});