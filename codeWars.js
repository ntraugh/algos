// Write a function that reverses characters in (possibly nested) parentheses in the input string.
// Input strings will always be well-formed with matching ()s.

const reverseParentheses = (inputString) => {

  let x = inputString
//   while loop for whenever the input string contains an open pantheses
  while(x.includes("(")) {
      const endParentheses = x.indexOf(")")
      const startParentheses = x.lastIndexOf("(", endParentheses)
      const wordToReverse = x.slice((startParentheses + 1), endParentheses).split("").reverse().join("")
      x = x.slice(0, startParentheses) + wordToReverse + x.slice(endParentheses + 1)

    }
    return x
}

reverseParentheses("foo(bar(baz))blim")