function isPrime(num) {
    //TODO
      if(num>1){
      for(var i=2;i<=Math.sqrt(num);i++){
         if (num%i==0){return false}
        } return true
    } else {return false}
  }