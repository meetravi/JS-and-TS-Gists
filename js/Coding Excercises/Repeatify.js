/**
|--------------------------------------------------
| 2. Create a “native” method
|Define a repeat function on the String object.
 The function accepts an integer that specifies how many times the string 
 has to be repeated. The function returns the string repeated the noOfTimesToRepeat of times specified. For example:
|--------------------------------------------------
*/

String.prototype.repeatify = (noOfTimesToRepeat) => {
  let repeatString;
  for (let i = 0; i < noOfTimesToRepeat; i++) {
    repeatString += this.toString();
  }

  return repeatString;
};

console.log("hello".repeatify(3));
