//20Valid_Parentheses
const s = "()[]{}";
var isValid = function (strList) {
  let myStack = [];
  let leftBracket = new Set(["(", "[", "{"]);
  let rightBracket = new Set([")", "]", "}"]);
  for (let i = 0; i <= strList.length - 1; i++) {
    const currentChar = strList[i];
    if (leftBracket.has(currentChar)) {
      myStack.push(currentChar);
    } else if (rightBracket.has(currentChar)) {
      if (currentChar === "}") {
        if (myStack.pop() !== "{") {
          return false;
        }
      } else if (currentChar === "]") {
        if (myStack.pop() !== "[") {
          return false;
        }
      } else if (currentChar === ")") {
        if (myStack.pop() !== "(") {
          return false;
        }
      }
    }
  }
  return myStack.length === 0; // [""] true
};
console.log(isValid(s));
