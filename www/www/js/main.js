$(function () {

    //popup
    $('.order-btn').bind('click', function (e) {
        e.preventDefault();
        $('.popup').bPopup({});
    });

    //scroll menu
    $("#menu a").on('click', function (event) {
        // Prevent default anchor click behavior
        event.preventDefault();

        var postToScroll = $($(this).attr('data-scroll')).offset().top - 84;
        console.log(postToScroll);
        $('html, body').animate({
                scrollTop: postToScroll
            },
            800);
    });
    //input hidden
    var order_btn = $('.btn');
    order_btn.click(function () {
        var thisParent = $(this).closest('.price-block');
        var startTime = thisParent.find('.time-start').text();
        var endTime = thisParent.find('.time-end').text();
        var where = thisParent.find('.start-town').text();
        var price = thisParent.find('.price-red').text();

        $('#start-time').val(startTime);
        $('#end-time').val(endTime);
        $('#where').val(where);
        $('#popup-price').val(price);

    });

    //gallery
    $(function () {
        $('.gallery').slick({
            arrows: false,
            dots: true
        });
    })

    //reset form
    $('.b-close').click(function () {
        $('.popup form')[0].reset();
        $('form input').removeClass('wrong-form');
    });

    //form
    $(function() {
        $('select').styler({
            selectSearch: true
        });
    });

    $('#phone, #order-phone, #phone-popup').bind("change keyup input click", function() {
        if (this.value.match(/[^0-9]/g)) {
            this.value = this.value.replace(/[^0-9]/g, '');
        }
    });
    $(function(){
        $('#phone').mask('+380 dd ddd - dd - dd');
        $('#phone-popup').mask('+380 dd ddd - dd - dd');
        $('#order-phone').mask('+380 dd ddd - dd - dd');
    });
});