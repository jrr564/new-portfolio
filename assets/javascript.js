$(function() {
    setTimeout(function(){
        showElement();
     }, 30000);

    function showElement() {
        $('projects').toggleClass('show');
    }
 });