// CUSTOM SCRIPT
// SELECTING SLDIER CONTAINER
let slider = document.querySelector(".slider");

// DECLARING VARIBALE FOR EACH SLIDE
let currentSlide = 0;
// TOTAL NUMBER OF SLIDE
let totalSlides = slider.querySelectorAll(".wrapper .left > div").length - 1;

// EVENT LISTENER FOR UP BUTTON
slider.querySelector(".controls .up").addEventListener("click", function(){
    if(currentSlide == 0){
        return;
    }
    currentSlide--;
    slider.querySelector(".wrapper .left div").style.marginTop = `${currentSlide*-100}vh`;
    slider.querySelector(".wrapper .right div").style.marginTop = `${(totalSlides-currentSlide)*-100}vh`;
});
//  EVENT LISTENER FOR DOWN BUTTON
slider.querySelector(".controls .down").addEventListener("click", function(){
    if(currentSlide == totalSlides){
        return;
    }
    currentSlide++;
    slider.querySelector(".wrapper .left div").style.marginTop = `${currentSlide*-100}vh`;
    slider.querySelector(".wrapper .right div").style.marginTop = `${(totalSlides-currentSlide)*-100}vh`;
});