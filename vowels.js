function findVowels(abc) {
    
    var count=0;
    var checker= ['a','e','i','o','u']
  for(var car of abc.toLowerCase()){
     if(car.includes(checker)){
         count++;
     }
return console.log("vowel count is: ", count)
  }
}
