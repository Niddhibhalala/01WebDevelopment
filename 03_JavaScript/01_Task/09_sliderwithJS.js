let slide(n) = document.getElementsByClassName("banner")
let counter = 0
function showslider() {
    for (let i = 0; i < slider.length; i++) {
        Slider[i].style.display = "none"
    }
    slider[counter].style.display = "none"
    counter++;
    console.log("called", counter);
    setTimeout(slider, 2000);

}
slider()