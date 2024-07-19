// Practice Questions
/*
Question 1
For the given start state of an array, change it to final form using splice.
start : ['january', 'july', 'march', 'august']
final : ['july', 'june', 'march', 'august']
*/

let months = ['january', 'july', 'march', 'august'];
months.splice(0, 2, 'july', 'june');
console.log(months);

/*
Question 2
Return the index of the "javascript" from the given array, if it was reversed.
['C', 'C++', 'html', 'javascript', 'python', 'java', 'c#', 'sql']
*/
let languages = ['C', 'C++', 'html', 'javascript', 'python', 'java', 'c#', 'sql'];
console.log(languages.reverse().indexOf('javascript'));

/*
Tic tac toe
Question 3
Create a nested array to show the tic tac toe game state.
*/
let game = [ ['X', null, 'O'], [null, 'X', null], ['O', null, 'X'] ];
console.log(game);
game [0][1] = 'O';
console.log(game);