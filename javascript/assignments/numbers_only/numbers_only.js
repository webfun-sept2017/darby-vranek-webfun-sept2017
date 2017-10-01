function numbersOnly(arr) {
	var newArr = [];
	for (idx in arr) {
		if (typeof(arr[idx]) === "number") {
			newArr.push(arr[idx]);
		}
	}
	return newArr;
}

console.log(numbersOnly([1, "apple", -3, "orange", 0.5]));