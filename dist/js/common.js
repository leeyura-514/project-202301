$(function(){
  // 스크롤 down 시, 고정 메뉴
  $(window).scroll(() => {
    const curr = $(this).scrollTop();
    target = $('.sc-visual').offset().top;

    if (curr > target) {
      $('#header-area').addClass('fixed');

    } else {
      $('#header-area').removeClass('fixed');
    }
  })

  // 모바일 메뉴버튼
  $('.header-content.m-view .btn-menu').click(() => {
    $('#header-area').toggleClass('active');
    $('body').toggleClass('scroll-hidden');
  })

  // footer 관련사이트 아코디언
  const relOpen =  $('#footer-area .ico-open');

  relOpen.click(() => {
    $('.related-list').slideToggle();
    $('#footer-area').toggleClass('active');
  })

  // 모바일 메뉴 effect
  const menu = gsap.timeline({})
  menu.pause();

  menu.to('#m-gnb',{  //menu 실행 후의 상태
    opacity:1 
  })
  .from('#m-gnb li',{ //menu li 끝점 -> 시작점으로 효과
    opacity:0,
    y:20, 
    stagger:0.2
  })

  $('.btn-menu').click(function(e){ //메뉴버튼을 누르면
    e.preventDefault();
    menu.restart(); //재실행
  })
})