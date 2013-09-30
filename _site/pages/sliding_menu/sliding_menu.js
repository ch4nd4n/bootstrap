if(!app) var app = {
  lastScrollTop : 0,
  navEvents : function(dom){
    /* Show or hide navbar when scroll even occurs */
    var that = dom;
    $(window).scroll(function(event){
       var st = $(this).scrollTop();
       if (st < app.lastScrollTop){ //scroll up
        that.removeClass("out").addClass("in");
       } else { // scroll down
        that.removeClass("in").addClass("out");
       }
       app.lastScrollTop = st;
    });
  },
  showMenu : function(){
    $("#ui-side-menu").removeClass("out").addClass("in");
  },
  hideMenu : function(){
    $("#ui-side-menu").removeClass("in").addClass("out");
  },
  init : function(){
    app.navEvents($("#ui-navbar"));
  }
}
app.init();