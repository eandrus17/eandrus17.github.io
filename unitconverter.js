function unitconverter(x){
var x = document.getElementById("invalue")
var inunits = document.getElementById("inunits")
var outunits = document.getElementById("outunits")
var output;
  
 // inches to something else
 if  (inunits[0].checked && outunits[0].checked){
   output= x + " " + inunits;
 }
  else if (inunits=="inches"&& outunits=="feet"){
    output= x + " " + inunits + " = " + x/12 + " " + outunits;
  }
  else if (inunits=="inches"&& outunits=="yards"){
    output= x + " " + inunits + " = " + x/36 + " " + outunits;
  }
  else if (inunits=="inches"&& outunits=="miles"){
    output= x + " " + inunits + " = " + x/63360 + " " + outunits;
  }
  else if (inunits=="inches"&& outunits=="meters"){
    output= x + " " + inunits + " = " + x/39.37 + " " + outunits;
  }
  else if (inunits=="inches"&& outunits=="kilometers"){
    output= x + " " + inunits + " = " + x/39370.079 + " " + outunits;
  }
  
  // feet to something else
  if  (inunits=="feet" && outunits=="feet"){
   output= x + " " + inunits;
 }
  else if (inunits=="feet"&& outunits=="inches"){
    output= x + " " + inunits + " = " + x*12 + " " + outunits;
  }
  else if (inunits=="feet"&& outunits=="yards"){
    output= x + " " + inunits + " = " + x/3 + " " + outunits;
  }
  else if (inunits=="feet"&& outunits=="miles"){
    output= x + " " + inunits + " = " + x/5280 + " " + outunits;
  }
  else if (inunits=="feet"&& outunits=="meters"){
    output= x + " " + inunits + " = " + x/3.281 + " " + outunits;
  }
  else if (inunits=="feet"&& outunits=="kilometers"){
    output= x + " " + inunits + " = " + x/3280.84 + " " + outunits;
  }
  
  // yards to something else
  if  (inunits=="yards" && outunits=="yards"){
   output= x + " " + inunits;
 }
  else if (inunits=="yards"&& outunits=="inches"){
    output= x + " " + inunits + " = " + x*36 + " " + outunits;
  }
  else if (inunits=="yards"&& outunits=="feet"){
    output= x + " " + inunits + " = " + x*3 + " " + outunits;
  }
  else if (inunits=="yards"&& outunits=="miles"){
    output= x + " " + inunits + " = " + x/1760 + " " + outunits;
  }
  else if (inunits=="yards"&& outunits=="meters"){
    output= x + " " + inunits + " = " + x/1.094 + " " + outunits;
  }
  else if (inunits=="yards"&& outunits=="kilometers"){
    output= x + " " + inunits + " = " + x/1093.613 + " " + outunits;
  }
  
  // miles to something else
  if  (inunits=="miles" && outunits=="miles"){
   output= x + " " + inunits;
 }
  else if (inunits=="miles"&& outunits=="inches"){
    output= x + " " + inunits + " = " + x*63360 + " " + outunits;
  }
  else if (inunits=="miles"&& outunits=="feet"){
    output= x + " " + inunits + " = " + x*5280 + " " + outunits;
  }
  else if (inunits=="miles"&& outunits=="yards"){
    output= x + " " + inunits + " = " + x*1760 + " " + outunits;
  }
  else if (inunits=="miles"&& outunits=="meters"){
    output= x + " " + inunits + " = " + x*1609.344 + " " + outunits;
  }
  else if (inunits=="miles"&& outunits=="kilometers"){
    output= x + " " + inunits + " = " + x*1.609 + " " + outunits;
  } 
  
  // meters to something else
  if  (inunits=="meters" && outunits=="meters"){
   output= x + " " + inunits;
 }
  else if (inunits=="meters"&& outunits=="inches"){
    output= x + " " + inunits + " = " + x*39.37 + " " + outunits;
  }
  else if (inunits=="meters"&& outunits=="feet"){
    output= x + " " + inunits + " = " + x*3.281 + " " + outunits;
  }
  else if (inunits=="meter"&& outunits=="yards"){
    output= x + " " + inunits + " = " + x*1.094 + " " + outunits;
  }
  else if (inunits=="meters"&& outunits=="miles"){
    output= x + " " + inunits + " = " + x/1609.344 + " " + outunits;
  }
  else if (inunits=="meters"&& outunits=="kilometers"){
    output= x + " " + inunits + " = " + x/1000 + " " + outunits;
  } 
  
  // kilometers to something else
  if  (inunits=="kilometers" && outunits=="kilometers"){
   output= x + " " + inunits;
 }
  else if (inunits=="kilometers"&& outunits=="inches"){
    output= x + " " + inunits + " = " + x*39370.079 + " " + outunits;
  }
  else if (inunits=="kilometers"&& outunits=="feet"){
    output= x + " " + inunits + " = " + x*3280.84 + " " + outunits;
  }
  else if (inunits=="kilometers"&& outunits=="yards"){
    output= x + " " + inunits + " = " + x*1093.613 + " " + outunits;
  }
  else if (inunits=="kilometers"&& outunits=="miles"){
    output= x + " " + inunits + " = " + x/ 1.609 + " " + outunits;
  }
  else if (inunits=="kilometers"&& outunits=="kilometers"){
    output= x + " " + inunits + " = " + x/1000 + " " + outunits;
 
document.getElementById("outputvalue").innerHTML = output;
  }
}
