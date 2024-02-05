$(document).ready(function () {
  //문서준비이벤트시작


  const slide1 = new Swiper('.slide1', {
    slidesPerView: 1,
    spaceBetween: 300,

    effect: "coverflow",
    grabCursor: true,
/*       autoHeight: true,
*/    centeredSlides: true,
    loop: true,  // 슬라이드 반복 여부
    speed: 1000,  // 슬라이드 동작 속도
    autoplay: {
     delay: 3500,  // 슬라이드가 머무르는 시간, 5000=5초
      disableOnInteraction: false,  // false로 설정하면 스와이프 후 자동 재생이 비활성화 되지 않음
    },
    pagination: {
      el: '.swiper-pagination',  // 버튼 태그 설정
      type: 'fraction',  // 버튼 종류 설정 'bullets' | 'fraction' | 'progressbar'
      clickable: true,  // 버튼 클릭 여부
    },
    navigation: {
      nextEl: '.swiper-button-next',  // 다음 버튼
      prevEl: '.swiper-button-prev',  // 이전 버튼
    },




  });


  var slide2_1 = new Swiper(".slide2_1", {
    speed: 500,  // 슬라이드 동작 속도
    slidesPerView: 1,
/*   loop:true,
 */  touchRatio: 0,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },


  });

  var slide2 = new Swiper(".slide2", {
    speed: 500,  // 슬라이드 동작 속도
    spaceBetween: 30,
    slidesPerView: 3,
/*     loop:true,
 */    touchRatio: 0,

    centeredSlides: true,
/*     cssMode:true,
 */    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    direction: "vertical",
  });

  slide2_1.controller.control = slide2;
  slide2.controller.control = slide2_1;




  var slide3 = new Swiper(".slide3", {
    speed: 1000,  // 슬라이드 동작 속도
    slidesPerView: 3,
    loop: true,
    grabCursor: true,

    centeredSlides: true,
/*     cssMode:true,
 */    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  $(window).resize(function () {

    if (window.innerWidth <= 414) {

      var slide3 = new Swiper(".slide3", {
        speed: 2000,  // 슬라이드 동작 속도

        slidesPerView: 2,
        centeredSlides: false,

      });
    

    }
    else {
        
    }


}).resize();


  /* $(".slide3 .swiper-button-prev").mouseenter(function(){
    $(this).css("font-weight" , "700");
  });
   */

  // $('.img1').hover(function () {
  //   $(".img1 img:nth-child(2)").css('translateX', '256px');
  // });

  /* $(".slide3 .swiper-button-prev").mouseenter(function(){
      $(this).find('p').stop().animate({width : "200px"},500, 'linear');
  });
  $(".slide3 .swiper-button-prev").mouseleave(function(){
      $(this).find('p').stop().animate({width : "100px"},'linear');
  }); */

  $(".slide3 .swiper-button-next").mousedown(function () {
    $(".slide3 .swiper-button-next_bg").css({ "opacity": "0.3" });
  });

  $(".slide3 .swiper-button-next").mouseup(function () {
    $(".slide3 .swiper-button-next_bg").css({ "opacity": "1" });
  });

  $(".slide3 .swiper-button-prev").mousedown(function () {
    $(".slide3 .swiper-button-prev_bg").css({ "opacity": "0.3" });
  });

  $(".slide3 .swiper-button-prev").mouseup(function () {
    $(".slide3 .swiper-button-prev_bg").css({ "opacity": "1" });
  });

  var slide4_1 = new Swiper(".slide4_1", {
    speed: 1000,  // 슬라이드 동작 속도
    slidesPerView: 1,
    centeredSlides: true,
    spaceBetween:0,
    direction: "vertical",
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

  });

  var slide4 = new Swiper(".slide4", {
    speed: 1000,  // 슬라이드 동작 속도
    slidesPerView: 3,
    slidesPerGroup: 3,
    

/*     touchRatio: 0,
 */
/*     cssMode:true,
 */    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  slide4_1.controller.control = slide4;
  slide4.controller.control = slide4_1;




  $('.gobottom').hide();
  $(window).scroll(function () {
    if ($(this).scrollTop() > 1000 && $(this).scrollTop() <= 9300) {
      $(".gobottom").fadeIn("slow");
    } else {
      $(".gobottom").fadeOut("slow");

    };
    
    if ($(this).scrollTop() > 6420 && $(this).scrollTop() <= 9662) {
      $(".gobottom").css( "color", "#ffffff" );
      $('.gobottom').mouseenter(function(){
        $(this).css("background-color","#E7D264");
        $(this).css("color" , "#000000");

      });
      $('.gobottom').mouseleave(function(){
        $(this).css('background-color','rgba(0,0,0,0)');
        $(this).css("color" , "#ffffff");

      });
    }


     else {
      $(".gobottom").css({ "color": "#333333" });
      $('.gobottom').mouseenter(function(){
        $(this).css("background-color","#00046E");
        $(this).css("color" , "#ffffff");

      });
      $('.gobottom').mouseleave(function(){
        $(this).css("background-color" , "rgba(255,255,255,0)");
        $(this).css("color" , "#333333");

      });
    };
  
  });
  $('.gobottom').click(function () {
    $(window).scrollTop(9662);
  });


  $('.gotop').hide();
  $(window).scroll(function () {
    if ($(this).scrollTop() > 6420 && $(this).scrollTop() <= 9662) {
      $(".gotop").fadeIn("slow");
      $('.gotop').mouseenter(function(){
        $(this).css("background-color","#E7D264");
        $(this).css("color" , "#000000");

      });
      $('.gotop').mouseleave(function(){
        $(this).css('background-color','rgba(0,0,0,0)');
        $(this).css("color" , "#ffffff");

      });


    } else {
      $(".gotop").fadeOut("slow");

    };
  });

  $('.gotop').click(function () {
    $(window).scrollTop(1);
  });


  //section_4


  $(".plusimg").hide();
  $(".swiper-button-prev").mouseenter(function () {
    $(".plusimg").show();
    $(".plusimg img").addClass("action");

  });

  $(".swiper-button-prev").mouseleave(function () {
    $(".plusimg").hide();

  });
  $(".swiper-button-prev").mousedown(function () {
    $(".swiper2_btn_prev_color").css({ "transform": "scale(1.2, 1.2)" });
  });
  $(".swiper-button-prev").mouseup(function () {
    $(".swiper2_btn_prev_color").css({ "transform": "scale(1, 1)" });
  });

  $(".swiper-button-next").mousedown(function () {
    $(".swiper2_btn_next_color").css({ "transform": "scale(1.2, 1.2)" });
  });
  $(".swiper-button-next").mouseup(function () {
    $(".swiper2_btn_next_color").css({ "transform": "scale(1, 1)" });
  });



  $(".minusimg").hide();
  $(".swiper-button-next").mouseenter(function () {
    $(".minusimg").show();
    $(".minusimg img").addClass("action");

  });

  $(".swiper-button-next").mouseleave(function () {
    $(".minusimg").hide();

  });

  $(".slide4 .swiper-button-next").click(function () {
    $(".slide_ctg div").removeClass("on");
    $(".slide_ctg div").next().addClass("on");
  });


  //section_4





  //section_7



  $(".txt_bottom ul li").mouseenter(function(){
    $(this).addClass("on").siblings().removeClass("on");
    $(this).find("a").addClass("on");
    $(this).siblings().find("a").removeClass("on");
    var Num = $(this).index();

    $(".section_7_imgbox > img").eq(Num).stop().fadeIn().siblings("img").stop().fadeOut();
    


  });


  $(".txt_bottom ul li:nth-child(1)").addClass("on");
  $(".txt_bottom ul li:nth-child(1) a").addClass("on");

  $(".section_7_imgbox img").eq(2).hide();
  $(".section_7_imgbox img").eq(3).hide();




  $(".section_7_txt ul li").mousedown(function(){
    $(this).css({"opacity" : "0.5"});
  });
  $(".section_7_txt ul li").mouseup(function(){
    $(this).css({"opacity" : "1"});
  });

//section_8





//section_9
$(".section_p2 .main_txt").mouseenter(function(){
  $(this).css({"opacity" : "0.5"});

});
$(".section_p2 .main_txt").mouseleave(function(){
  $(this).css({"opacity" : "1"});

});
$(".section_p2 .main_txt").mousedown(function(){
  $(this).css({"opacity" : "0.5"});
});

$(".section_p2 .main_txt").mouseup(function(){
  $(this).css({"opacity" : "1"});
});


var bottom_dark = $(".bottom_background").height();

$(".bottom_bg_dark").height(bottom_dark);
  //문서준비이벤트종료

});