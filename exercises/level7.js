// Write a function that takes a number as an input.
// Have it create an empty array and then push a string into the array as many
// times as the input number
//
// Name the function "finalFunction"
function finalFunction(num) {
  var arr = [];
  var pushString = "Push it!";
  while (arr.length != num) {
    arr.push(pushString);
  }
  return arr;
}
