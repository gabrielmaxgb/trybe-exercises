window.onload = function() {

    function setBackgroundColor(color) {
        let content = document.querySelector(".text");
        content.style.backgroundColor = color;
        localStorage.setItem("backgroundColor", color);
    }

    function setTextColor(color) {
        let content = document.querySelector(".text");
        content.style.color = color;
        localStorage.setItem("textColor", color);
    }

    let backgroundColorButtons = document.querySelectorAll("#background-color>.options>button");
    for (let count = 0; count < backgroundColorButtons.length; count+=1) {
        backgroundColorButtons[count].addEventListener("click", (event) => {
            setBackgroundColor(event.target.innerHTML);
        })
    }

    let textColorButtons = document.querySelectorAll("#text-color>.options>button");
    for (let count = 0; count < textColorButtons.length; count+=1) {
        textColorButtons[count].addEventListener("click", (event) => {
            setTextColor(event.target.innerHTML);
        })
    }

    function initialize() {
        let backgroundColor = localStorage.getItem("backgroundColor");
        if (backgroundColor) setBackgroundColor(backgroundColor);

        let textColor = localStorage.getItem("textColor");
        if (textColor) setTextColor(textColor);
    }

    initialize();
}