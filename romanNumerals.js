function solution(roman){
    // complete the solution by transforming the 
    // string roman numeral into an integer  
      num=roman.split(""), result=0;
    data={
      'I':1,
      'V':5,
      'X':10,
      'L':50,
      'C':100,
      'D':500,
      'M':1000,
    }
    for (i=0;i<num.length;i++){
        if(data[num[i]]<data[num[i+1]]){
        result=data[num[i+1]]-data[num[i]]
          i++;
      } else {
        result+=data[num[i]]
      } 
    } return result
  }