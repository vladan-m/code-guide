$(window).load(function() {

  // Enable navigation menu open/close
  if($('.mob-menu-nav').length > 0) {
    $('body').on('click', '.mob-menu-trigger', function() {
      var $this = $(this),
          $pushMenu = $this.closest('.mob-menu').find('.mob-menu-nav'),
          $body = $this.closest('body');

      if($this.hasClass('active')) {
        $this.removeClass('active');
        $body.removeClass('mob-menu-toright');
        $pushMenu.removeClass('mob-menu-open');
      } else {
        $this.addClass('active');
        $body.addClass('mob-menu-toright');
        $pushMenu.addClass('mob-menu-open');
      }
    });
  }

  /* TO-DO: If needed implement smooth scroll
  if($(".smooth-scroll").length) {
    $(".smooth-scroll").click(function(smooth){
      smooth.preventDefault();
      var destination = 0,
          docHeight = $(document).height(),
          winHeight = $(window).height(),
          offsetTop = $(this.hash).offset().top;

      if(offsetTop > docHeight - winHeight){
        destination = docHeight - winHeight;
      }else{
        destination = offsetTop;
      }
      $('html,body').animate({scrollTop:destination}, 700, 'easeInCubic');
    });
  }
  */

});
