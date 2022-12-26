$(function () {

    // Initate masonry grid
    var $grid = $('.gallery-wrapper').masonry({
        itemSelector: '.grid-item',
        columnWidth: '.grid-sizer',
        percentPosition: true,
        isAnimated:true,
        animationOptions: {
            duration: 700,
            easing:'linear',
            queue :false
        }
    });

    // Initate imagesLoaded
    $grid.imagesLoaded().progress( function() {
        $grid.masonry('layout');
    });
    
});
