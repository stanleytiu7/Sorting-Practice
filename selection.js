let a = [2, 1, 6, 2, 7, 8, 9, 2, 4, 1]
selectionSort(a)

function selectionSort(array) {
	for (let i = 0; i < array.length - 1; i++) {
		for (let j = i + 1; j < array.length; j++) {
            if (array[i] > array[j]) {
				[array[i], array[j]] = [array[j], array[i]]
			}
		}
    }
    console.log(array)
	return array
}
