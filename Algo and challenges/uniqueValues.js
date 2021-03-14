function countUniqueValues(arr){
    // add whatever parameters you deem necessary - good luck!
    var count=0
    if(arr==[]){
        return 0
    } else {
        for(var i=0; i<arr.length;i++){
            if(arr[i]-arr[i+1]!==0){
                count++;
            }
        } return count
    }
  }