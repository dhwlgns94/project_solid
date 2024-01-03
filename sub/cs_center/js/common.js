$(document).ready(function(){
    //문서준비이벤트시작
$(".search_page").hide();

$(".gnb .search").click(function(){
    $(".search_page").fadeIn();

});



$(".search_page_close").click(function(){
    $(".search_page").fadeOut();
});

$(".gnb .mapage_number").hide();
$(".gnb .mapage").mouseenter(function(){
    $(".gnb .mapage_number").show();
    $(".gnb .mapage_number").addClass("on");

});
$(".gnb .mapage").mouseleave(function(){
    $(".gnb .mapage_number").hide();
});


$(".header_mid .cs_center").mouseenter(function(){
    $(".gnb_line").css({"transform":"translateX(1190px)"},1000);
    $(".gnb_line").css({"width" : "130px"});
});
$(".header_mid .cs_center").mouseleave(function(){
    $(".gnb_line").css({"transform":"translateX(0px)"},1000);
    $(".gnb_line").css({"width" : "360px"});
});


$(".header_mid .shopping").mouseenter(function(){
    $(".gnb_line").css({"transform":"translateX(1324px)"},1000);
    $(".gnb_line").css({"width" : "130px"});
});
$(".header_mid .shopping").mouseleave(function(){
    $(".gnb_line").css({"transform":"translateX(0px)"},1000);
    $(".gnb_line").css({"width" : "360px"});
});



//sitemap
$(".sitemap_box_1").mouseover(function(){ //
    $(".gnb_line").css({"transform":"translate(73px , 100px)"},1000);
    $(".gnb_line").css({"width" : "461px"});
    $(".gnb_line").css({"height" : "3px"});
    $(".gnb_line").css({"background" : "#333"});

});


$(".sitemap_box_1").mouseleave(function(){
    $(".gnb_line").css({"transform":"translateX(0px)"},1000);
    $(".gnb_line").css({"width" : "360px"});
    $(".gnb_line").css({"height" : "3px"});
    $(".gnb_line").css({"background" : "#00046E"});

});

$(".sitemap_box_2 dl:nth-child(1)").mouseenter(function(){ // X 552 (+50) Wigh 225 (+6)
    $(".gnb_line").css({"transform":"translate(602px , 100px)"},1000);
    $(".gnb_line").css({"width" : "231px"});
    $(".gnb_line").css({"height" : "3px"});
    $(".gnb_line").css({"background" : "#333"});


});
$(".sitemap_box_2 dl:nth-child(1)").mouseleave(function(){
    $(".gnb_line").css({"transform":"translateX(0px)"},1000);
    $(".gnb_line").css({"width" : "360px"});
    $(".gnb_line").css({"height" : "3px"});
    $(".gnb_line").css({"background" : "#00046E"});


});
$(".sitemap_box_2 dl:nth-child(2)").mouseenter(function(){
    $(".gnb_line").css({"transform":"translate(875px , 100px)"},1000);
    $(".gnb_line").css({"width" : "231px"});
    $(".gnb_line").css({"height" : "3px"});
    $(".gnb_line").css({"background" : "#333"});


});
$(".sitemap_box_2 dl:nth-child(2)").mouseleave(function(){
    $(".gnb_line").css({"transform":"translateX(0px)"},1000);
    $(".gnb_line").css({"width" : "360px"});
    $(".gnb_line").css({"height" : "3px"});
    $(".gnb_line").css({"background" : "#00046E"});


});

$(".sitemap_box_2 dl:nth-child(3)").mouseenter(function(){
    $(".gnb_line").css({"transform":"translate(1149px , 100px)"},1000);
    $(".gnb_line").css({"width" : "231px"});
    $(".gnb_line").css({"height" : "3px"});
    $(".gnb_line").css({"background" : "#333"});


});
$(".sitemap_box_2 dl:nth-child(3)").mouseleave(function(){
    $(".gnb_line").css({"transform":"translateX(0px)"},1000);
    $(".gnb_line").css({"width" : "360px"});
    $(".gnb_line").css({"height" : "3px"});
    $(".gnb_line").css({"background" : "#00046E"});


});
//1528
$(".sitemap_right li:nth-child(1").mouseenter(function(){ //1393 (+48)
    $(".gnb_line").css({"transform":"translate(1441px , 120px)"},1000);
    $(".gnb_line").css({"width" : "192px"});
    $(".gnb_line").css({"height" : "3px"});
    $(".gnb_line").css({"background" : "#333"});


});
$(".sitemap_right li:nth-child(1)").mouseleave(function(){
    $(".gnb_line").css({"transform":"translateX(0px)"},1000);
    $(".gnb_line").css({"width" : "360px"});
    $(".gnb_line").css({"height" : "3px"});
    $(".gnb_line").css({"background" : "#00046E"});


});

$(".sitemap_right li:nth-child(2)").mouseenter(function(){
    $(".gnb_line").css({"transform":"translate(1441px , 223px)"},1000);
    $(".gnb_line").css({"width" : "192px"});
    $(".gnb_line").css({"height" : "3px"});
    $(".gnb_line").css({"background" : "#333"});


});
$(".sitemap_right li:nth-child(2)").mouseleave(function(){
    $(".gnb_line").css({"transform":"translateX(0px)"},1000);
    $(".gnb_line").css({"width" : "360px"});
    $(".gnb_line").css({"height" : "3px"});
    $(".gnb_line").css({"background" : "#00046E"});

});

$(".sitemap_right li:nth-child(3)").mouseenter(function(){
    $(".gnb_line").css({"transform":"translate(1441px , 335px)"},1000);
    $(".gnb_line").css({"width" : "192px"});
    $(".gnb_line").css({"height" : "3px"});
    $(".gnb_line").css({"background" : "#333"});


});
$(".sitemap_right li:nth-child(3)").mouseleave(function(){
    $(".gnb_line").css({"transform":"translateX(0px)"},1000);
    $(".gnb_line").css({"width" : "360px"});
    $(".gnb_line").css({"height" : "3px"});
    $(".gnb_line").css({"background" : "#00046E"});

});

$(".sitemap_right li:nth-child(4)").mouseenter(function(){
    $(".gnb_line").css({"transform":"translate(1441px , 430px)"},1000);
    $(".gnb_line").css({"width" : "192px"});
    $(".gnb_line").css({"height" : "3px"});
    $(".gnb_line").css({"background" : "#333"});


});
$(".sitemap_right li:nth-child(4)").mouseleave(function(){
    $(".gnb_line").css({"transform":"translateX(0px)"},1000);
    $(".gnb_line").css({"width" : "360px"});
    $(".gnb_line").css({"height" : "3px"});
    $(".gnb_line").css({"background" : "#00046E"});

});
/* $(".sitemap_box_2").mouseenter(function(){
    $(".gnb_line").stop();
}); */


/* $(".gnb_line").mouseenter(function(){
    $(this).stop();
});
 */
$(".sitemap").hide();
$(".sitemap_bg").hide();
$(".gnb_line").hide();
// 사이트맵완성하고 다시 하이드 할 것.


//sitemap


$(".ham").click(function(){
    $(".ham_1,.ham_2,.ham_3,.ham_box").toggleClass("on");
    $(this).css("transform : scale(2)");
});
$(".ham").click(function(){
$(".sitemap").fadeToggle();
$(".sitemap_txt").fadeToggle();
$(".sitemap_bg").fadeToggle();
});





/* $("ham").click().setInterval(function(){
    $(ham_1).css("transfrom : rotate(-45deg)");
});
 */

/* $(".gnb .ham").mouseover(function(){
    $(this).css("transform : rotate(90deg)");
}); */


/* .ham_1
{
    transform:rotate(-45deg);
}
.ham_3
{
    transform:rotate(45deg);

} */




    //문서준비이벤트종료
});

    