$(function() {
  $(".toggle").on("click", function(){
    if($(".item").hasClass("active")){
      $(".item").removeClass("active");
      }
    else{
      $(".item").addClass("active");
    }
  })
});

const faqs = document.querySelectorAll(".faq");

faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    faq.classList.toggle("active");
  })
})