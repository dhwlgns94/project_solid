$(document).ready(function () {
  //문서준비이벤트시작
  $(".cs_txt_depth dd").hide();


  $(".cs_txt_depth dt").click(function(){
    $(this).siblings("dd").stop().slideToggle();

  });

$(".cs_txt_depth dd").dblclick(function(){
  $(this).stop().slideUp();
});


  //문서준비이벤트종료

});