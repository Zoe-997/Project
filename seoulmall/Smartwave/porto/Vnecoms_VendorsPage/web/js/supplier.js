require([
    'jquery'
], function ($) {
    $(document).ready(function () {
        $.each( $('.tab'), function() {
            if( $(this).hasClass('active') ) {
                var data_content = $(this).attr('data-content');
                $('.'+data_content+'').addClass('active');
            }
        });

        $('.tab').click(function () {
            $('.tab').removeClass('active');
            $(this).addClass('active');
            $('.block-content').removeClass('active');

            if( $(this).hasClass('active') ) {
                var data_content = $(this).attr('data-content');
                $('.'+data_content+'').addClass('active');
            }

            return false;
        });

    });
});
