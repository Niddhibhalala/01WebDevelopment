let slideData = document.getElementsByClassName("banner")
let counter = 0
function slide() {
    for (let i = 0; i < slide.length; i++) {
        slide[i].style.display = "none"
    }
    slide[counter].style.display = "block"
    counter++;
    console.log("called", counter);
    setTimeout(slide, 2000);
}
slide()

