//event triggered when page is fully loaded
document.addEventListener("DOMContentLoaded", function(){
    let onLoadElemnt = document.getElementById("onload");
    onLoadElemnt.innerHTML = "<h1> I loaded because the DOM was fully rendered</h1>"
}
)
//keyevent
let directionElement = document.getElementById("direction");
//event triggers when a key is pressed
document.addEventListener("keydown", function (e){
    directionElement.innerHTML = `The key you presssed is ${e.code}`
})

//clickevent

let clickMeElement = document.getElementById("clickMe");
document.addEventListener("click", function (e){

    clickMeElement.innerHTML = "<h1> you have clicked me!/h1>"
})
