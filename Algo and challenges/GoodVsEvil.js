function goodVsEvil(good, evil){
    let goodPoints=[1,2,3,3,4,10]
    let evilPoints=[1,2,2,2,3,5,10]
    let GoodScore=0;var EvilScore=0;
    EvilScore=sum(evil,evilPoints)
    GoodScore=sum(good,goodPoints)
    return GoodScore<EvilScore? "Battle Result: Evil eradicates all trace of Good":
    GoodScore==EvilScore?"Battle Result: No victor on this battle field":
    "Battle Result: Good triumphs over Evil"
  }
  
  function sum(value,points){
    let score=0;
    for(index in value.split(" ")){
      score+=value.split(" ")[index]*points[index]
    } return score
  }