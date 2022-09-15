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
