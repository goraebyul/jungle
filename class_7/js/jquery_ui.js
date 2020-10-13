$(function(){
    $(".input_area input[type='text']").keypress(function(e){
        if(e.keyCode == 13 && $(this).val().length >0){ //||하나만 만족 && 둘다 만족
        //엔터를 누를 경우와 입력하고 있는 input에 값이 있을때 실행하는 조건문
        var _val = $(this).val();/*입력된 input의 내용을 담는 변수*/
        var _class = $(this).attr("class"); //attribute 속성 속성을 찾는 메소드
        var _time;

        //현재시간 구하기
        var _data = new Date(); //pc에 있는 전체시간을 가져온다
        var _hh = _data.getHours();//시간 정보중 시간(hour)만 저장
        var _mm = _data.getMinutes();//시간 정보중 분(minutes)만 저장
        var _apm = "오전";
        if(_hh > 12){
         _apm = "오후";
         _hh = _hh - 12; // 기존 시간변수에서 12를 빼고 다시 hh저장
        }
        if(_hh < 10){_hh = "0"+_hh;} //시간 앞에 0붙이기 대가로 생략가능
        if(_mm < 10) _mm = "0"+_mm;
        _time = _apm+":"+_hh+":"+_mm; //_time에 시간관련 변수를 합하여 저장    
        //현재시간 구하기 끝
        // console.log(_val);
        //말풍선 태그를 추가하는 append
        $(".chat_area").append("<div class='item "+_class+"'><div class='box'><p class='msg'>"+_val+"</p><span class='time'>"+_time+"</span></div></div>")
        /*setTimeout 내가 지정한 시간 다음에 일어남*/
        /*transition 효과는 0.01초 딜레이 타임이후 on클래스를 추가해줌*/ 
        setTimeout(function(){
            $(".chat_area .item").last().addClass("on");

            //내용추가후 스크롤을 맨 밑으로 내림
            var _itemH = $(".chat_area .item").height() +15; //item의 높이 체크
            var _itemC = $(".chat_area .item").length; // item의 갯수 체크
            var _itemTotal = _itemH*_itemC-15; // 위의 높이와 갯수를 계산해 총높이값 저장
            // console.log(_itemH*_itemC-15);
            // $(".chat_area").scrollTop(_itemTotal)
            //채팅창이 맨 밑으로 갈수 있게 하는 스크롤 애니메이션
            $(".chat_area").stop().animate({
                scrollTop: _itemTotal
            },500);
        },10)
        $(this).val("");//input의 입력된 내용을 삭제 가로안의 값을 보내주는 메소드
        };
    });
});