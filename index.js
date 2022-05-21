function isArray(collection) {
	let newCollection
	const test = Array.isArray(collection)
	if (test) {
		newCollection = collection
	} else {
		newCollection = Object.values(collection)
	}
	return newCollection
}

function myEach(collection, callback) {
	const newArray = isArray(collection)

	for (let i = 0; i < newArray.length; i++) {
		callback(newArray[i])
	}
	return collection
}

function myMap(collection, callback) {
	let newArr = []
	const newArray = isArray(collection)

	for (let i = 0; i < newArray.length; i++) {
		newArr.push(callback(newArray[i]))
	}
	return newArr
}

function myReduce(collection, callback, acc) {
	const newArray = isArray(collection)
	if (typeof acc !== "number") {
		acc = newArray[0]
		for (let i = 1; i < newArray.length; i++) {
			acc = callback(acc, newArray[i], newArray)
		}
		return acc
	} else {
		for (let i = 0; i < newArray.length; i++) {
			acc = callback(acc, newArray[i], newArray)
		}
		return acc
	}
}

function myFind(collection, predicate) {
	const newArray = isArray(collection)
	for (let i = 0; i < newArray.length; i++) {
		if (predicate(newArray[i])) {
			return newArray[i]
			break
		}
	}
}

function myFilter(collection, predicate) {
	const newArray = isArray(collection)
	let result = []
	for (const value of newArray) {
		if (predicate(value)) {
			result.push(value)
		}
	}
	return result
}

function mySize(collection) {
	const newArray = isArray(collection)
	return newArray.length
}

function myFirst(array, int) {
	if (typeof int !== "undefined") {
		return array.slice(0, int)
	} else {
		return array[0]
	}
}

function myLast(array, n) {
	if (typeof n !== "undefined") {
		return array.slice(array.length - n)
	} else {
		return array[array.length - 1]
	}
}

function myKeys(object) {
	return Object.keys(object)
}

function myValues(object) {
	return Object.values(object)
}
