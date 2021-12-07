const miliSec = (data) => {
	if (data < 60000) {
		return Math.floor(data / 1000) + " " + "sec";
	} else if (data >= 60000) {
		return data / 60000 + " " + "min";
	}
};

console.log(miliSec(180000));

module.exports = { miliSec };
