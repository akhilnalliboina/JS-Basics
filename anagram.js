function findAnagram(stringA, stringB){

    return (clearString(stringA)===clearString(stringB))
}


function clearString(str){
    return str.replace(/[^\w]/g,'').toLowerCase().split('').sort().join('');
}

console.log(findAnagram("!there","heret!"))




//Alternative solution with O(n)

function validAnagram(str1,str2){
    // add whatever parameters you deem necessary - good luck!
    // compare length
    if (str1.length!=str2.length){
        return false
    }
    // transform each string into new object
    var ostr1={}; var ostr2={}
    for (let char of str1){
        ostr1[char]=++ostr1[char]||1
    }
    for (let char of str2){
        ostr2[char]=++ostr2[char]||1
    }
    // compare the strings
    for (let char in ostr1){
          if(ostr1[char]!=ostr2[char]){return false}
    } 
    // return true or false 
    return true
  }








// function anagrams(stringA,stringB){
//     const stringA2=buildCharMap(stringA);
//     const stringB2=buildCharMap(stringB);

//     if(Object.keys(stringA2).length!=Object.keys(stringB2).length){
//         return false;
//     }

//     for(let char in stringA){

//         if(stringA[char]!=stringB[char]){
//             return false;
//         }
//     }


// }

// function buildCharMap(str){
//     const charMap={};
//     for (let map of str.replace(/[^/w]/g,'').toLowerCase()){
//         charMap[map]=charMap[map]+1||1;
//     }
// }