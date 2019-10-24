(function(){

      $(document).ready(function (){
            var servicesBlock = $('.services-block'),
                  servicesInfo = $('.services-info'),
                  myWorksInfo = $('.my-works-info'),
                  myWorksBlock = $('.my-works-block'),
                  contactInfo = $('.contact-info'),
                  input = $('input'),textarea = $('textarea'),
                  contactButton = $('.contact-button')
                  win = $(window),
                  windowHeight = win.height();
            win.scroll(function (){
                  var scrollPos = $(this).scrollTop(),
                        servicesBlockPos = servicesBlock.offset().top,
                        servicesInfoPos = servicesInfo.offset().top,
                        myWorksInfoPos = myWorksInfo.offset().top,
                        myWorksBlockPos = myWorksBlock.offset().top,
                        contactInfoPos = contactInfo.offset().top;
                  if (scrollPos >= servicesBlockPos - windowHeight){
                        servicesBlock.addClass('apperance');
                  }
                  if (scrollPos >= servicesInfoPos - windowHeight){
                        servicesInfo.addClass('emergence');
                  }
                  if (scrollPos >= myWorksInfoPos - windowHeight){
                        myWorksInfo.addClass('emergence');
                  }
                  if (scrollPos >= myWorksBlockPos - windowHeight){
                        myWorksBlock.addClass('sudden-appearance');
                  }
                  if (scrollPos >= contactInfoPos - windowHeight){
                        contactInfo.addClass('emergence');
                        input.addClass('input-animation');
                        textarea.addClass('input-animation');
                        contactButton.addClass('input-animation');
                  }
            });

            $('.hamb').click(function(){
                  if ($(this).attr('status') === 'false'){
                        $('.a-menu').css('display', 'block');
                        $('nav').addClass('hamb-animation');
                        $('.a-menu').addClass('hamb-opacity');
                        $(this).attr('status', 'true');
                        $('nav').removeClass('hamb-animation-back');
                        $('.a-menu').removeClass('hamb-opacity-back');
                  }else{
                        $('nav').addClass('hamb-animation-back');
                        $('.a-menu').addClass('hamb-opacity-back');
                        $('.a-menu').css('display', 'none');
                        $(this).attr('status', 'false');
                        $('nav').removeClass('hamb-animation');
                        $('.a-menu').removeClass('hamb-opacity');
                  }
            });
      })
})();