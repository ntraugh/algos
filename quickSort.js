// Create our input data
const unsortedInputArray = [];
// seed data in unsortedInputArray
for (let i = 0; i < 10; i++) {
  unsortedInputArray.push(Math.round(Math.random() * 2000));
}


const quickSort = (array) => {
    // first need to check if the array is less than or equal to 1 in length, then it's already sorted
    if(array.length <= 1) {
        return array
    }

    // quick sort needs a pivot element to check the rest of the arrays elements against
    const pivot = array.splice(Math.floor(Math.random() * array.length), 1)

    // create two empty arrays that will store the values less than the pivot and greater than the pivot
    const left = []
    const right = []

    array.forEach((el) => {
        if(pivot > el){
            left.push(el)
        } else {
            right.push(el)
        }
    });

    // now we need to call the quickSort function recursively since the array is probably not sorted on the first go round
    // we call quickSort on the left array, then concat the pivot and the right array
    // pivot is directly in the middle of array now because it's placed between the left and right arrays
    return quickSort(left).concat(pivot, quickSort(right));

};

// console.log(unsortedInputArray)
// const sorted = quickSort(unsortedInputArray);
// console.log(sorted)

const findTheSpread = (team1ppg, team2ppg2, team2AllowedPapg, team1AllowedPapg) => {
    const firstTeamScore = (team1ppg + team2AllowedPapg) / 2
    const secondTeamScore = (team2ppg2 + team1AllowedPapg) / 2

    let final = firstTeamScore - secondTeamScore
    if(final < 0){
        final = final * -1
       return `+${final}` 
    } else {
        return `-${final}`
    }
    
}

console.log(findTheSpread(19.7, 23.2, 21.5, 18.9))




const twoArraysSimilar = (a, b) => {
    // first check if they are the same and if they are just return true
    if(a.join("") === b.join("")) console.log(true)

    let leftArray = []
    let rightArray = []

    for(let i = 0; i < a.length; i++) {
        if(a[i] !== b[i]){
            leftArray.push(a[i])
            rightArray.push(b[i])
        }
    }
    if(leftArray.join("") === rightArray.reverse().join("")) return true
    return false

    
}

twoArraysSimilar([1, 2, 3], [2, 1, 3])

const arrayChange = (inputArray) => {
    let count = 0

    for(let i = 0; i < inputArray.length - 1; i++) {
        // if the current index is greater than the next index
        if(inputArray[i] >= inputArray[i + 1]){
            // we grab the difference between the (current index number + 1) MINUS the smaller number
            const difference = inputArray[i] + 1 - inputArray[i + 1]
            inputArray[i + 1] = inputArray[i] + 1
            count += difference
        }
    }
    return count
}


