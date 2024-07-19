// Practice Questions
/*
Question 1
For the given start state of an array, change it to final form using splice.
start : ['january', 'july', 'march', 'august']
final : ['july', 'june', 'march', 'august']
*/

let months = ['january', 'july', 'march', 'august'];
months.splice(0, 2, 'july','june');
console.log(months);

