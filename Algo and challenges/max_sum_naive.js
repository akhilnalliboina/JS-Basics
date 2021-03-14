function maxSubarraySum(arr, num) {
  if ( num > arr.length){
    return null;
  }
  var max = -Infinity;
  var sum=0
  for(var i=0; i<num;i++){
    sum+=arr[i]
  }
  for(var j=0;j<arr.length-num+1;j++){
    sum=sum+arr[j+num]-arr[j]
    if (sum>max){
      max=sum;
    }
  }
  return max;
}

maxSubarraySum([2,6,9,2,1,8,5,6,3],3)


