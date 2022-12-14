/*
    Author: Ritchie Yapp
    Date: 7 August 2022
    Diploma in Infocomm Security Management AY22/23
*/
var myScrollFunc = function() {
  var reveals = document.getElementsByClassName("sect");
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 250;
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
};


window.addEventListener("scroll", myScrollFunc);