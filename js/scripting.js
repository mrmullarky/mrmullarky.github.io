$(document).ready(function(){
    var div1 = $('#welcome-section').offset().top;
    var div2 = $('#about').offset().top;
    var div3 = $('#projects').offset().top;
    var div4 = $('#connect').offset().top;

    $(document).scroll(function(){
        var scrollPos = $(document).scrollTop();
        if(scrollPos >= div1 && scrollPos < div2){
            $('#navbar').css("background-color", "#04a343");
        } else if(scrollPos >= div2 && scrollPos < div3){
            $('#navbar').css("background-color", "#FFC0CB");
        } else if(scrollPos >= div3 && scrollPos < div4){
            $('#navbar').css("background-color", "#fff");
        } else if(scrollPos >= div4) {
            $('#navbar').css("background-color", '#f48f42');
        }
    });
});

function myFunc() {
    var x = document.getElementById("navbar");
    if (x.className === "navbar") {
      x.className += " responsive";
    } else {
      x.className = "navbar";
    }
  }