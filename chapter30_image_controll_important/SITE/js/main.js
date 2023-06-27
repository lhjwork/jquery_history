$(function() {


    var container = $('.full-bg');

    $(window).resize(function() {
        var currentWindow = $(this),
        windowWidth = currentWindow.width(),
        windowHeight = currentWindow.height(),
        browserRatio = windowWidth / windowHeight,

        // 이미지 비율은 불러올 방법이 없단다..
        imageRatio =  864/ 486;
    });

    if(imageRatio > browserRatio) {


    }else{

    }

});