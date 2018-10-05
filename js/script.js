$(document).ready(function(){
  var count=0;
  $(".toggle").click(function(){
    if(count % 2 == 0){
      $(".toggle_div").css("height","250px");
      $(".toggle_div ul li").css({"display":"block", "float": "initial", "position": "relative", "left": "48px", "top": "40px"});
      $(".toggle_div ul li:last-child").css({"left":"16px","top":"14px"});
      count++;
    }
    else {
      $(".toggle_div").css("height","80px");
      $(".toggle_div ul li").css({"display":"none"});
      count++;
    }
    });
})
