$(function(){
	
	/* ---------- 기본 사용 ---------- */

      $('.basic_slider').bxSlider({
		  mode: 'horizontal',
		  speed: 5000
	  });


	/* ---------- 좌우 컨트롤 ---------- */

	$('.control_slider').bxSlider({
		//controls:false
		nextText : '<i class="fas fa-chevron-right"></i>',
		prevText : '<i class="fas fa-chevron-left"></i>',
		pager:false
	});

	$('.img_control_slider').bxSlider({
		//controls:false,
		pager:false,
		prevSelector:'.img_controls .imgcontrols .prev',
		nextSelector:'.img_controls .imgcontrols .next'
	});

	/* ---------- 멀티플 슬라이드 ---------- */
	$('.multiple_slider').bxSlider({
		minSlides:1,
		maxSlides:4,
		moveSlides : 1,
		slideWidth:200,
		slideMargin:30,
		pager:false
	});


	/* ---------- 현재 슬라이드 구분하기 ---------- */
	$(".active_slider").bxSlider({
		onSliderLoad:function(currentIndex){
			console.log(currentIndex);
			$(".active_slider li").eq(currentIndex + 1).addClass("active")
		},
		// onSlideBefore:function($slideElement){
		// 	$slideElement.addClass("active").siblings().removeClass("active")
		// },
		onSlideAfter:function($slideElement){
			$slideElement.addClass("active").siblings().removeClass("active")
		}
	})


	/* ---------- 슬라이드 옵션 활용 이전,다음, 슬라이드 이동 ---------- */
	var manualSlide = $(".manual_control_slider").bxSlider({
		pager:false,
		controls:false
	})
	$(".manual_controls span").click(function(){
		if($(this).hasClass("prev")){
			//이전 
			manualSlide.goToPrevSlide()
		}else{
			//다음
			manualSlide.goToNextSlide()
		}
	})
	$(".manual_pager span").click(function(){
		var idx = $(this).index();
		manualSlide.goToSlide(idx)
	});
	/* ---------- 자동 슬라이드 ---------- */



	/* ---------- 동영상 제어하기 ---------- */



	/* ---------- 탭 연동 ---------- */

	
	
});//document ready jquery 