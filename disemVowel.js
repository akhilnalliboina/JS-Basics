function disemvowel(str) {
    result=''
    vowel =['a','e','i','o','u', 'A', 'E', 'I', 'O', 'U']
    for(char of str.split("")){
      if(!vowel.includes(char)){
        result=result+char
      }}
    return result;
  }