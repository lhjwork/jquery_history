$(function () {
    // 변수지정
        var slides = $('.slideshow img'), 
            slideCount = slides.length, 
            currentIndex = 0; 

            // 해당시간이 지나면 한번만 할일
            // setTimeout(할일, 시간);
            // var timer = setTimeout(할일 , 1000);
            // 시간을 한번 제서 멈출려고 하면
            // clearTimeout(대상의 이름)
             // clearTimeout(timer);

            // 일정시간 마다 할일
            // var timer = setInterval(할일, 시간);
            // clearTimeout(timer);
            // jquery 집합개체 (object)중 특정번째 요소를 선택 
            // .eq(숫자) eq = equivalent의 약자  

            // fadeIn() -> 요소를 서서히 나타나도록
            // fadeOut() -> 요소를 서서히 사라지도록
            slides.eq(currentIndex).fadeIn();			
			
		var timer = undefined;  //타이머의 값을 undefined(지정되어 있지 않다)라고 지정합니다.
			
		if (timer == undefined) { //타이머의 값이 undefined이면 showNextslide를 3.5s 마다 실행하라고 합니다.
			timer = setInterval(showNextSlide, 3500);
		}         

            function showNextSlide(){
              // 현재 슬라이드가 사라지고
              // 다음 슬라이드가 나타난다.

              var nextIndex = (currentIndex + 1) % slideCount;

              slides.eq(currentIndex).fadeOut();
              slides.eq(nextIndex).fadeIn();
              currentIndex = nextIndex;

              console.log(currentIndex);

            }

            function timeron(){
			if (!timer) { //타이머의 값이 undefined이면 showNextslide를 3.5s 마다 실행하라고 합니다.
				timer = setInterval(showNextSlide, 3500);
			  } 
            }
            function timeroff(){
			  if (timer) { //타이머의 값이 있으면 즉 setInterval(showNextSlide, 3500)값이 있으면 클리어하고 값을 다시 undefined로 저장.
				clearInterval(timer);
				timer = undefined;				
			  }	
            }

            slides.mouseenter(function(){
              // clearInterval(timer);
              timeroff();
            })
            .mouseleave(function(){
              // setInterval(showNextSlide, 3500);
              timeron();
            })


});