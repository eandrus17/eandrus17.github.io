function unitconverter(x){
var x = document.getElementById("invalue").value
var inunits = document.getElementsByName("inunits")
var outunits = document.getElementsByName("outunits")
var output;
  
 // inches to something else
 if  (inunits[0].checked && outunits[0].checked){
   output= x + " inches" + " = " + x + " inches";
 }
  else if (inunits[0].checked && outunits[1].checked){
    output= x + " inches" + " = " + x/12 + " feet";
  }
  else if (inunits[0].checked && outunits[2].checked){
    output= x + " inches" + " = " + x/36 + " yards";
  }
  else if (inunits[0].checked && outunits[3].checked){
    output= x + " inches" + " = " + x/63360 + " miles";
  }
  else if (inunits[0].checked && outunits[4].checked){
    output= x + " inches" + " = " + x/39.37 + " meters";
  }
  else if (inunits[0].checked && outunits[5].checked){
    output= x + " inches" + " = " + x/39370.079 + " kilometers";
  }
  
  // feet to something else
  if  (inunits[1].checked && outunits[1].checked){
   output= x + " feet" + " = " + x + " feet";
 }
  else if (inunits[1].checked && outunits[0].checked){
    output= x + " feet" + " = " + x*12 + " inches";
  }
  else if (inunits[1].checked && outunits[2].checked){
    output= x + " feet" + " = " + x/3 + " yards";
  }
  else if (inunits[1].checked && outunits[3].checked){
    output= x + " feet" + " = " + x/5280 + " miles";
  }
  else if (inunits[1].checked && outunits[4].checked){
    output= x + " feet" + " = " + x/3.281 + " meters";
  }
  else if (inunits[1].checked && outunits[5].checked){
    output= x + " feet" + " = " + x/3280.84 + " kilometers";
  }
  
  // yards to something else
  if  (inunits[2].checked && outunits[2].checked){
   output= x + " yards" + " = " + x + " yards";
 }
  else if (inunits[2].checked && outunits[0].checked){
    output= x + " yards" + " = " + x*36 + " inches";
  }
  else if (inunits[2].checked && outunits[1].checked){
    output= x + " yards" + " = " + x*3 + " feet";
  }
  else if (inunits[2].checked && outunits[3].checked){
    output= x + " yards" + " = " + x/1760 + " miles";
  }
  else if (inunits[2].checked && outunits[4].checked){
    output= x + " yards" + " = " + x/1.094 + " meters";
  }
  else if (inunits[2].checked && outunits[5].checked){
    output= x + " yards" + " = " + x/1093.613 + " kilometers";
  }
  
  // miles to something else
  if  (inunits[3].checked && outunits[3].checked){
   output= x + " miles" + " = " + x + " miles";
 }
  else if (inunits[3].checked && outunits[0].checked){
    output= x + " miles" + " = " + x*63360 + " inches";
  }
  else if (inunits[3].checked && outunits[1].checked){
    output= x + " miles" + " = " + x*5280 + " feet";
  }
  else if (inunits[3].checked && outunits[2].checked){
    output= x + " miles" + " = " + x*1760 + " yards";
  }
  else if (inunits[3].checked && outunits[4].checked){
    output= x + " miles" + " = " + x*1609.344 + " meters";
  }
  else if (inunits[3].checked && outunits[5].checked){
    output= x + " miles" + " = " + x*1.609 + " kilometers";
  } 
  
  // meters to something else
  if  (inunits[4].checked && outunits[4].checked){
   output= x + " meters" + " = " + x + " meters";
 }
  else if (inunits[4].checked && outunits[0].checked){
    output= x + " meters" + " = " + x*39.37 + " inches";
  }
  else if (inunits[4].checked && outunits[1].checked){
    output= x + " meters" + " = " + x*3.281 + " feet";
  }
  else if (inunits[4].checked && outunits[2].checked){
    output= x + " meters" + " = " + x*1.094 + " yards";
  }
  else if (inunits[4].checked && outunits[3].checked){
    output= x + " meters" + " = " + x/1609.344 + " miles";
  }
  else if (inunits[4].checked && outunits[5].checked){
    output= x + " meters" + " = " + x/1000 + " kilometers";
  } 
  
  // kilometers to something else
  if  (inunits[5].checked && outunits[5].checked){
  output= x + " kilometers" + " = " + x + " kilometers";
 }
  else if (inunits[5].checked && outunits[0].checked){
    output= x + " kilometers" + " = " + x*39370.079 + " inches";
  }
  else if (inunits[5].checked && outunits[1].checked){
    output= x + " kilometers" + " = " + x*3280.84 + " feet";
  }
  else if (inunits[5].checked && outunits[2].checked){
    output= x + " kilometers" + " = " + x*1093.613 + " yards";
  }
  else if (inunits[5].checked && outunits[3].checked){
    output= x + " kilometers" + " = " + x/1.609 + " miles";
  }
  else if (inunits[5].checked && outunits[4].checked){
    output= x + " kilometers" + " = " + x*1000 + " meters";
  }
document.getElementById("outputvalue").innerHTML = output;
}
