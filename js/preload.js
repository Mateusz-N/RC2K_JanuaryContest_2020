function turnButtonRed(button){
    button.getElementsByClassName("leftArrow")[0].src = "../../resources/navlefthover.png";
    button.getElementsByClassName("rightArrow")[0].src = "../../resources/navrighthover.png";
    button.getElementsByTagName("span")[0].style.color = 'red';
}

function turnButtonWhite(button){
    button.getElementsByClassName("leftArrow")[0].src = "../../resources/navleft.png";
    button.getElementsByClassName("rightArrow")[0].src = "../../resources/navright.png";
    button.getElementsByTagName("span")[0].style.color = 'yellow';
}