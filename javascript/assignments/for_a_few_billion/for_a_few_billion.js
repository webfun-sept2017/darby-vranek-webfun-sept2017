function getRewardAfterDays(days) {
	var payment = 0.01;
	var total = 0.01;
	for (var i = 1; i < days; i++) {
		payment *= 2;
		total += payment;
	}
	return total;
}


console.log("Payment total:", getRewardAfterDays(30));