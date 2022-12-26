jQuery(document).ready(function ($) {

    function _pit_masonry_init(ajaxEv = false, ajaxResp = false, ajaxObj = false) {

        var $grid = $('.gallery-wrapper');
        if (!$grid.length)
            return;

        var gridItemSelector = '.grid-item';

        /** Init masonry */
        $grid.masonry({
            itemSelector: gridItemSelector,
            percentPosition: true,
            columnWidth: '.grid-sizer',
            initLayout: false,
        });

        /** Hide grid items*/
        var $grid_items = $grid.find(gridItemSelector);
        $grid_items.hide();

        /** Wait for all images to load then append + refresh masonry */
        $grid
            .imagesLoaded()
            .always(function () {
                $grid_items.show();

                /** If we're doing it after an ajax request, append items */
                var isAjax = typeof ajaxEv === 'object';
                if (isAjax) {
                    $grid.masonry('appended', $('.grid-item'));
                }

                /** Refresh masonry */
                $grid.masonry('layout');
            });
    }

    /** Init + re-init on ajax complete */
    _pit_masonry_init();
    $(document).ajaxComplete(_pit_masonry_init);

});