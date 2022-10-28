// find the longest common prefix string amongs an array of strings

const longestPrefix = (strs) => {
    let result = ""
    
    for(let i = 0; i < strs[0].length; i++) {
//  get the first letter of the first word on the first iteration
        const firstWordCharacter = strs[0][i]
        
//  loop through the rest of the words
        for(let j = 1; j < strs.length; j++) {
            if(strs[j][i] !== firstWordCharacter) return result
        }
        result += firstWordCharacter

    }
    return result
}

// Given an integer array nums, return all the triplets

const theTriplets = (nums) => {
    nums.sort((a, b) => a - b)
    let results = []
    for(let i = 0; i < nums.length; i++) {
        if(i > 0 && nums[i] == nums [i - 1]) continue
        for(let j = i + 1; j < nums.length; j++){ 
            for(let k = j + 1; k < nums.length; k++){
                if(nums[i] + nums[j] + nums[k] == 0) {
                    results.push([nums[i], nums[j], nums[k]])
                }
            }
        }
    }
    console.log(results)
}


theTriplets([-1,0,1,2,-1,-4])


// Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.


const needleInHaystack = (haystack, needle) => {
    if(haystack.includes(needle)) {
        console.log(haystack.indexOf(needle))
    } else {
        console.log(-1) 
    }
}

needleInHaystack("mississippi", "issip")



// length of the last word in a string

const lengthOfLastWord = (string) => {
    let newArray = string.split(" ")

    newArray = newArray.filter((word) => word !== "")

    let num = newArray[newArray.length - 1].length
    console.log(num)
}

lengthOfLastWord("   fly me   to   the moon  ")


// remove duplicates from an array

const removeDuplicates = (array, val) => {
    
    let count = []
    for(let i = 1; i < array.length; i++) {
        if(array[i] !== val){
            count.push(array[i])
        }
    }
    console.log(count)
}

removeDuplicates([3,2,2,3], 3)