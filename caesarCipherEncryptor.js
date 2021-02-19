function caesarCipherEncryptor(string, key) {
    // Write your code here.
      // check if key is greater that 26, then use modulus to find reminder
      // check if it is exceding 'z'
         // then start from 'a'
      // find the unicode using charCodeAt
      // increment by 2
      // from the charCode find the char
      // return the string
      let result='';
      key=key%26;
      for(let i=0;i<string.length;i++){
          result+=((string.charCodeAt(i)+key)>('z'.charCodeAt(0)))?
              String.fromCharCode((((string.charCodeAt(i))+key)%('z'.charCodeAt(0)))+ ('a'.charCodeAt(0)-1)): 
          String.fromCharCode((string.charCodeAt(i))+key);
  }
  return result}
  
  // Do not edit the line below.
  exports.caesarCipherEncryptor = caesarCipherEncryptor;
  
  // Test case: {"string": "xyz", "key": 2} => output: "zab"