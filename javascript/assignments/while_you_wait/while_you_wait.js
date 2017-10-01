function birthdayCountdown(daysLeft) {
	while (daysLeft > 0) {
		if (daysLeft > 30) {
			console.log(daysLeft + " days until my birthday. Such a long time... :(");
		} else if (daysLeft >= 5) {
			console.log(daysLeft + " days until my birthday!!!");
		}
		else if (daysLeft === 1) {
			console.log("1 DAY UNTIL MY BIRTHDAY!!!");
		} else {
			console.log(daysLeft + " DAYS UNTIL MY BIRTHDAY!!!");
		}
		daysLeft--;
	}
	console.log("♪ღ♪*•.¸¸¸.•*¨¨*•.¸¸¸.•*•♪ღ♪¸.•*¨¨*•.¸¸¸.•*•♪ღ♪•*\n♪ღ♪░H░A░P░P░Y░ B░I░R░T░H░D░A░Y░░♪ღ♪\n*•♪ღ♪*•.¸¸¸.•*¨¨*•.¸¸¸.•*•♪¸.•*¨¨*•.¸¸¸.•*•♪ღ♪•«");
}


birthdayCountdown(60);