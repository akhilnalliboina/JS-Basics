const name="Heey Akhhhhhhhhhhhhhhillllllllllllll";
const createObject={};
let maxChar='';
let maxNum=0;

for (let char of name){
  createObject[char]=createObject[char]+1||1;
}

for(let char in createObject){
  if(createObject[char]>maxNum){
    maxNum=createObject[char];
    maxChar=char
  }
  
}

console.log(createObject)
console.log(maxChar)
console.log(maxNum)

//if(!createObject[char]){createObject[char]=1}
//  else{createObject[char]++}