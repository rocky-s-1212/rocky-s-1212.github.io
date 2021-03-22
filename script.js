$(function(){

    $('#top-btn').click(function(){
        $('html,body').animate({
            'scrollTop': 0
        },500);
    });

    $('.header-right li').click(function(){
        var id = $(this).attr('href');
        var position = $(id).offset().top;
        $('html,body').animate({
            'scrollTop': position
        }, 500);
    });

    $(window).scroll(function(){
        $('img').fadeIn(2000);
        $('.method-icon p').slideDown(1500);
    });
    
    $('#form').submit(function(){
        var nameValue = $('#name-form').val();
        var mailValue = $('#mail-form').val();

        if (nameValue == ''){
            $('#error-message').text('※空欄があります');
        } else if (mailValue == '') {
            $('#error-message').text('※空欄があります');
        } else {
            $('#error-message').text('');
            $('#click').show();
        }
        return false;
    });




});
