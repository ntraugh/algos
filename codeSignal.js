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
    const myFunc = n => Number(n)
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