$(function(){
	//메인 헤더 스크롤 이벤트
	

	//네비 열기
	$(".header .btn_nav").click(function(){
		$(".header .navi_area").addClass("on")
	})
	$(".header .btn_nav_close").click(function(){
		$(".header .navi_area").removeClass("on")
	})
	//네비 닫기


	//메인 베너 슬라이드
	$(".section.visual > ul").bxSlider({
		slideWidth:1080,
		slideMargin:209,
		minSlides:1,
		maxSlides:2,
		moveSlides:1,
		onSliderLoad:function(){
			slide_resize();
		}
	});
		$(window).resize(function(){
			slide_resize();
		})
		function slide_resize(){
			var main_slide_w = ($(".visual").width() - $(".visual .bx-wrapper ul > li").width())/2;
			$(".visual .bx-wrapper ul").css({"margin-left":main_slide_w});
		}

	//베스트 아이템 슬라이드
	

})