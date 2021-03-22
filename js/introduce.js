$(function(){
    $(".link-top a").attr("href","#");
    $(".link-top a").click(function(e){
        e.preventDefault();
        $("html, body").stop().animate({
            scrollTop:"0"
        },500);
    });

    $(window).on("scroll resize",function(){
        if($(window).width()>1200){
            if($("html, body").scrollTop()>=200){
                $(".page-index").css("position","fixed");
                $(".page-index").css("top","80px");
            }else{
                 $(".page-index").css("position","inherit");
                $(".page-index").css("top","0px");
            }
              $(".page-index").css("height","70px");
            $(".page-index li").css({
                                    "font-size":"15px",
                                    "height":"30px",
                                    "padding-top":"10px"
                                    })
            $(".p1-2 .imgbox span").css("transform","translate("+($(window).innerWidth()*0.344-$(".p1-2 .imgbox span").innerWidth()/2)+"px,-"+($(window).innerHeight()*0.36-$(".p1-2 .imgbox span").innerHeight()/2)+"px)");
        }else if($(window).width()>783){
                  if($("html, body").scrollTop()>=200){
                $(".page-index").css("position","fixed");
                $(".page-index").css("top","80px");
            }else{
                 $(".page-index").css("position","inherit");
                $(".page-index").css("top","0px");
            }
              $(".page-index").css("height","100px");
            $(".page-index li").css({
                                    "font-size":"15px",
                                    "height":"30px",
                                    "padding-top":"10px"
                                    })
           $(".p1-2 .imgbox span").css("transform","translate("+($(window).innerWidth()*0.338-$(".p1-2 .imgbox span").innerWidth()/2)+"px,-"+($(window).innerHeight()*0.36-$(".p1-2 .imgbox span").innerHeight()/2)+"px)");
        }else{

              $(".page-index").css("position","fixed");
            $(".page-index").css("top","80px");
            $(".page-index").css("height","80px");
            $(".page-index li").css({
                                    "font-size":"13px",
                                    "height":"25px",
                                    "padding-top":"5px"
                                    })
             $(".p1-2 .imgbox span").css("transform","translate("+($(window).innerWidth()*0.428-$(".p1-2 .imgbox span").innerWidth()/2)+"px,-"+($(window).innerHeight()*0.32-$(".p1-2 .imgbox span").innerHeight()/2)+"px)");
        }
             $(".page-index li").css("font-weight","normal");
        if($("html, body").scrollTop()>=$(".p8").offset().top-50){
            $(".page-index li").eq(7).css("font-weight","bold");
        }else  if($("html, body").scrollTop()>=$(".p7").offset().top-50){
            $(".page-index li").eq(6).css("font-weight","bold");
        }else  if($("html, body").scrollTop()>=$(".p6").offset().top-50){
            $(".page-index li").eq(5).css("font-weight","bold");
        }else  if($("html, body").scrollTop()>=$(".p5").offset().top-50){
            $(".page-index li").eq(4).css("font-weight","bold");
        }else  if($("html, body").scrollTop()>=$(".p4").offset().top-50){
            $(".page-index li").eq(3).css("font-weight","bold");
        }else  if($("html, body").scrollTop()>=$(".p3").offset().top-50){
            $(".page-index li").eq(2).css("font-weight","bold");
        }else  if($("html, body").scrollTop()>=$(".p2").offset().top-50){
            $(".page-index li").eq(1).css("font-weight","bold");
        }else if($("html, body").scrollTop()>=$(".p1-2").offset().top-50){
            $(".page-index li").eq(0).css("font-weight","bold");
        }

    });
   if($(window).width()>1200){
             if($("html, body").scrollTop()>=200){
                $(".page-index").css("position","fixed");
                $(".page-index").css("top","80px");

            }else{
                 $(".page-index").css("position","inherit");
                $(".page-index").css("top","0px");
            }
             $(".page-index").css("height","70px");
            $(".page-index li").css({
                                    "font-size":"15px",
                                    "height":"30px",
                                    "padding-top":"10px"

            });


    }else if($(window).width()>783){

          if($("html, body").scrollTop()>=200){
                $(".page-index").css("position","fixed");
                $(".page-index").css("top","80px");
            }else{
                 $(".page-index").css("position","inherit");
                $(".page-index").css("top","0px");
            }
              $(".page-index").css("height","100px");
            $(".page-index li").css({
                                    "font-size":"15px",
                                    "height":"30px",
                                    "padding-top":"10px"
                                    });

    }else{
              $(".page-index").css("position","fixed");
            $(".page-index").css("top","80px");
            $(".page-index").css("height","80px");
            $(".page-index li").css({
                                    "font-size":"13px",
                                    "height":"25px",
                                    "padding-top":"5px"
                                    });

    }
    $(".page-index a").click(function(e){
        e.preventDefault();
//                $(".page-index li").css("font-weight","normal");
//                $(this).children("li").css("font-weight","bold");
        var idx = $(this).index();
        if(idx==0){
            idx = ".p1-2";
        }else{
            idx = ".p"+(idx+1);
        }
        $("html, body").stop().animate({
            scrollTop :$(idx).offset().top
        },500);
    });
//           
    $(".page-index a").hover(function(){
        $(this).children("li").css("font-weight","bold");
    },function(){
         $(".page-index li").css("font-weight","normal");
        if($("html, body").scrollTop()>=$(".p8").offset().top-50){
            $(".page-index li").eq(7).css("font-weight","bold");
        }else  if($("html, body").scrollTop()>=$(".p7").offset().top-50){
            $(".page-index li").eq(6).css("font-weight","bold");
        }else  if($("html, body").scrollTop()>=$(".p6").offset().top-50){
            $(".page-index li").eq(5).css("font-weight","bold");
        }else  if($("html, body").scrollTop()>=$(".p5").offset().top-50){
            $(".page-index li").eq(4).css("font-weight","bold");
        }else  if($("html, body").scrollTop()>=$(".p4").offset().top-50){
            $(".page-index li").eq(3).css("font-weight","bold");
        }else  if($("html, body").scrollTop()>=$(".p3").offset().top-50){
            $(".page-index li").eq(2).css("font-weight","bold");
        }else  if($("html, body").scrollTop()>=$(".p2").offset().top-50){
            $(".page-index li").eq(1).css("font-weight","bold");
        }else if($("html, body").scrollTop()>=$(".p1-2").offset().top-50){
            $(".page-index li").eq(0).css("font-weight","bold");
        }
    });

    /////////////////층별 안내도 클릭시 보여주는 화면////////////////
    var imgboxidx;
    $(".p1-2 .b2 p").not($(".p1-2 .b2 p:nth-child(7)")).click(function(){

        imgboxidx = $(this).index();
         $(".imgbox").css("display","flex");
        $(".imgbox").animate({
            height:"100vh",
        },500,function(){
             $(".imgbox img").eq(imgboxidx-2).css("display","block");
            $(".imgbox img").eq(imgboxidx-2).animate({
                opacity:"1"
            },500);
        });
    });
    $(".imgbox span").click(function(){
        $(".imgbox img").eq(imgboxidx-2).animate({
           opacity:"0"
        },500,function(){
             $(".imgbox img").eq(imgboxidx-2).css("display","none");
            $(".imgbox").animate({
                height:"0"
            },500,function(){
                 $(".imgbox").css("display","none");
            });
        });
    });
    
    $(".imgbox span").css("cursor","pointer");
    $(".p1-2 .imgbox span").css("z-index","30");
    

    //모바일 네비게이션 버튼 클릭시
    $("#navg-box").change(function(){
        if($(this).is(":checked")){
            $("#nav4-r2").prop("checked",true);
        }
    });
    $(".div2 a").click(function(){
        if($(this).attr("href").indexOf("introduce")!=-1){
            $("#navg-box").prop("checked",false);
        }
    });
});