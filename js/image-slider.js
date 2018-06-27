//sticky header When the user scrolls the page, execute myFunction 
window.onscroll = function() { stickHeaderTop() };


var header = document.getElementById("nav-bar");

var sticky = header.offsetTop;

function stickHeaderTop() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}




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
} // Change image every 5 seconds


// *setInterval(showSlides, 8000)


var bookdisplay
var bookid = document.onmouseover('bookid');

function displayBookContent() {

} //