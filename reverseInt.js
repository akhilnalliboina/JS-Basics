function reverseInteger(str){
console.log(Math.sign(str)*parseInt(str.toString().split('').reverse().join('')))
}

reverseInteger(-69);

//console.log(Math.sign(str)*Math.abs(str).toString().split('').reverse().join('')) 