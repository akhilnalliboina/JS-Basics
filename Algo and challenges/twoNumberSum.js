function twoNumberSum(array, targetSum) {
    // Write your code here.
      let result=[]
      for(let i=0;i<array.length-1;i++){
          for(let j=i+1;j<array.length;j++){
          if(array[i]+array[j]==targetSum){
              result.push(array[i])
              result.push(array[j])
          }}
      } return result
      
  }
  
  // Do not edit the line below.
  exports.twoNumberSum = twoNumberSum;
  
  //Input: [3, 5, -4, 8, 11, 1, -1, 6]
  // output:10