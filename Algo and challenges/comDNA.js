function DNAStrand(dna){
    //your code here
    result=""
    for(char of dna.split("")){
      switch (char) {
          case 'A':
            result+= 'T'
            break;
          case 'T':
            result+= 'A'
            break;
          case 'G':
            result+= 'C'
            break;
          case 'C':
            result+= 'G'
            break;
          default: 
            result+= char
      }
    }
    return result;
  }