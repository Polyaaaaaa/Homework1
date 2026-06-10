// Задание 1
let data = [1, 5, 4, 10, 0, 3];

for (let i = 0; i < data.length; i++) {
  console.log(data[i]);
  if (data[i] === 10) break;
}

// Задание 2
let data = [1, 5, 4, 10, 0, 3];
console.log(data.indexOf(4));

// Задание 3
let data = [1, 3, 5, 10, 20];
console.log(data.join(' '));

// Задание 4
let data = [];

for (let i = 0; i < 3; i++) {
  data[i] = [];
  for (let j = 0; j < 3; j++) {
    data[i][j] = 1;
  }
}

console.log(data);v

// Задание 5
let data = [1, 1, 1];
data.push(2, 2, 2);
console.log(data);

// Задание 6
let data = [9, 8, 7, 'a', 6, 5];
data.sort();
data.pop();
console.log(data);

// Задание 7
let data = [9, 8, 7, 6, 5];
let num = Number(prompt('Угадайте число'));

if (data.includes(num)) {
  alert('Угадал');
} else {
  alert('Не угадал');
}

// Задание 8
let str = 'abcdef';
console.log(str.split('').reverse().join(''));

// Задание 9
let data = [[1, 2, 3], [4, 5, 6]];
console.log(data.flat());

// Задание 10
let data = [2, 4, 6, 8, 10];

for (let i = 0; i < data.length - 1; i++) {
  console.log(data[i] + data[i + 1]);
}

// Задание 11
function getSquares(data) {
  let result = [];
  for (let i = 0; i < data.length; i++) {
    result.push(data[i] ** 2);
  }
  return result;
}

console.log(getSquares([1, 2, 3]));

// Задание 12
function getWordLengths(data) {
  let result = [];
  for (let i = 0; i < data.length; i++) {
    result.push(data[i].length);
  }
  return result;
}

console.log(getWordLengths(['hello', 'hi', 'JavaScript']));

// Задание 13
function getNegative(data) {
  let result = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i] < 0) result.push(data[i]);
  }
  return result;
}

console.log(getNegative([1, -2, 3, -4, 5]));

// Задание 14
let data = [];
let evendata = [];

for (let i = 0; i < 10; i++) {
  data.push(Math.floor(Math.random() * 11));
}

for (let i = 0; i < data.length; i++) {
  if (data[i] % 2 === 0) {
    evendata.push(data[i]);
  }
}

console.log(data);
console.log(evendata);

// Задание 15
let data = [];

for (let i = 0; i < 6; i++) {
  data.push(Math.floor(Math.random() * 10) + 1);
}

let sum = 0;
for (let i = 0; i < data.length; i++) {
  sum += data[i];
}

let average = sum / data.length;
console.log(data);
console.log(average);