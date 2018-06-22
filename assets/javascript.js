// For a smooth scroll
$('a[href*="#"]:not([href="#"]):not([href="#show"]):not([href="#hide"])').click(
  function() {
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
      if (target.length) {
        $("html,body").animate(
          {
            scrollTop: target.offset().top
          },
          1200
        );
        return false;
      }
    }
  }
);

//button delay
$(document).ready(function() {
  $(".item")
    .delay(3000)
    .fadeIn("slow");
});

// When the user scrolls the page, execute myFunction
window.onscroll = function() {
  myFunction();
};

// Get the header
var header = document.getElementById("myHeader");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

$(document).ready(function() {
  $(".item")
    .delay(1000)
    .fadeIn("slow");
});
