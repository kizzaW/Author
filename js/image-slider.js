var slideIndex = 0;

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("Slides");
    for (i = 0; i < slides.length; i++) {
        slides[i].classList.remove('show')
        slides[i].classList.add('hide')
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].classList.add('show')
    slides[slideIndex - 1].classList.remove('hide')

} // Change image every 5 seconds
setInterval(showSlide, 5000)