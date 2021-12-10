var picker = document.getElementsByClassName("saving-picker")[0];
var color;
var colors = {};


function convertColor(color) {
   /* Check for # infront of the value, if it's there, strip it */
   if(color.substring(0,1) == '#') {
      color = color.substring(1);
   }
   var rgbColor = {};
   /* Grab each pair (channel) of hex values and parse them to ints using hexadecimal decoding */
   rgbColor.R = parseInt(color.substring(0,2),16);
   rgbColor.G = parseInt(color.substring(2,4),16);
   rgbColor.B = parseInt(color.substring(4), 16);
   return rgbColor;
}

function findResult() {
   color = picker.value;
   var color2 = convertColor(color);
   Red = Math.floor(color2.R / 10);
   Green = Math.floor(color2.G / 10);
   Blue = Math.floor(color2.B / 10);
   var result = `Red:${Red}, Green:${Green}, Blue:${Blue}.`;
   return result;
}

function next() {
   document.getElementsByClassName("saving-result")[0].textContent = findResult();
   document.getElementsByClassName("saving-nameinput")[0].style.display = "block";
   document.getElementsByClassName("saving-save")[0].style.display = "block";
   localStorage.setItem("showSuceedText", false);
   updateSuceedText();
}

function saveColor() {
   if (document.getElementsByClassName("saving-nameinput")[0].value !== "") {
      localStorage.setItem(document.getElementsByClassName("saving-nameinput")[0].value, findResult());
      localStorage.setItem("showSuceedText", true);
      location.reload();
   }
   else {
      document.getElementsByClassName("saving-nameinput")[0].placeholder = "Please type a name.";
   }  
}

function findColor() {
   if (document.getElementsByClassName("request")[0].value !== "") {
      if (localStorage.getItem(document.getElementsByClassName("request")[0].value) !== null) {
         document.getElementsByClassName("result")[0].textContent = localStorage.getItem(document.getElementsByClassName("request")[0].value);
      }
   }
   else {
      document.getElementsByClassName("request")[0].placeholder = "Please type a name.";
   }
}

function updateSuceedText() {
   if (localStorage.getItem("showSuceedText") == "true") {
      document.getElementsByClassName("saving-suceedtext")[0].style.display = "block";
   }
   else {
      document.getElementsByClassName("saving-suceedtext")[0].style.display = "none";
   }
}
updateSuceedText();


"нащо ви його купили якщо ви з ним не розмовляете"