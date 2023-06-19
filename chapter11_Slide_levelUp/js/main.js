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
});