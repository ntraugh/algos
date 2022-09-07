//  Given two strings, find the number of common characters between them.
function solution(s1, s2) {
    let count = 0

    for(let i = 0; i < s1.length; i++) {
       if(s2.includes(s1[i])) {
        s2 = s2.replace(s1[i], "")
        count++
       }
    }
    return count
}

console.log(solution("abca", "xyzbac"))


// Ticket numbers usually consist of an even number of digits. 
// A ticket number is considered lucky if the sum of the first half of the digits is equal to the sum of the second half.
// Given a ticket number n, determine if it's lucky or not.

const isLucky = (n) => {
    // function to turn n into a number
    const myFunc = n => Number(n)

    // create an array of numbers from our n, so we can slice from the beginning to middle, and middle to end
    const numArray = Array.from(String(n), myFunc)
    const middle = numArray.length / 2
    const left = numArray.slice(0, middle)
    const right = numArray.slice(middle)
    const leftNumAdded = left.reduce((prev, curr) => prev + curr, 0)
    const rightNumAdded = right.reduce((prev, curr) => prev + curr, 0)

    if( leftNumAdded === rightNumAdded) {
        return true
    } else {
        return false
    }
   
}

isLucky(100000)


// Some people are standing in a row in a park. There are trees between them which cannot
// be moved. Your task is to rearrange the people by their heights in a non-descending order
// without moving the trees. People can be very tall!

const solution2 = (a) => {
    // loop through each index, if index is -1 skip it, sort the rest of the numbers
    const sorted = [...a].sort((a, b) => a - b).filter((num) => num !== -1)
    let sortedIndex = 0

    for(let i = 0; i < a.length; i++) {
        if(a[i] === -1) continue;
        else {
            a[i] = sorted[sortedIndex++]
        }
    }
    return a
}

console.log(solution2([-1, 150, 190, 170, -1, -1, 160, 180]))

