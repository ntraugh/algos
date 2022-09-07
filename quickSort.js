// Create our input data
const unsortedInputArray = [];
// seed data in unsortedInputArray
for (let i = 0; i < 10; i++) {
  unsortedInputArray.push(Math.round(Math.random() * 2000));
}

// TODO: create quick sort function
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

    

};

const sorted = quickSort(unsortedInputArray);