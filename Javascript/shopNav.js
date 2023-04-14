$(function() {
  $(".toggle").on("click", function(){
    if($(".item").hasClass("open")){
      $(".item").removeClass("open");
      }
    else{
      $(".item").addClass("open");
    }
  })
});