function findVowels(abc) {
    
    var count=0;
    var checker= ['a','e','i','o','u']
  for(var car of abc.toLowerCase()){
     if(checker.includes(car)){
         count++;
     }
return console.log("vowel count is: ", count)
  }
}
