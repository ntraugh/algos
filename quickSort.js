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

console.log(findTheSpread(22, 28.2, 27, 25.8))