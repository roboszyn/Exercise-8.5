var a = prompt('Podaj dowolną liczbę');
var b = prompt('Podaj drugą dowolną liczbę');

var value = (a*a) + (2 * a * b) - (b*b);

console.log(value);

if (value > 0) {
	console.log('Wynik dodatni');
} else if (value < 0) {
	console.log('Wynik ujemny');
} else {
	console.log('Wynik jest równy zero');
}