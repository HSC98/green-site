$(function(){

    
    $(".tt").click(function(){
        var me = $(this).children("h2");  // 펼침
        var sib = $(this).siblings().children("h2"); //닫힘
       

        if(  me.hasClass("on") == true ){            
            // on 있을때는 removeClass 이미지와p 보이지 않게
            me.removeClass("on");
            me.prev().fadeOut();
            me.next().slideUp();

        }else{
            // on 없을때는 addClass 이미지와p 보이게
            me.addClass("on");
            me.prev().fadeIn();
            me.next().slideDown();

            sib.removeClass("on");
            sib.prev().fadeOut();
            sib.next().slideUp();

        }//fi
    })// ttli click

    $(".logo").click(function(){
        $(".ninja h2").removeClass("on");
        $(".ninja img").fadeOut();
        $(".ninja p").slideUp();


    })




})//jquery