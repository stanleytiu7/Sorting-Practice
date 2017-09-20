let example = [6, 1, 2, 6, 7, 8, 2, 6, 3, 5]
mergeSort(example)

function mergeSort(array) {
	console.log('array', array)
	if (!array.length) return 'Nothing inputted'
	if (array.length === 1) return array
	if (array.length === 2) {
		if (array[0] > array[1]) {
			[array[0], array[1]] = [array[1], array[0]]
		}
		return array
	}
	let left = array.slice(0, Math.floor(array.length / 2))
	let right = array.slice(Math.floor(array.length / 2))
	return merge(mergeSort(left), mergeSort(right))
}


function merge(left, right) {
	console.log('left', left, '\n', 'right', right)
	let result = []
	while (left.length && right.length) {
		if (left[0] < right[0]) result.push(left.shift())
		else result.push(right.shift())
	}
	while (left.length) {
		result.push(left.shift())
	}
	while (right.length) {
		result.push(right.shift())
	}
	console.log('result', result)
	return result
}
