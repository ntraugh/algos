const unsortedArray = []

for (let i = 0; i < 10; i++) {
    // random number between 0 & 1 times 2000, rounded up. 
    // pushing that random number into unsortedArray to give us a bunch of random numbers that are unsorted
    unsortedArray.push(Math.round(Math.random() * 1000))
}

const bubbleSort = (array) => {
    // letting the program know that sorted is false to begin with
    let sorted = false

    while(!sorted) {

        // assume that the array is sorted at this point
        sorted = true

        for(let i = 0; i < array.length; i++) {
            if(array[i] > array[i + 1]) {
                // if the first index is greater than the one after it we swap them
                // set the first value to a new variable to save it
                const tmp = array[i]
                // reassign array[i] to the index after it
                array[i] = array[i + 1]
                // reassign the second index to the tmp variable aka the first index we checked
                array[i + 1] = tmp

                // since we set sorted to true before the for loop and we found something to swap we set sorted to be false again and continue in the loop
                sorted = false
            }
        }
    }
    return array 
}






const sortAgain = (char) => {

    let sorted = false; 

    while(!sorted) {
        sorted = true

        for(let i = 0; i < char.length; i++) {
            if(char[i] > char[i + 1]){
                // swap positions

                const temp = char[i]
                char[i] = char[i + 1]
                char[i + 1] = temp

                sorted = false
            }
        }
        return char
    }
}


console.log(unsortedArray)
const sorted = bubbleSort(unsortedArray)
const sorted2 = sortAgain(unsortedArray)
console.log(sorted, sorted2)