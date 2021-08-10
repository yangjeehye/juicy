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

  // footer영역에 대한 자바스크립트
  $('footer>.footer-info>li>a').eq(0).on('click',function(evt){
    evt.preventDefault();
  });

  $('footer>.footer-info>li>a').eq(1).on('click',function(evt){
    evt.preventDefault();
  });
});