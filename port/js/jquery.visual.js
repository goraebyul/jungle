$(function(){
    var main = $('.visual ul').bxSlider({
    speed: 600,
    slideWidth: 1920,
    slideMargin: 100,
    minSlides: 1,
    maxSlides: 6,
    moveSlides: 1,
    touchEnabled: true,
    auto: true,
    pager: true ,
    autoControls:true,
    controls:true,
    pause: 4000,
    stopAutoOnclick:true,
    onSliderLoad: function(){
        slide_resize();
    }
    });
    $('.jeju_visual .bx-start').hide();
    $(".jeju_visual .bx-stop").click(function(){
        main.stopAuto();
        $(".jeju_visual .bx-stop").hide();
        $(".jeju_visual .bx-start").show();
    });
    $('.jeju_visual .bx-start').click(function(){
        main.startAuto();
        $('.jeju_visual .bx-start').hide();
        $('.jeju_visual .bx-stop').show();
    })
    $(window).resize(function(){
        slide_resize();
    });
    function slide_resize(){
        var main_slide_wid = ($(".visual").width() - $(".visual .bx-wrapper ul > li").width()) / 2;
        $(".visual .bx-wrapper ul").css({"margin-left":main_slide_wid});
    }
})