

function giveTime(hour, minute, period) {
	var output = "It's ";
	if (minute < 30) {
		output += "just after " + hour;
	} else {
		output += "almost " + (hour + 1);
	}
	if (period === "AM") {
		output += " in the morning";
	} else {
		output += " in the evening";
	}
	console.log(output);
}


giveTime(8, 50, "AM")