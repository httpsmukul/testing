//- Below 2,50,000 no tax
// - Amount earned between 2,50,000 and 5,00,000 - 10% of the amount earned in this slab
// - Amount earned between 5,00,000 and 10,00,000 - 20% of the amount earned in this slab
// - Amount earned above 10,00,000 - 30% of the amount earned in this slab
//
// The rules for the rebate based on the savings is mentioned below
// - 50% of the savings amount can be deducted from the total income if the total income is below 5,00,000
// - 30% of the savings amount can be deducted from the total income if the total income is below 10,00,000
// - 10% of the savings amount can be deducted from the total income if the total income is above 10,00,000 the maximum cap of the deduction is 50,000

const tax = (data) => {
	if (data < 250000) {
		let saving = (data * 50) / 100;
		return "no tax" + "saving:-" + saving;
	} else if (data >= 250000 && data < 500000) {
		let tax = (data * 10) / 100;
		let saving = (data * 50) / 100;
		return "tex:-" + tax + " " + "saving:-" + saving;
	} else if (data >= 500000 && data < 1000000) {
		let tax = (data * 20) / 100;
		let saving = (data * 30) / 100;
		return "tex:-" + tax + " " + "saving:-" + saving;
	} else if (data >= 1000000) {
		let tax = (data * 30) / 100;
		let saving = (data * 10) / 100;
		return "tex:-" + tax + " " + "saving:-" + saving;
	}
};

module.exports = { tax };
console.log(tax(800000));
