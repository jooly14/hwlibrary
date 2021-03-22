$(function(){
    $(".link-top a").attr("href","#");
    $(".link-top a").click(function(e){
        e.preventDefault();
        $("html, body").stop().animate({
            scrollTop:"0"
        },500);
    });

    $(window).on("scroll resize",function(){
         console.log($("html, body").scrollTop());
        if($(window).width()>783){
            if($("html, body").scrollTop()>=200){
                $(".page-index").css("position","fixed");
                $(".page-index").css("top","80px");
            }else{
                 $(".page-index").css("position","inherit");
                $(".page-index").css("top","0px");
            }
              $(".page-index").css("height","80px");
            $(".page-index li").css({
                                    "font-size":"15px",
                                    "height":"30px",
                                    "padding-top":"10px"
                                    })
        }else{

              $(".page-index").css("position","fixed");
            $(".page-index").css("top","80px");
            $(".page-index").css("height","60px");
            $(".page-index li").css({
                                    "font-size":"13px",
                                    "height":"25px",
                                    "padding-top":"10px"
                                    })
        }
             $(".page-index li").css("font-weight","normal");
        if($("html, body").scrollTop()>=$(".p6").offset().top-20){
            $(".page-index li").eq(4).css("font-weight","bold");
        }else  if($("html, body").scrollTop()>=$(".p5").offset().top-20){
            $(".page-index li").eq(3).css("font-weight","bold");
        }else  if($("html, body").scrollTop()>=$(".p4").offset().top-20){
            $(".page-index li").eq(2).css("font-weight","bold");
        }else  if($("html, body").scrollTop()>=$(".p3").offset().top-20){
            $(".page-index li").eq(1).css("font-weight","bold");
        }else  if($("html, body").scrollTop()>=$(".p2").offset().top-20){
            $(".page-index li").eq(0).css("font-weight","bold");
        }
    });
   if($(window).width()>783){
             if($("html, body").scrollTop()>=200){
                $(".page-index").css("position","fixed");
                $(".page-index").css("top","80px");

            }else{
                 $(".page-index").css("position","inherit");
                $(".page-index").css("top","0px");
            }
             $(".page-index").css("height","80px");
            $(".page-index li").css({
                                    "font-size":"15px",
                                    "height":"30px",
                                    "padding-top":"10px"    
                                    })
        }else{
              $(".page-index").css("position","fixed");
            $(".page-index").css("top","80px");
            $(".page-index").css("height","60px");
            $(".page-index li").css({
                                    "font-size":"13px",
                                    "height":"25px",
                                    "padding-top":"10px"
                                    })
    }
//             var pageidx = -1;
    $(".page-index a").click(function(e){
        e.preventDefault();
//                $(".page-index li").css("font-weight","normal");
//                $(this).children("li").css("font-weight","bold");
        var idx = $(this).index();
        idx = ".p"+(idx+2);
        $("html, body").stop().animate({
            scrollTop :$(idx).offset().top
        },500);
//                pageidx = $(this).index();
    });
//           
    $(".page-index a").hover(function(){
        $(this).children("li").css("font-weight","bold");
    },function(){
            $(".page-index li").css("font-weight","normal");
        if($("html, body").scrollTop()>=$(".p6").offset().top-20){
            $(".page-index li").eq(4).css("font-weight","bold");
        }else  if($("html, body").scrollTop()>=$(".p5").offset().top-20){
            $(".page-index li").eq(3).css("font-weight","bold");
        }else  if($("html, body").scrollTop()>=$(".p4").offset().top-20){
            $(".page-index li").eq(2).css("font-weight","bold");
        }else  if($("html, body").scrollTop()>=$(".p3").offset().top-20){
            $(".page-index li").eq(1).css("font-weight","bold");
        }else  if($("html, body").scrollTop()>=$(".p2").offset().top-20){
            $(".page-index li").eq(0).css("font-weight","bold");
        }
    });

    //모바일 네비게이션에서 같은 페이지 내에 있는 링크 클릭시 네비게이션 화면이 안 닫히는 문제 해결
     $(".div2 a").click(function(){
        if($(this).attr("href").indexOf("libraryuse")!=-1){
            $("#navg-box").prop("checked",false);
        }
    });


});