let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
  console.log(n)
}

function showSlides(n) {
  let i;
  let container = document.getElementById("slide");
  let slides = document.getElementsByClassName("mySlides");
  let careers = document.getElementsByClassName("careers")
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < slides.length; i++) {
    careers[i].style.opacity = 0.3;
    careers[i].classList.add('off');
  }
  careers[slideIndex-1].style.opacity = 1;
  careers[slideIndex-1].classList.remove('off');
  slides[slideIndex-1].style.display = "block";
  container.scrollIntoView()

}
