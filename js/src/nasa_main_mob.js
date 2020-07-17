// nasa_main_mob.js

(function($){

  // gnbMob menu 아코디언 기능
  var gnbMob = $('.gnb_mob_domain');
  var gnbMobDt = gnbMob.find('dt');
  var gnbMobBtn = gnbMobDt.children('button');

  gnbMobBtn.on('click', function(e){
  e.preventDefault(); 

  var myT = $(this);
  var thisNext = myT.parent('dt').next('dd');
  var thisNextState = thisNext.css('display') == 'none';

    if(thisNextState){
    thisNext.siblings('dd').stop().slideUp(500);
    thisNext.stop().slideDown(500);
    }else{
      thisNext.stop().slideUp(500);
    }

    var myTinI = myT.children('i');
    var otherTinI = myT.parent('dt').siblings('dt').find('i');
  
      if(thisNextState){
        myTinI.css({'transform':'rotate(180deg)', 'transition':'all 300ms ease'});
        otherTinI.removeAttr('style');
      }else{
        myTinI.removeAttr('style');
      }
  });

  // gnbMob 메뉴버튼 클릭 시 menu 토글
  var gnb = $('#gnb_mob_btn');
  var gnbArea = $('#gnb_mob_area');

  gnb.on('click', function(e){
    e.preventDefault();
    gnbArea.toggle('fade', 500)
  })
  
})(jQuery);