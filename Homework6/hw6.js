// Задание 1
let data1 = [1, 5, 4, 10, 0, 3];

for (let i = 0; i < data1.length; i++) {
  console.log(data[i]);
  if (data1[i] === 10) break;
}

// Задание 2
let data2 = [1, 5, 4, 10, 0, 3];
console.log(data2.indexOf(4));

// Задание 3
let data3 = [1, 3, 5, 10, 20];
console.log(data3.join(' '));

// Задание 4
let data4 = [];

for (let i = 0; i < 3; i++) {
  data4[i] = [];
  for (let j = 0; j < 3; j++) {
    data4[i][j] = 1;
  }
}

console.log(data4);v

// Задание 5
let data5 = [1, 1, 1];
data5.push(2, 2, 2);
console.log(data5);

// Задание 6
let data6 = [9, 8, 7, 'a', 6, 5];
data6.sort();
data6.pop();
console.log(data6);

// Задание 7
let data7 = [9, 8, 7, 6, 5];
let num = Number(prompt('Угадайте число'));

if (data7.includes(num)) {
  alert('Угадал');
} else {
  alert('Не угадал');
}

// Задание 8
let str = 'abcdef';
console.log(str.split('').reverse().join(''));

// Задание 9
let data9 = [[1, 2, 3], [4, 5, 6]];
console.log(data.flat());

// Задание 10
let data10 = [2, 4, 6, 8, 10];

for (let i = 0; i < data10.length - 1; i++) {
  console.log(data10[i] + data10[i + 1]);
}

// Задание 11
function getSquares(data11) {
  let result = [];
  for (let i = 0; i < data11.length; i++) {
    result.push(data11[i] ** 2);
  }
  return result;
}

console.log(getSquares([1, 2, 3]));

// Задание 12
function getWordLengths(data12) {
  let result = [];
  for (let i = 0; i < data12.length; i++) {
    result.push(data12[i].length);
  }
  return result;
}

console.log(getWordLengths(['hello', 'hi', 'JavaScript']));

// Задание 13
function getNegative(data13) {
  let result = [];
  for (let i = 0; i < data13.length; i++) {
    if (data13[i] < 0) result.push(data13[i]);
  }
  return result;
}

console.log(getNegative([1, -2, 3, -4, 5]));

// Задание 14
let data14 = [];
let evendata = [];

for (let i = 0; i < 10; i++) {
  data14.push(Math.floor(Math.random() * 11));
}

for (let i = 0; i < data14.length; i++) {
  if (data14[i] % 2 === 0) {
    evendata.push(data14[i]);
  }
}

console.log(data14);
console.log(evendata);

// Задание 15
let data15 = [];

for (let i = 0; i < 6; i++) {
  data15.push(Math.floor(Math.random() * 10) + 1);
}

let sum = 0;
for (let i = 0; i < data15.length; i++) {
  sum += data15[i];
}

let average = sum / data15.length;
console.log(data15);
console.log(average);