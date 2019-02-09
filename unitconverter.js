function unitconverter(x){
var x = document.getelementbyid("invalue")
var inunits = document.document.getelementbyid("inunits")
var outunits = document.getelementbyid("outunits")
var output;
  
 // inches to something else
 if  (inunits=="inches" && outunits=="inches"){
   output= x + " " + inunits;
 }
  else if (inunits=="inches"&& outunits=="feet"){
    output= x + " " + inunits + " = " + x/12 + " " + outunits;
  }
  else if (inunits=="inches"&& outunits=="yards"){
    output= x + " " + inunits + " = " + x/36 + " " + outunits;
  }else if (inunits=="inches"&& outunits=="miles"){
    output= x + " " + inunits + " = " + x/63360 + " " + outunits;
  }else if (inunits=="inches"&& outunits=="meters"){
    output= x + " " + inunits + " = " + x/39.37 + " " + outunits;
  }else if (inunits=="inches"&& outunits=="kilometers"){
    output= x + " " + inunits + " = " + x/39370.079 + " " + outunits;
  }
  // feet to something else
  
  
  
  }
