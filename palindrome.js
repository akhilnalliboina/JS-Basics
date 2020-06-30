function reverse(str){
 return console.log(str.split('').every((val,i)=>{
   return val==str[(str.length-1-i)]
 }))
}

reverse("abba");

//second way

function reverse(str){
  var arr=str.split('')
  arr=arr.reverse().join('');
  console.log(arr)
  if(arr===str){
    console.log("it is a palindorme")
    
  }
  else{ console.log("it is not palindorme")}
}

reverse("abcdefg");