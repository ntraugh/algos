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