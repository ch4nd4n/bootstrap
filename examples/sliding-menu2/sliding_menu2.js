if(!app) var app = {
  viewport : $("#ui-viewport"),
  menu : {
    toggleLeft : function(){
      if(app.viewport.hasClass("left")){
        app.viewport.removeClass("left right");
      } else {
        app.viewport.addClass("left");
      }
    },
    toggleRight : function(){
      if(app.viewport.hasClass("right")){
        app.viewport.removeClass("left right");
      } else {
        app.viewport.addClass("right");
      }
    }
  }
}
$(document).ready(function(){
  console.log("all ready");
  $(".ui-left-menu").css("height", screen.availHeight + 'px')
  $(".ui-right-menu").css("height", screen.availHeight + 'px');
  $(".ui-main-content").css("height", screen.availHeight + 'px');
});