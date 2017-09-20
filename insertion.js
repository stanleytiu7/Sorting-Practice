let example = [5, 1, 2, 6, 2, 7, 2, 8, 6, 4, 3, 2, 6]
console.log(example)
insertionSort(example)

function insertionSort(array) {
// need to go one more than length due to the need for j to hit every element
	for (let i = 1; i < array.length + 1; i++) {
		for (let j = i - 1; j >= 0; j--) {
            if (array[j - 1] > array[j]) {
                let temp = array[j - 1]
                array[j - 1] = array[j]
                array[j] = temp
			}
		}
	}
console.log(array)
}
