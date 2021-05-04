function generateHashtag(str) {
  console.log(str.split(" "));
  if (str.split(" ").length == 0) {
    return false;
  } else {
    // split the string into array
    let arr = str.split("");
    // add # to the start of the array
    var result = ["#"];
    for (let i = 0; i < arr.length; i++) {
      // find the space, capitalize the next index
      if (arr[i] == " ") {
        if (arr[i + 1] != " ") {
          result.push(arr[i + 1].toUpperCase());
        }
        i++;
      } else {
        result.push(arr[i]);
      }
    }
    // Join the word
    result = result.join("");

    if (result.length >= 140 || result === "" || result === " ") {
      return false;
    } else {
      console.log(result);
      return result;
    }
  }
}
