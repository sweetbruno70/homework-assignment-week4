var startButton = documentQuerySelector ("#start-button");

startButton.addEventListener("click", function(){
    documentQuerySelector("#begin-block").setAttribute("class","hide")
    documentQuerySelector("#quiz-block").setAttribute("class", "");
}
);