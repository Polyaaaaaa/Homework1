// task 1
let str = 'js';
console.log(str.toUpperCase());

// task 2
function filterByStart(arr, startStr) {
  let result = [];
  let lowerStart = startStr.toLowerCase();

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].toLowerCase().startsWith(lowerStart)) {
      result.push(arr[i]);
    }
  }

  return result;
}

console.log(filterByStart(['Apple', 'apricot', 'Banana', 'aardvark'], 'a'));

// task 3
let num = 32.58884;

console.log(Math.floor(num));
console.log(Math.ceil(num));
console.log(Math.round(num));

// task 4
console.log(Math.min(52, 53, 49, 77, 21, 32));
console.log(Math.max(52, 53, 49, 77, 21, 32));

// task 5
function getRandomNumber() {
  console.log(Math.floor(Math.random() * 10) + 1);
}

getRandomNumber();

// task 6
function createRandomArray(n) {
  let result = [];
  let length = n / 2;

  for (let i = 0; i < length; i++) {
    result.push(Math.floor(Math.random() * (n + 1)));
  }

  return result;
}

console.log(createRandomArray(10));

// task 7
function getRandomInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(getRandomInRange(5, 15));

// task 8
console.log(new Date());

// task 9
let currentDate = new Date();
let futureDate = new Date(currentDate);
futureDate.setDate(currentDate.getDate() + 73);

console.log(futureDate);

// task 10
function formatDate(date) {
  const months = [
    'января', 'февраля', 'марта', 'апреля', 'мая', 'июня',
    'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'
  ];

  const weekdays = [
    'воскресенье', 'понедельник', 'вторник', 'среда',
    'четверг', 'пятница', 'суббота'
  ];

  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();
  const weekday = weekdays[date.getDay()];

  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');

  return `Дата: ${day} ${month} ${year} — это ${weekday}.\nВремя: ${hours}:${minutes}:${seconds}`;
}

console.log(formatDate(new Date()));