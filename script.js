document.addEventListener("DOMContentLoaded", function (){
    document.getElementById("fcbk").onmouseover = function() {mouseOver()};
    document.getElementById("fcbk").onmouseout = function() {mouseOut()};
    
    function mouseOver() {
      document.getElementById("fcbk").style.color = "#1873eb" ;
    }
    
    function mouseOut() {
      document.getElementById("fcbk").style.color = "white";
    }
    document.getElementById("insta").onmouseover = function() {mouseOver1()};
    document.getElementById("insta").onmouseout = function() {mouseOut1()};
    
    function mouseOver1() {
      document.getElementById("insta").style.color = "#a8387d";
    }
    
    function mouseOut1() {
      document.getElementById("insta").style.color = "white";
    }

    document.getElementById("twt").onmouseover = function() {mouseOver2()};
    document.getElementById("twt").onmouseout = function() {mouseOut2()};
    
    function mouseOver2() {
      document.getElementById("twt").style.color = "#259df2";
    }
    
    function mouseOut2() {
      document.getElementById("twt").style.color = "white";
    }
})