function bubbleSort(array) {
	let counter = 0;
	for (let i = 0; i < array.length - 1; i++) {
		if (array[i] > array[i + 1]) {
			[array[i], array[i + 1]] = [array[i + 1], array[i]]
			counter++
		}
	}
    if (counter === 0) {
    console.log(array)
		return array
	}
	bubbleSort(array)
}

let array = [5, 4, 7, 1, 2, 8, 10, 9, 2, 6, 3, 7];
bubbleSort(array);
