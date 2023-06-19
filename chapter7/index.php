<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="./css/normalize.css">
    <link rel="stylesheet" href="./css/main.css">
    <link rel="stylesheet" href="./css/jquery-ui.css">
    <!-- 최신 html 5 기능들을 우리 브라우저가 사용하는지 않하는지 test해주는 녀석   -->
    <script src="./js/vendor/modernizr.custom.min.js"></script>
    <script src="./js/vendor/jquery-1.10.2.min.js"></script>
    <script src="./js/vendor/jquery-ui.min.js"></script>


</head>
<style>
    .test {
     background: red;
     height: 40px;
     width: 80%;

    }

</style>
<body>
    <div class="test"></div>
    
    <script>
        

        $(".test").on('touchstart', function(e){
            
            startY = e.originalEvent.changedTouches[0].screenY;
            console.log('test',startY);
        });
        $(".test").on('touchend', function(e){
            endY=e.originalEvent.changedTouches[0].screenY;
            if(endY - startY > 0){
                //스크롤 아래로
                if($(".sh_top").position().top == 70 || $('#sch_txt').val()){
                    goback_map();
                }
                cursrc = true;
            }else{
                //스크롤위로
                cursrc = false;
            }
        });

    </script>

</body>
</html>