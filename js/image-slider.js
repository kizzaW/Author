var slideIndex = 0;
var slides = document.getElementsByClassName("Slides");

function showSlides() {

    slideIndex = slideIndex + 1;

    if (slideIndex >= slides.length) {
        slideIndex = 0;
    }

    slides[slideIndex].classList.add('show')
    slides[slideIndex].classList.remove('hide')

    for (var otherPanelIndexes = 0; otherPanelIndexes < slides.length; otherPanelIndexes++) {

        if (otherPanelIndexes !== slideIndex) {
            slides[otherPanelIndexes].classList.remove('show');
            slides[otherPanelIndexes].classList.add('hide');
        }
    }
} // Change image duration 
setInterval(showSlides, 8000)



function popup() {
    var popup =

        document.getElementByClassName("popup");
    popup.classList.toggle("show");
}