function chunk(array,size){
    
    var newArray=[];
    let index=0;
    while (index < array.length){
        newArray.push(array.slice(index, index+size));
        index+=size;
    }
    return newArray;
}




chunk([1,2,3,4,5,6,7,8,9], 3);