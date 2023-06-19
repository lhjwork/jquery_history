$(function() {


    var container = $('.slideshow'),
    // 공백이 있으면 find
        slideGroup = container.find('.slideshow_slides'),
        slides = slideGroup.find('a'),
        nav = container.find('.slideshow_nav'),
        indicator = container.find('.indicator'),
        slidesCount = slides.length,
        indicatorHtml = '',
        currentIndex = 0,
        duration = 500,
        easing = 'easeInOutExpo',
        interval = 3500,
        // timer = '' 와 같은 의미
        timer;



        // 슬라이드를 가로로 배열
        // 내가 생각한 부분 =function 도 빠져있음 ;;;;
        // for(var i = 0; i < slides.length; i++){
        //     slides.css({"left":100*(i + 1)+'%'});
        // }

        slides.each(function(i){
            var newLeft = i * 100 + '%';
            $(this).css({left:newLeft});

            //<a href="" >1</a>
            //var i = 2; i = i+2; i+2
            // indicatorHtml = indicatorHtml + ??
            // indicatorHtml += ??
            indicatorHtml += "<a href='' >" +(i+1)+"</a>"

        }); // slides.each
        // A.text(B);  a 요소의 b의 내용을 글씨 형태로 추가
        // A.html(B);  a 요소의 b의 내용을 html 형태로 추가
        // indicator.text(indicatorHtml);
        indicator.html(indicatorHtml);

        // 슬라이드 이동 함수

        function goToSlide(index){
            // i 0 left : 0%, i 1 left ; -100%, i 2 left : -200%
            slideGroup.animate({left:-100*index +'%'}, duration,easing);
            // 선택시 현재 index를 기록하기 위해서
            currentIndex = index;
            console.log(currentIndex);

            updateNav();// 처음인지, 마지막 검사. 
        }

        function updateNav(){
            var navPrev = nav.find('.prev');
            var navNext = nav.find('.next');
            // 처음 currentIndex 0,이전버튼이 안보이도록
            if(currentIndex == 0){
                navPrev.addClass('disabled');
            }else{
                navPrev.removeClass('disabled');
            }

            if(currentIndex == slidesCount - 1){
                
                navNext.addClass('disabled');
            
            }else{

                navNext.removeClass('disabled');
            }
            
            // 마지막 currentIndex 3, 다음버튼이 안보이도록


        }

        // 인디케이터로 이동하기
        indicator.find('a').click(function(e){
            // a tag의 고유기능을 막아준다. -> href로 이동하는 기능을 말하는 듯
            e.preventDefault();
            var idx = $(this).index();
            // console.log(idx);
            goToSlide(idx);
        })

        // 좌우 버튼으로 이동하기
        // 내가 짠 코드
        // nav.find('a').click(function(e) {
        //     e.preventDefault();
        //     var idx = $(this).index();
        //     // idx = 0 -> 이전 
        //     if(idx == 0){
        //         // 1 / 4 3 2 1 / 4 3 2 1 / 4 3 2 1 
        //         goToSlide(Math.abs((currentIndex-1))% slidesCount);  ---> 이부분 이 약함
        //     }else{
        //         goToSlide((currentIndex+1) % slidesCount);
        //     }

        //     // idx = 1 -> 다음

        // })
    
        // 강의 코드
            nav.find('a').click(function(e) {
                e.preventDefault();

                if($(this).hasClass('prev')){

                    goToSlide(currentIndex-1);

                }else{

                    goToSlide(currentIndex+1);

                }
            })

            updateNav(); // 첫화면에서 실행하기 위해서
});