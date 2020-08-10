function comp(array1, array2){
    //your code here
    flag=0;
    if (array2==null || array1==null){
       return false
    } else if (array2.length != array1.length) {
      return false
    } else {
      return array1.map(x=>x*x).sort().toString()==array2.sort().toString()
    }
    
  }