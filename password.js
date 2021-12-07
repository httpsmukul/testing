/* write a function that tests if a password is valid or not
min 6 char, should contain a number, capital character, small caps character, and a symbol ( !@#$%^&*(),.<>/';:"][{}\|? )
return proper error message for wrong inputs, ( like number is missing, symbol is missing etc.)
write 10 test cases for it
write your own functions*/

const password = (data) => {
	if (data.length < 6) return "your password is too short";

	const capital = /[A-Z]/g;
	const samll = /[a-z]/g;
	const num = /[1-9]/g;
	const char =
		/["!", "@", "#", "?","$","^","<",">","/",":",";","{","}","[",")","{","\","|"]/g;

	const foundc = data.match(capital);
	const fs = data.match(samll);
	const fn = data.match(num);
	const fc = data.match(char);

	console.log(fc);
	// console.log(foundc);
	// console.log(fs);
	if (foundc == null || fs == null || fn == null || fc == null) {
		return "please check your password is weak";
	}
	return "login scuessfull";
};

console.log(password("atadatadata@"));
module.exports = { password };
