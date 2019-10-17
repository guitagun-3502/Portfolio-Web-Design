(function(){

      $(document).ready(function (){
            var servicesBlock = $('.services-block'),
                  servicesInfo = $('.services-info'),
                  myWorksInfo = $('.my-works-info'),
                  win = $(window),
                  windowHeight = win.height();
            win.scroll(function (){
                  var scrollPos = $(this).scrollTop(),
                        servicesBlockPos = servicesBlock.offset().top,
                        servicesInfoPos = servicesInfo.offset().top,
                        myWorksInfoPos = myWorksInfo.offset().top;
                  if (scrollPos >= servicesBlockPos - windowHeight){
                        servicesBlock.addClass('apperance');
                  }
                  if (scrollPos >= servicesInfoPos - windowHeight){
                        servicesInfo.addClass('emergence');
                  }
                  if (scrollPos >= myWorksInfoPos - windowHeight){
                        myWorksInfo.addClass('emergence');
                  }
            });
      })

})();