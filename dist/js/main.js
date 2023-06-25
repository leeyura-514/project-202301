$(function () {
  
  /**
   * 메인비주얼 슬라이드 
   * @version 1.0.0
   * @since 2023-4-20
   * @author 이유라 
   * @memo 
   */
  
  var mainSlide = new Swiper(".sc-visual .swiper", {
    loop: true,
    // autoplay: {
    //   delay: 5000,
    //   disableOnInteraction: false,
    // },
    pagination: {
      el: ".sc-visual .swiper-pagination",
      clickable : true,  // 버튼 클릭 여부
    },
    keyboard: true,
  });
  
  /**
   * 비디오 재생
   * @version 1.0.0
   * @since 2023-4-27
   * @author 이유라 
   * @memo 
   */
  $('.sc-feature .btn-pause').click(function(e){
    e.preventDefault();
    $('.vision-video').addClass('active');
    $('.vision-video').find('video')[0].pause();
  });

  $('.sc-feature .btn-play').click(function(e){
    e.preventDefault();
    $('.vision-video').removeClass('active');
    $('.vision-video').find('video')[0].play();
  });

})
   
   
   