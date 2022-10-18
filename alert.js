function checkAge(age) {
	if (age > 18) return true ?? confirm ('Родители разрешили?');
}

let age = prompt('Сколько вам лет?', 18);
checkAge(age);

alert ('тест автоотправки через visual studio code')