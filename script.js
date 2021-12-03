var picker = document.getElementsByClassName("picker")[0];
var nextButton = document.getElementsByClassName("continue")[0];
var color;

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

function next() {
   color = picker.value;
   var color2 = convertColor(color);
   Red = Math.floor(color2.R / 10);
   Green = Math.floor(color2.G / 10);
   Blue = Math.floor(color2.B / 10);
   var result = `Red:${Red}, Green:${Green}, Blue:${Blue}.`;
   alert(result);
}