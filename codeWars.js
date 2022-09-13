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

// Several people are standing in a row and need to be divided into two teams. 
// The first person goes into team 1, the second goes into team 2, the third goes into team 1 again, the fourth into team 2, and so on.
// Return an array of two integers, where the first element is the total weight of team 1, and the second element is the total weight of team 2

const teamWeights = (a) => {
    let leftTeam = []
    let rightTeam = []

    for(let i = 0; i < a.length; i++) {
        if(i % 2 === 0){
            leftTeam.push(a[i])
        } else {
            rightTeam.push(a[i])
        }
    }

    leftTeam = leftTeam.reduce((prev, current) => prev + current, 0)
    rightTeam = rightTeam.reduce((prev, current) => prev + current, 0)
    return [leftTeam, rightTeam]
}

teamWeights([50, 60, 60, 45, 70])


// Given a rectangular matrix of characters, add a border of asterisks(*) to it.

const addBorder = (picture) => {
    const newPic = picture.map((el) => "*" + el + "*")
    console.log(newPic)
}

addBorder(["abc",
"ded"])