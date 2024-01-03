$(document).ready(function(){
    //문서준비이벤트시작


  const slide1 = new Swiper('.slide1', {
    slidesPerView: "auto",
    spaceBetween: -300,
    slidesPerView:1,
/*     effect: "coverflow",
 *//*     grabCursor: true,
 */
    /*     mousewheel: true,
 */    
      
/*       autoHeight: true,
 */    centeredSlides: true,
    loop: true,  // 슬라이드 반복 여부
    speed: 1300,  // 슬라이드 동작 속도
    autoplay: {
        delay: 2000,  // 슬라이드가 머무르는 시간, 5000=5초
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

    on: {
        slideChangeTransitionStart : function() {
            //$(".swiper-slide").css({'transform':'skewX(10deg)'});
            $(".swiper-slide").addClass("on");
        },
        slideChangeTransitionEnd : function() {
            //$(".swiper-slide").css({'transform':'skewX(0deg)'});
            $(".swiper-slide").removeClass("on");
        },

      


        
/*         on: {
            slideChangeTransitionStart : function() {
                $(".swiper-slide").animate({borderTopWidth:'+=20000px'},5000, );
            },
            slideChangeTransitionEnd : function() {
                $(".swiper-slide").animate({borderTopWidth:'==0px'},5000, );
            },
         */


        
    },






});

    //문서준비이벤트종료
    });