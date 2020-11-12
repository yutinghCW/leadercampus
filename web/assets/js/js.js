$(function(){
  
    $(window).scroll(function(){

      if(window.pageYOffset > 100){
       $(".gotop").show();
      }else{
       $(".gotop").hide();
      }

    }).scroll();

  $(".gotop").click(function(){
    $("html,body").animate({scrollTop:0},500);
    return false;
  });


  $("#smenu").click(function() {
      $("html, body").toggleClass("active");
      //srhbtn off
      $(".srhon.srhblock").toggleClass("srhon").slideToggle();
      return false;
  });

  $(".xmenu").click(function() {
      $("#smenu").trigger( "click" );
      return false;
  });

  /*
  $("a.favorite").click(function() {
      $(this).toggleClass("on");
      return false;
  });
  */

  $("#srhbtn").click(function() {
      $(".srhblock").toggleClass("srhon").slideToggle();

      if($(".srhblock").hasClass("srhon")){
        $("body").append("<div class='sover'></div>");
      }else{
        $(".sover").hide();
      }
      //smenu off
      $("html, body").removeClass("active");
      return false;
  });


  $(".mainmenu >li>a.first").click(function() {
    $(this).parent().toggleClass("on").find(".secondmenu").slideToggle();
      return false;
  });

  $(".slider").click(function() {
      $(this).toggleClass("show");
      $(this).parent(".bar").siblings(".intro").toggleClass("show").slideToggle();
      return false;
  });

  $('.anchormenu a').on("click",(function(){
    var golink = $(this).attr("href");    
    $("html,body").animate({scrollTop:$(golink).offset().top - 60},800);
    return false;
  }));


    //字體大小功能
    var $fz = $('.fontSize');
    var fzLevel = 0;
    var fzClass = 'fz' + fzLevel;

    $fz.click(function () {
        fzLevel < 2 ? fzLevel++ : fzLevel = 0;
        fzClass = 'fz' + fzLevel;
        $('.fzp').attr('class', 'fzp');
        $('.fzp').addClass(fzClass);
        return false;
    });

    //tabmenu
    var _showTab = 0;
    $('.abgne_tab').each(function(){
        var $tab = $(this);
        var $defaultLi = $('ul.tabs li', $tab).eq(_showTab).addClass('active');
        $($defaultLi.find('a').attr('href')).siblings().hide();
  
        $('ul.tabs li', $tab).click(function() {
            var $this = $(this),
                _clickTab = $this.find('a').attr('href');
                console.log("aaa");
            $this.addClass('active').siblings('.active').removeClass('active');
            $(_clickTab).stop(false, true).fadeIn().siblings().hide(); 
            return false;
        }).find('a').focus(function(){
            this.blur();
        });
    }); 

})