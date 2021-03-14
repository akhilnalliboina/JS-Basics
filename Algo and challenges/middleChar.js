function getMiddle(s)
{
  var no=s.length;
  if (no%2==0){
    return s.substr((no/2)-1,2)
  } else {
    return s.substr(((no-1)/2),1)
  }
  
}