function unitconverter(x){
var x = document.getElementById("invalue").value
var inunits = document.getElementsByName("inunits").value
var outunits = document.getElementsByName("outunits").value
var output;
  
 // inches to something else
 if  (inunits[0].checked && outunits[0].checked){
   output= x + " " + inunits + " = " + x + " " + outunits;
 }
  else if (inunits[0].checked && outunits[1].checked){
    output= x + " " + inunits + " = " + x/12 + " " + outunits;
  }
  else if (inunits[0].checked && outunits[2].checked){
    output= x + " " + inunits + " = " + x/36 + " " + outunits;
  }
  else if (inunits[0].checked && outunits[3].checked){
    output= x + " " + inunits + " = " + x/63360 + " " + outunits;
  }
  else if (inunits[0].checked && outunits[4].checked){
    output= x + " " + inunits + " = " + x/39.37 + " " + outunits;
  }
  else if (inunits[0].checked && outunits[5].checked){
    output= x + " " + inunits + " = " + x/39370.079 + " " + outunits;
  }
  
  // feet to something else
  if  (inunits[1].checked && outunits[1].checked){
   output= x + " " + inunits + " = " + x + " " + outunits;
 }
  else if (inunits[1].checked && outunits[0].checked){
    output= x + " " + inunits + " = " + x*12 + " " + outunits;
  }
  else if (inunits[1].checked && outunits[2].checked){
    output= x + " " + inunits + " = " + x/3 + " " + outunits;
  }
  else if (inunits[1].checked && outunits[3].checked){
    output= x + " " + inunits + " = " + x/5280 + " " + outunits;
  }
  else if (inunits[1].checked && outunits[4].checked){
    output= x + " " + inunits + " = " + x/3.281 + " " + outunits;
  }
  else if (inunits[1].checked && outunits[5].checked){
    output= x + " " + inunits + " = " + x/3280.84 + " " + outunits;
  }
  
  // yards to something else
  if  (inunits[2].checked && outunits[2].checked){
   output= x + " " + inunits + " = " + x + " " + outunits;
 }
  else if (inunits[2].checked && outunits[0].checked){
    output= x + " " + inunits + " = " + x*36 + " " + outunits;
  }
  else if (inunits[2].checked && outunits[1].checked){
    output= x + " " + inunits + " = " + x*3 + " " + outunits;
  }
  else if (inunits[2].checked && outunits[3].checked){
    output= x + " " + inunits + " = " + x/1760 + " " + outunits;
  }
  else if (inunits[2].checked && outunits[4].checked){
    output= x + " " + inunits + " = " + x/1.094 + " " + outunits;
  }
  else if (inunits[2].checked && outunits[5].checked){
    output= x + " " + inunits + " = " + x/1093.613 + " " + outunits;
  }
  
  // miles to something else
  if  (inunits[3].checked && outunits[3].checked){
   output= x + " " + inunits + " = " + x + " " + outunits;
 }
  else if (inunits[3].checked && outunits[0].checked){
    output= x + " " + inunits + " = " + x*63360 + " " + outunits;
  }
  else if (inunits[3].checked && outunits[1].checked){
    output= x + " " + inunits + " = " + x*5280 + " " + outunits;
  }
  else if (inunits[3].checked && outunits[2].checked){
    output= x + " " + inunits + " = " + x*1760 + " " + outunits;
  }
  else if (inunits[3].checked && outunits[4].checked){
    output= x + " " + inunits + " = " + x*1609.344 + " " + outunits;
  }
  else if (inunits[3].checked && outunits[5].checked){
    output= x + " " + inunits + " = " + x*1.609 + " " + outunits;
  } 
  
  // meters to something else
  if  (inunits[4].checked && outunits[4].checked){
   output= x + " " + inunits + " = " + x + " " + outunits;
 }
  else if (inunits[4].checked && outunits[0].checked){
    output= x + " " + inunits + " = " + x*39.37 + " " + outunits;
  }
  else if (inunits[4].checked && outunits[1].checked){
    output= x + " " + inunits + " = " + x*3.281 + " " + outunits;
  }
  else if (inunits[4].checked && outunits[2].checked){
    output= x + " " + inunits + " = " + x*1.094 + " " + outunits;
  }
  else if (inunits[4].checked && outunits[3].checked){
    output= x + " " + inunits + " = " + x/1609.344 + " " + outunits;
  }
  else if (inunits[4].checked && outunits[5].checked){
    output= x + " " + inunits + " = " + x/1000 + " " + outunits;
  } 
  
  // kilometers to something else
  if  (inunits[5].checked && outunits[5].checked){
  output= x + " " + inunits + " = " + x + " " + outunits;
 }
  else if (inunits[5].checked && outunits[0].checked){
    output= x + " " + inunits + " = " + x*39370.079 + " " + outunits;
  }
  else if (inunits[5].checked && outunits[1].checked){
    output= x + " " + inunits + " = " + x*3280.84 + " " + outunits;
  }
  else if (inunits[5].checked && outunits[2].checked){
    output= x + " " + inunits + " = " + x*1093.613 + " " + outunits;
  }
  else if (inunits[5].checked && outunits[3].checked){
    output= x + " " + inunits + " = " + x/ 1.609 + " " + outunits;
  }
  else if (inunits[5].checked && outunits[4].checked){
    output= x + " " + inunits + " = " + x/1000 + " " + outunits;
  }
document.getElementById("outputvalue").innerHTML = output;
}
