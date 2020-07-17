// nasa_main.js

(function($){

  //========== #headBox(gnb) ======================
  var gnb = $('#gnb');
  var gnbDl  = gnb.find('dl');
  var gnbTitle = gnb.find('dt');
  var gnbTitleLink = gnbTitle.children('a');
  var gnbContent = gnb.find('dd');
  var gnbConLink  = gnbContent.find('a');

  gnbContent.hide();

  gnbTitleLink.on('mouseenter focus', function(){
    $(this).parentsUntil('ul').siblings('li').find('dd').stop().slideUp();
    $(this).parent('dt').next('dd').stop().slideDown();
  });

  gnb.on('mouseleave', function(){
    gnbContent.stop().slideUp();
  });

  gnbContent.find('a').eq(-1).on('blur', function(){
    gnbContent.stop().slideUp();
  });

  gnbDl.on('mouseenter', function(){
    gnbTitle.removeClass('action');
    $(this).find('dt').addClass('action');		
  });

  gnbDl.on('mouseleave', function(){
    $(this).find('dt').removeClass('action');		
  });

  //========== #headBox 스크롤 시 사라짐======================

  //========== #topicBox company_title fadeIn/Out ========
  var headBox = $('#headBox')
  var headOffset = headBox.offset().top;

  var companyT = $('.company_title');
  var companyOffset = companyT.offset().top;

  $(window).on('scroll', function(e){
    e.preventDefault();

    var wScroll = $(this).scrollTop();
    if(headOffset < wScroll){ headBox.fadeOut(1000);
    }else{
      headBox.show();
    }
  });


  //========== #topicBox img_slide ======================
  var topicBtnArea =$('.topic_button');
	var topicBtn = topicBtnArea.children('button');

	var topicSlide = $('.topic_slide_box');
	var topicUl   = topicSlide.find('ul');
	var topicLi   = topicUl.find('li');

	var mvLength = 1;

	var topicLiLast = topicLi.eq( (mvLength * -1) -1 ).nextAll('li');
  topicUl.prepend(topicLiLast);

  var topFirstSize = topicLi.eq(1).outerWidth(true) * mvLength;
  
  var thisOk = true;

  topicBtn.on('click', function(e){
    e.preventDefault();
    var thisIt = $(this)[0];
    var nextBtn = topicBtnArea.children('.next')[0];	
    if(thisIt === nextBtn && thisOk){

      thisOk = false;
      topicUl.stop().animate({left: -topFirstSize + 'px'}, function(){

        topicLi.eq(mvLength).prevAll('li').appendTo(topicUl);
        topicUl.css({left:0});
        topicLi   = topicUl.find('li');
        thisOk = true;
      });

    }else if(thisOk){
      thisOk = false;
      topicUl.stop().animate({left:topFirstSize + 'px'}, function(){
        topicLi.eq((mvLength * -1) -1).nextAll().prependTo(topicUl);
        topicUl.css({left:0});
        topicLi   = topicUl.find('li');
        thisOk= true;
      });
    }

    
  });

})(jQuery);