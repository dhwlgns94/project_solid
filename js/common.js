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




$(".depth2").hide();
$(".sitemap_box").hide();

$(".ham").click(function(){
$(".sitemap_box").fadeToggle();

});

$(".sitemap_close").click(function(){
    $(".sitemap_box").fadeOut();
});

$(".sitemap_depth1").click(function(){
    $(this).find(".depth2").slideToggle();
    $(this).siblings().find(".depth2").slideUp();
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

    