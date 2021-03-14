var charMap=[];
var check= "abbbbcccccdc";
var maxChar='';
var maxVal=0;

for (const char of check){
    
   if(!charMap[char]) {
       charMap[char]=1
   } else charMap[char]++;
}


for (let cr in charMap){
    if(charMap[cr]>maxVal){
        maxVal=charMap[cr];
        maxChar=cr;
    }
}

console.log(maxChar +" is maximum with value "+ maxVal);