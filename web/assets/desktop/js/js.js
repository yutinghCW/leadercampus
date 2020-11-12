$(function(){
 
//選單切換，套版後此段刪除--start
//登入後nav加class" loginnav"，
  /*
  $(".mainmenu li.loginbtn, .mainmenu li.loginmenu").click(function() {
      $("nav").toggleClass("loginnav");
      return false;
  });
  */
//選單切換，套版後此段刪除--end


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


  /*
  $("a.favorite").click(function() {
      $(this).toggleClass("on");
      return false;
  });
  */



  $(".slider").click(function() {
      $(this).toggleClass("show");
      $(this).parent(".bar").siblings(".intro").toggleClass("show").slideToggle();
      return false;
  });

  $('.anchormenu a').on("click",(function(){
    var golink = $(this).attr("href");    
    $("html,body").animate({scrollTop:$(golink).offset().top - 0},800);
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
            $this.addClass('active').siblings('.active').removeClass('active');
            $(_clickTab).stop(false, true).fadeIn().siblings().hide(); 
            return false;
        }).find('a').focus(function(){
            this.blur();
        });
    }); 

})