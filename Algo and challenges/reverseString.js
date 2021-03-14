function reverse(str) {
  
    var reverseString=[];
     var arr=str.split('');
    for (var i=0;i<str.length;i++){
    let arrr=arr.pop();
    reverseString.push(arrr);
    }
    return console.log(reverseString.join(""));
    }
    
    reverse('sahaj');
    
    //Second type:
    //split('')
    //reverse()
    //join('')
    function reverse(str) {
    let arr=str.split('')
    return console.log(arr.reverse().join('')); 
    }
    
    reverse('sahaj');
    
    //third type
    
    function reverse(str){
     return console.log(str.split('').reduce((rev,che)=>che+rev,''))
      
    }
    
    reverse("akhil")
    
    //fourth type
    
    function reverse(str){
     var reversed="";
      for(var character of str){
        reversed= character+reversed
        debugger;
      }return console.log(reversed)
      
    }
    
    reverse("akhil")
    
    