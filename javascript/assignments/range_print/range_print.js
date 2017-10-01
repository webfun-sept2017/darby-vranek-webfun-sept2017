function printRange(start, stop, step) {
	if (!step) {
		step = 1;
	}
	var shouldContinue = true;
	var current = start;
	while (shouldContinue) {
		console.log(current);
		current += step;
		if (current >= stop) {
			shouldContinue = false;
		}
	}
}