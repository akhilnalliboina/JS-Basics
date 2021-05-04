/*
The marketing team is spending way too much time typing in hashtags.
Let's help them with our own Hashtag Generator!

Here's the deal:

It must start with a hashtag (#).
All words must have their first letter capitalized.
If the final result is longer than 140 chars it must return false.
If the input or the result is an empty string it must return false. */

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
