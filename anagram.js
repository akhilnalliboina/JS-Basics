function findAnagram(stringA, stringB){

    return (clearString(stringA)===clearString(stringB))
}


function clearString(str){
    return str.replace(/[^\w]/g,'').toLowerCase().split('').sort().join('');
}

console.log(findAnagram("!there","heret!"))















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