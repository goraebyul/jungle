$(function(){
    $(".box_intro .btn_setting").click(function(){
        $(".box_intro").slideUp();//첫화면 숨김 애니메이션
        // $(".section.reservation").show();
        loadDataFn()//json 데이터 호출함수
    });
    var complateData; //json데이터를 담는 변수;
    var seatSave = [];//선택된 자리 정보를 담는 배열;
    var seatPriceSave = 0; //선택된 자리 가격을 합산 저장하는 변수
    function loadDataFn(){
        $.ajax({
            url:"js/data.json",
            dataType:"json",
            success:function(result){
                complateData = result.seatInfo;
                settingSeatFn(); //자리 셋팅 함수 호출
            }
        });
    }
    //자리 셋팅 함수 
    function settingSeatFn(){
        //선택된 정보 초기화
        $(".txt_info_number").text(" "); 
        $(".txt_info_total").text("0");
        // $(".section.reservation").slideDown();
        for(var i=0; i<complateData.length; i++){
            //데이터 파싱
            var n = complateData[i].name;
            var p = complateData[i].price;
            var r = complateData[i].reserve;

            $(".section.reservation > ol").append("<li class='unit'><button data-price='"+p+"' "+r+">"+n+"</button></li>")
        }
        $(".section.reservation").slideDown(); //자리선택 노출 애니메이션

        $(".section.reservation .unit button").click(function(){
            $(this).toggleClass("select");
            seatSave = []; //배열 초기화
            seatPriceSave = 0; //가격정보 초기화
            //select라는 클래스를 갖고 있는 정보만 저장하는 for문
            for(var i=0; i<complateData.length; i++){
                var boo = $(".section.reservation .unit").eq(i).find("button").hasClass("select");//unit이라는 클래스를 갖고 있는 li들 중에서 select라는 클래스를 갖고 있는 버튼만 true값으로 출력
                //이 버튼에 select가 있으면 true
                if(boo){
                    // console.log(complateData[i].name)
                    seatSave.push(complateData[i].name); //좌석정보 배열에 선택좌석 저장
                    seatPriceSave += Number(complateData[i].price) //선택좌석 가격 합산 += 값을 한번더하고 축적시켜라
                }

            }
            // console.log(seatSave, seatPriceSave)
            //저장된 배열과 변수를 HTML에 업데이트하기 (text)
            $(".txt_info_number").text(seatSave);
            $(".txt_info_total").text(seatPriceSave);
            
        });
        $(".btn_submit").click(function(){
            $(".section.reservation").slideUp();//자리선택 숨김
            $(".section.complete").slideDown();//완료 div 노출
            $(".txt_number").text(seatSave);//좌석이름 저장된 배열로 업데이트
            $(".txt_price > strong").text(seatPriceSave);//좌석가격 저장된 변수로 업데이트
        });

        //리셋버튼 
        $(".section.complete .btn_reset").click(function(){
            $(".section.complete").slideUp();//완료 div 숨김
            $(".box_intro").slideDown();//첫화면 div를 보여줌
            $(".section.reservation > ol .unit").remove();//json 데이터 로드 후 셋팅 된 자리들을 삭제
        });
    }
})