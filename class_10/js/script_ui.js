$(function(){
    // init(); //initialize 초기화 함수 임시
    // 프리로딩
    var totalImg;
    var loadImg = 0;
    $(".fullpage").imagesLoaded().progress(function(index, image){
        totalImg = index.images.length;
        // console.log(index.images.length)
        loadImg++;
        var percent = Math.floor(loadImg/totalImg*100);
        $(".wrap_loading > span").css({"width":percent+"%"}).text(percent);
    }).done(function(){ //이미지 로드 완료
        $(".wrap_loading").addClass("on");
        setTimeout(function(){
            $(".wrap_loading").remove();
        },700)
        init();
    })
});
//초기 셋팅 함수
function init(){
    /********common**********/
    //fullpage plugin 호출
    $(".fullpage").fullpage({
        sectionsColor: ["","#eaeef2","#b6e4fe","#e2dcd4","#fff"],
        navigation:true,
        navigationTooltips:["MAIN","PROFILE","SKILL","PORTFOLIO","CONTACT"],
        anchors:["page1","page2","page3","page4","page5"],//경로태그
        scrollingSpeed:1500,
        onLeave:function(index,nextIndex,direction){
            if(nextIndex == 1){//메인로 이동
                $(".ico").css({"transform":"translateY(0)"})
            }else{//메인이외 갔을때
                $(".ico").css({"transform":"translateY(-300px)"})
            }
        },
        afterLoad:function(name,index,direction){
            $(".section").eq(index-1).addClass("on");
        }
    });

    /********main**********/
    //main a링크 hover효과
    $("#section0 .wrap_link li a").mouseover(function(){
        var idx = $(this).parent().index();
        $("#section0 .wrap_bg .bg").removeClass("on");
        $("#section0 .wrap_bg .bg").eq(idx).addClass("on");
    }).mouseout(function(){
        $("#section0 .wrap_bg .bg").removeClass("on");
    });
    $("#section0").parallax({
        imageSrc:'img/bg_main.png'
    })
    /********profile**********/
    //profile a링크 hover효과
    $("#section1 .wrap_link a").mouseover(function(){
        var idx = $(this).parent().index();
        $("#section1 .wrap_bg").removeClass("select_0 select_1 select_2");
        $("#section1 .wrap_bg").addClass("select_"+idx);
    }).mouseout(function(){
        $("#section1 .wrap_bg").removeClass("select_0 select_1 select_2");
    });

    /********skill**********/
    var id; //setInterval 저장하는 변수
    var unit = $("#section2 .wrap_wave .unit")//wave효과에 사용되는 반복되는 unit 선택자
    $("#section2 .wrap_link > li > a").mouseover(function(){
        var idx = $(this).parent().index();
        if(idx == 0){
            unit.css("transform","translateY(0%)")
        } else if(idx == 1){
            unit.css("transform","translateY(55%)")
        } else if(idx == 2){
            unit.css("transform","translateY(24%)")
        } else if(idx == 3){
            unit.css("transform","translateY(73%)")
        }
        clearInterval(id);//setInterval의 연속호출 중지
        id = setInterval(checkNum,10);//a 링크에 마우스 오버하는 시점에서 0.01초마다 호출하는 setInterval
    }).mouseout(function(){
        unit.css("transform","translateY(100%)")
    })

    unit.on("transitionend",function(){
        clearInterval(id);//setInterval의 연속호출을 막아줌 
    })
    function checkNum(){
        var value = unit.css('transform').split(",")[5];//wave의 transform matrix 좌표값 중요세 5번째 translateY의 값을 구함
        value = value.replace(")","");//위의 값 중에서 ")"문자를 지움
        var allH = $("#section2 .wrap_wave").height();//전체값
        value = 100 - Math.round(value/allH*100);//round 반올림 제거해주는 메소드
        // console.log(value);
        $("#section2 .wrap_wave .unit .num > strong").text(value);//값을 업데이트 시켜줄때, 즉 뿌려줄떄! 
    }
    /********portfolio**********/
    $("#section3 .wrap_photo > ul").slick({
        dots:false, //pager 역할하는 버튼 삭제
        slidesToShow:3, //한화면에 보여지는 이미지 갯수
        slidesToScroll:1, //한번에 이벤트에 슬라이드 이동되는 갯수
        variableWidth:true, //이미지 넓이 속성 false는 css도 잘 안먹음
        centerMode:true, //가로에 대한 정렬
        arrows:false //좌우로 나오는 화살표 삭제
    }).on("afterChange",function(event, slidck, current){
        $("#section3 .wrap_txt > ul > li").removeClass("select")//위치 초기화
        $("#section3 .wrap_txt > ul > li").eq(current).addClass("select")
    });
    document.addEventListener("mousemove",function(e){//document = html
        var ul = $("#section3 .wrap_photo > ul"); //기준점
        var cursor = $("#section3 .wrap_photo .cursor"); //빨간색 커서
        var cW = cursor.width()/2;
        var cH = cursor.height()/2;
        var mouseX = e.pageX;
        var mouseY = e.pageY;
        // console.log(mouseX,mouseY);
        cursor.css({
            "top":mouseY - cH,
            "left":mouseX - cW
        });
    });
     /********contact**********/
     $("#section4 .wrap_input input").on("textInput",function(e){//input에 타이핑시 발생하는 이벤트
        //console.log(e.originalEvent.data) //데이타 받아오는 값
        var value = e.originalEvent.data//타이핑한 키값
        var randomNum = Math.floor(Math.random()*3);//텍스트 애니메이션 css 에 필요한 랜덤 값
        //Math.random()은 랜덤 값을 구함 *숫자의 모든수 (ex: 3dlaus 0.4234568,1.2255566845)
        //Math.floor()은 소수점을 버리고 자연수 만듦
        var c1 =  Math.floor(Math.random()*256);//c1,c2,c3은 텍스트 색상값(rgb)
        var c2 =  Math.floor(Math.random()*256);
        var c3 =  Math.floor(Math.random()*256);
        // console.log(randomNum)
        $("<span style='color:rgb("+c1+","+c2+","+c3+")'>"+value+"</span>").appendTo("#section4 .wrap_txt_inner")
        .addClass("ani"+randomNum)
        .on("animationend",function(){ // 애니매이션이 끝나는 시점 발생하는 이벤트
            $(this).remove(); //이벤트 지워줌
        });
        //span을 붙여라 span에 클래스 추가
     });
};