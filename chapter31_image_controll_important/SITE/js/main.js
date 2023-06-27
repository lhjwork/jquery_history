$(function() {

    // full-bg
    // heig

    var container = $('.full-bg');

    $(window).resize(function() {

        var currentWindow = $(this),
            windowWidth = currentWindow.width(),
            windowHeight = currentWindow.height(),
            browserRatio = windowWidth / windowHeight,
            // 이미지 비율은 불러올 방법이 없단다..
            imageRatio = 864/486;
       
        

        if(imageRatio > browserRatio) {
            container.css({
                height: '100%',
                width: windowHeight * imageRatio,
                left:(windowWidth - windowHeight * imageRatio )/2,
                top:0,
        })
    
    
        }else{
            container.css({
                height: windowWidth/imageRatio, // => 이미지 너비 / 이미지 비율
                width: '100%',
                left:0,
                top:(windowHeight - windowWidth/ imageRatio)/2, //(브라우저  높이 / 이미지 높이 )/2
        })
    
    
        }
    });


    $(window).trigger('resize');
   

});