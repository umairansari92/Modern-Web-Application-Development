function bulbHandler(btnElement) {
  var bulbImag = document.getElementById("bulbOff");
  bulbImag.width = 300;
  bulbImag.height = 350;
  if(btnElement.innerHTML=="On"){
    bulbImag.src = "./images/Bulb On.png";
    btnElement.innerHTML="Off"
  }else{
    bulbImag.src = "./images/Bulb Off.webp";
    btnElement.innerHTML="On"
  }
}


