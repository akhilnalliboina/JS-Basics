const binaryArrayToNumber = arr => {
    result=0
    arr1=arr.reverse();
    for (i=0;i<arr.length;i++){
      if(arr1[i]){
        result=result+ 2**i
      }
    } return result
  };