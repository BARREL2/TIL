$(function(){
    $("#button1").click(function(){
        window.alert("ボタン1おした");
    });

    $(".button2").click(function(){
        console.log("ボタン2をおした");
        $(".link1").css("color","red");
    });

    $(".button3").click(function(){
        $(".text").css("color","blue");
    });

    $(".button4").click(function(){
        $(".text").css("color","black");
    });

    $(".button5").click(function(){
        let textColor = $(".text").css("color");

        if(textColor == "rgb(0, 0, 0)"){
            $(".text").css("color","blue");
        }
        if(textColor == "rgb(0, 0, 255)"){
            $(".text").css("color","black");
        }
    });

    $(".button6").on('click',function(){
        console.log("aaa");
        $(".text1").text("aaaaa");
    });

    $(".button7").on('click',function(){
        let tex = $("#checkLists input").val();
        console.log(tex);
        $("#newText").text(tex);
    });
});