$(function(){
  const $gnb = $('header > .container > nav > .gnb');
  const $lnb = $('header > .container > nav .lnb');
  const $bg_lnb = $('.bg_lnb');
  const $lnb_3 = $('header > .container > nav > .gnb > li:nth-child(3) > .lnb > li:nth-child(2) > a');
  const $lnb_4 = $('header > .container > nav > .gnb > li:nth-child(4) > .lnb > li:nth-child(1) > a');
  const $sub_on_3 = $('header > .container > nav .lnb > li > .sub_on_3');
  const $sub_on_4 = $('header > .container > nav .lnb > li > .sub_on_4');

  // header영역 자바스크립트
  $gnb.on('mouseenter', function(){
    $bg_lnb.stop().fadeIn(100);

    $lnb.stop().fadeIn(100);
  });

  $gnb.on('mouseleave', function(){
    $lnb.stop().fadeOut(50);
    $bg_lnb.stop().fadeOut(50);
  });

  $bg_lnb.on('mouseover', function(){
    $bg_lnb.stop().fadeIn(50);
    $lnb.stop().fadeIn(50);
  });

  $bg_lnb.on('mouseout', function(){
    $lnb.stop().fadeOut(50);
    $bg_lnb.stop().fadeOut(50);
  });

  // 서브페이지 클릭표시
  const $ring1 = $('.click-ring1>span');

    setInterval(function () {
        // 순차적으로 사라지게 함
        for (let i = 0; i < 3; i++) {
            $ring1.eq(i).delay((i + 3) * 100).fadeOut(600);
        }

        // 순차적으로 나타나게 함
        for (let i = 0; i < 3; i++) {
            $ring1.eq(i).delay((i + 1) * 100).fadeIn(600);
        }

    }, 1200);

  const $ring2 = $('.click-ring2>span');

    setInterval(function () {
        // 순차적으로 사라지게 함
        for (let i = 0; i < 3; i++) {
            $ring2.eq(i).delay((i + 3) * 100).fadeOut(600);
        }

        // 순차적으로 나타나게 함
        for (let i = 0; i < 3; i++) {
            $ring2.eq(i).delay((i + 1) * 100).fadeIn(600);
        }

    }, 1200);

  // lnb_3 서브페이지 알림
  $lnb_3.on('mouseover', function(){
    $sub_on_3.show();
  });
  $lnb_3.on('mouseout', function(){
    $sub_on_3.hide();
  });

  // lnb_4 서브페이지 알림
  $lnb_4.on('mouseover', function(){
    $sub_on_4.show();
  });
  $lnb_4.on('mouseout', function(){
    $sub_on_4.hide();
  });

  // section.banner 자바스크립트
  const $slide = $('section.banner>.slides>.slides-container>li');
  const $indicator = $('section.banner>.slides>.slides-pagination>li>a');
  const $btnPrev = $('section.banner>.slides>.slides-navigation.slides-prev');
  const $btnNext = $('section.banner>.slides>.slides-navigation.slides-next');

  let nowIdx = 0;

  const fadeFn = function(){
    $slide.filter('.on').stop().fadeOut(800).removeClass('on');

    $slide.eq(nowIdx).stop().fadeIn(800).addClass('on');

    $indicator.eq(nowIdx).parent().addClass('on').siblings().removeClass('on');
  };

  $indicator.on('click', function(evt){
    evt.preventDefault();

    nowIdx = $indicator.index(this);

    fadeFn();
  });

  // 이전버튼
  $btnPrev.on('click', function(evt){
    evt.preventDefault();

    if(nowIdx>0){
      nowIdx--;
    }else{
      nowIdx=7;
    }

    fadeFn();
  });

  // 다음버튼
  $btnNext.on('click', function(evt){
    evt.preventDefault();

    if(nowIdx<7){
      nowIdx++;
    }else{
      nowIdx=0;
    }

    fadeFn();
  });

  const $btnAuto = $('section.banner>.slides > .slides-auto');

  let intervalKey;

  $btnAuto.on('click', function(){
    
    if($(this).hasClass('pause')){
      // 재생
      clearInterval(intervalKey);
      $(this).removeClass('pause');
      
    }else{
      // 정지
      autoPlay();
      $(this).addClass('pause');
    }

  });

  // 자동재생
  const autoPlay = function(){
    intervalKey = setInterval(function(){

      if(nowIdx<7){
        nowIdx++;
      }else{
        nowIdx=0;
      }
  
      fadeFn();
    },3000);
  };

  $(window).on('load', function(){
    autoPlay();
  });

  // section.strength영역 자바스크립트
  $('section.strength').on('click', function(evt){
    evt.preventDefault();
  });

  // section.menu영역 자바스크립트
  const $menu_gnb = $('section.menu > article > .menu-gnb > li > a');
  const $menu_con = $('section.menu > article > .menu_con');

  let menuIdx = 0;

  $menu_gnb.on('click', function(evt){
    evt.preventDefault();

    menuIdx = $menu_gnb.index(this);

    $menu_gnb.eq(menuIdx).parent().addClass('on').siblings().removeClass('on');

    $menu_con.eq(menuIdx).show().siblings('.menu_con').hide();
  });

  $(window).on('load', function(){
    $menu_con.hide();

    $menu_con.filter('.on').show();
  });


  //section.franchise영역 자바스크립트
  const $thumb = $('.pagination>ul>li>a');

  console.log('$thumb=',$thumb);

  $thumb.on('click', function(evt){
    evt.preventDefault();

    const thumbname = $(this).attr('href');

    $('.screen img').eq(0).attr('src',thumbname);
  });

  // footer영역에 대한 자바스크립트
  $('footer>.footer-info>li>a').eq(0).on('click',function(evt){
    evt.preventDefault();
  });

  $('footer>.footer-info>li>a').eq(1).on('click',function(evt){
    evt.preventDefault();
  });
});