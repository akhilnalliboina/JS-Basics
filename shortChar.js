function findShort(s){
    arr= s.split(' ')
    console.log(arr)
    result=arr[0].length;
  
    for(i=0; i < arr.length;i++){
      if(result > arr[i].length){
         result=arr[i].length;
      }
      else {}
    }
    return result;
  }