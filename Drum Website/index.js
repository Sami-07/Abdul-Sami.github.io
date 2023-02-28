let len = document.querySelectorAll(".drum").length;

for (let i = 0; i < len; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        let ClickenBtn = this.innerHTML;
        selection(ClickenBtn)
        Animate(ClickenBtn)
    }
    )
}

for (let i = 0; i < len; i++) {
    document.addEventListener("keydown", function (event) {
        let btnpressed = event.key;
        selection(btnpressed)
        Animate(btnpressed)
    })
}



function selection(event) {
    switch (event) {
        case "w":
            myaudio = new Audio("sounds/tom-1.mp3")
            myaudio.play();
            break;
        case "a":
            myaudio = new Audio("sounds/tom-2.mp3")
            myaudio.play();
            break;
        case "s":
            myaudio = new Audio("sounds/tom-3.mp3")
            myaudio.play();
            break;
        case "d":
            myaudio = new Audio("sounds/tom-4.mp3")
            myaudio.play();
            break;
        case "j":
            myaudio = new Audio("sounds/snare.mp3")
            myaudio.play();
            break;
        case "k":
            myaudio = new Audio("sounds/crash.mp3")
            myaudio.play();
            break;
        case "l":
            myaudio = new Audio("sounds/kick-bass.mp3")
            myaudio.play();
            break;

        default:
            break;
    }
}
function Animate(e) {
    let classname = "." + e
    let clicked = document.querySelector(classname);
    clicked.classList.add("pressed");
    setTimeout(function () {
        clicked.classList.remove("pressed")
    }, 100)
}