// return masked string
function maskify(cc) {
    var result="";
    for (i=0; i<cc.length; i++){
      if (i<cc.length-4){
        result=result+"#";
      } else {
        result = result+ cc[i]
      }
    } return result;
  }

  maskify("akhildasd") //to hide the characters