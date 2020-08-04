function squareDigits(num){
    var arr= Array.from(String(num));
   var result="";
    for (char of arr) {
      result= result+ (char*char);
    }
 
 return parseInt(result);  
 }