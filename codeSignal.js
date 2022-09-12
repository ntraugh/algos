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

const treeSort = (a) => {
    // sorting the array and removing the -1 from the array for the time being
    const sorted = [...a].sort().filter((num) => num !== -1)
    console.log(sorted)

    let sortedIndex = 0

    // standard for loop, looping through the original array "a"
    for(let i = 0; i < a.length; i++) {
        // if that specific index is -1 we continue
        if(a[i] === -1) continue;
        else {
            // if it's not -1 then we replace that index of array "a" with the sorted array at the first index "0" the first time
            // then we increment sorted index to follow along with the loop
            a[i] = sorted[sortedIndex]
            sortedIndex++
        }
    }
    return a
}

console.log(treeSort([-1, 150, 190, 170, -1, -1, 160, 180]))


// ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. 
// ROT13 is an example of the Caesar cipher.

const rot13 = (message) => {
    const alpha = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    
    for(let i = 0; i < message.length; i++) {
        message = message.replace(message[i], letter => alpha[alpha.indexOf(letter) + 13])      
    }
    return message
}

console.log(rot13("test"))

// Write a function that takes in a string of one or more words, and returns the same string, 
// but with all five or more letter words reversed (Just like the name of this Kata). 
// Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

const spinWords = (string) => {
    const stringToArray = string.split(" ")
    let result = ""
    stringToArray.map((word, i) => {
        if(word.length >= 5) {
            // if the word is greater than 5 we take the original split array at that index and change it to the reversed value of itself
            stringToArray[i] = word.split("").reverse().join("")
        } else {
            // if it isn't 5 letters or more we assign the word back to that index in our "split" array.
            stringToArray[i] = word
        }
        // after the if else, but still in the map function we set our original empty string to our new "split" array, then we return that result
    result = stringToArray.join(" ")
    })
    return result
}


console.log(spinWords("Hey fellow warriors"))

// palindrome function
const isPalindrome = (str) => {
    const reversedString = str.split("").reverse().join("")

    if(reversedString === str) {
        return true
    } else {
        return false
    }
}

console.log(isPalindrome("ama"))

// Write a function named first_non_repeating_letter that takes a string input, 
// and returns the first character that is not repeated anywhere in the string.

// const firstNonRepeatingLetter = (string) => {
    
//     const firstCheck = string[0]
    
// }

const number1 = 10.8960
const decimal1 = "0.05667"

const a = .4
const b = .1


console.log(a - b)
const newNew = ((a - b).toFixed(2))
const c = 5






const today = new Date().toLocaleDateString("en-us", {
    year: "numeric",
    month: "long",
    day: "numeric"
})

// this returns the number of milliseconds since january 1st 1970
// const newToday = Date.parse(today)

console.log(Math.ceil(number1))
console.log(number1.toFixed(2))

console.log(today)

const timeConversion = (string) => {
    
}