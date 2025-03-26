function bubbleSort(array) {
    const len = array.length
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len-1-i; j++) {
            if (array[j] > array[j+1]) {
                [array[j], array[j + 1]] = [array[j+1], array[j]];
            }            
        }
    }
    return array
}

const array = [3,2,1,4,5,19,20,15]

const result = bubbleSort(array)
console.log(result);