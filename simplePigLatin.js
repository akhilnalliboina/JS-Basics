function pigIt(str){
    //Code here
    var arr=[]; var temp=[]
    //loop over array
    for(var i=0; i<=str.length; i++){   
        if(str[i]==str[0]){
         temp=str[i]
        } 
       else if(str[i]==" " || i==str.length  ){
        
      arr.push(temp)
         if(temp!=="!"&&temp!=="?"&&temp!=="."){
           arr.push("a")
           arr.push("y")
         }
       if(i!==str.length){arr.push(" ")}
      temp=str[i+1]
      i++
      }else{
        arr.push(str[i]) 
           
    } }
    
    return arr.join("")
  }