$(document).ready(function(){
    var div1 = $('#welcome-section').offset().top;
    var div2 = $('#about').offset().top;
    var div3 = $('#projects').offset().top;
    var div4 = $('#connect').offset().top;

    if(window.matchMedia('(max-width: 800px)').matches){
        $(document).scroll(function(){
            var scrollPos = $(document).scrollTop();
            if(scrollPos >= div1 && scrollPos < div2){
                $('#navbar').css("background-color", "rgb(106, 181, 101, 1)");
            } else if(scrollPos >= div2 && scrollPos < div3){
                $('#navbar').css("background-color", "rgb(122, 211, 116, 1)");
            } else if(scrollPos >= div3 && scrollPos < div4){
                $('#navbar').css("background-color", "rgb(255, 255, 255, 1)");
            } else if(scrollPos >= div4) {
                $('#navbar').css("background-color", '#f48f42');
            }
        });
    } else {
        $(document).scroll(function(){
            var scrollPos = $(document).scrollTop();
            if(scrollPos >= div1 && scrollPos < div2){
                $('#navbar').css("background-color", "rgb(106, 181, 101, 0.5)");
            } else if(scrollPos >= div2 && scrollPos < div3){
                $('#navbar').css("background-color", "rgb(122, 211, 116, 0.5)");
            } else if(scrollPos >= div3 && scrollPos < div4){
                $('#navbar').css("background-color", "rgb(255, 255, 255, 0.5)");
            } else if(scrollPos >= div4) {
                $('#navbar').css("background-color", '#f48f42');
            }
        });
    }


});

loadNav = () => {
    var x = document.getElementById("navbar");
    if (x.className === "navbar") {
      x.className += " responsive";
    } else {
      x.className = "navbar";
    }
  }