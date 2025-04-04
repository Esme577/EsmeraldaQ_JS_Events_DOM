//event triggered when page is fully loaded
//document.addEventListener("DOMContentLoaded", function(){
//    let onLoadElemnt = document.getElementById("onload");
//   onLoadElemnt.innerHTML = "<h1> I loaded because the DOM was fully rendered</h1>"
//}
//)
//keyevent
//let directionElement = document.getElementById("direction");
//event triggers when a key is pressed
//document.addEventListener("keydown", function (e){
//    directionElement.innerHTML = `The key you presssed is ${e.code}`
//})

//clickevent

//let clickMeElement = document.getElementById("clickMe");
//document.addEventListener("click", function (e){

//    clickMeElement.innerHTML = "<h1> you have clicked me!/h1>"
//})

//background random colorchange

//function changeinBackgroundColor(){
//    let RandomRGB = ` rgb(${Math.floor(Math.random() * 256)},
//    ${Math.floor(Math.random() * 256)},
//    ${Math.floor(Math.random() * 256)})`; // there are 3 because there are red blue yellowand 256 becasue each have that amount of possibilities
//    document.body.style.backgroundColor = RandomRGB;

//    document.body.style.backgroundColor = RandomRGB;
//}
//let randomColorBtnElement = document.getElementById("randomColorBtn");
//randomColorBtnElement.addEventListener("click", changeinBackgroundColor);


//classList Toggle Demo 
//function changeBtnStyle() {
//    const btn = document.querySelector(".cool-btn")
//    btn.classList.toggle("glow"); // Toggles glow effect
//  }

//Dark Mode (Exercise)
function darkmodetheme() {
    const element = document.body;
    const btn = document.querySelector(".theme-btn")
    element.classList.toggle("darkmode"); // Toggles darktheme effect 

   }
