function sumZero(arr){
    //declare two pointers
    var left=0,right=arr.length-1
    // check if pointer values match
    while(left<right){
    if(arr[right]+arr[left]===0){
        return [arr[left],arr[right]]
    } 
    if(arr[left]+arr[right]>0){
            right--;
        } else {left++}
    
}
}


sumZero([-4,-3,-2,-1,0,1,2,4,5]) --> [-2,2]