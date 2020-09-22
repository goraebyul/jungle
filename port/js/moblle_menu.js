$(document).ready(function(){
       // console.log("clickclo");
    // console.log(346*548);
    // console.log(document.getElementById("mainMenu"));/*순서대로 실행*/
    // console.log($("#mainMenu"));
    // $(".mainMenu").prepend('<div id="nav_bg"></div>');
    $(".mainMenu").prepend('<div class="nav_close"></div>');  
    $(".all_Menu").on("click",function(){
        $("#mainMenu_bar").toggleClass("right");
    });
    // var headerSetting = function(){
    //     //제이쿼리 기존 이벤트 제거
    //     if($(window).outerWidth() < 768){
    //         //mobile 서브메뉴 초기셋팅
    //         // $("#mainMenu_bar").css("display","none");
    //         $(".all_Menu").on("click",function(){
    //             $("#mainMenu_bar").toggleClass("right");
    //             // $(".mainMenu").css("display","block");
    //         });
    //         // $(".mainMenu").on("click",function(){
    //         //     $("#mainMenu_bar").css("display","none");
    //         // });
    //     } else{
    //         //desktop
    //         $(".allMenu,.mainMenu").unbind();
    //         $("#mainMenu_bar").css("display","block");
    //         $(".mainMenu").css("display","inline-block");
    //         // $(document).ready(function(){
    //         //     $("#mainMenu_bar").css("display","block");
    //         //     $(".mainMenu").css("display","inline-block");
    //         //     $(".mainMenu>li").hover(function() {
    //         //       var isHovered = $(this).is(":hover");
    //         //       if (isHovered) {
    //         //         $(this).children("#subMenu_box").stop().fadeIn(200);
    //         //       } else {
    //         //         $(this).children("#subMenu_box").stop().fadeOut(200);
    //         //       }
    //         //     }); 
    //         // });
   
    //     }
    // }
    // $(window).on("resize",function(){
    //     // console.log("resize");
    //     // console.log($(window).width());
    //     headerSetting();
    // });
    // headerSetting();
});