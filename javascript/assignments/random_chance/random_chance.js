function randomChance(quarters) {
	for (var q = quarters; q > 0; q--) {
		if (getOutcome()) {
			return getReward() + q;
		}
	}
	return 0;
}

function getOutcome() {
	var randomNum = Math.ceil(Math.random() * 100);
	return (randomNum === 1);
}

function getReward() {
	return Math.floor(Math.random() * (50)) + 50;
}

console.log(randomChance(20));