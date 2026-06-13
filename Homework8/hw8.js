// задание 1
const people = [
  { name: 'Глеб', age: 29 },
  { name: 'Анна', age: 17 },
  { name: 'Олег', age: 7 },
  { name: 'Оксана', age: 47 }
];

console.log(people.sort((a, b) => a.age - b.age));

// задание 2
function isPositive(item) {
  return item > 0;
}

function isMale(person) {
  return person.gender === 'male';
}

function filter(arr, ruleFunction) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (ruleFunction(arr[i])) {
      result.push(arr[i]);
    }
  }

  return result;
}

console.log(filter([3, -4, 1, 9], isPositive));

const people_ = [
  { name: 'Глеб', gender: 'male' },
  { name: 'Анна', gender: 'female' },
  { name: 'Олег', gender: 'male' },
  { name: 'Оксана', gender: 'female' }
];

console.log(filter(people_, isMale));

// задание 3
const startTime = Date.now();

const intervalId = setInterval(() => {
  console.log(new Date());

  if (Date.now() - startTime >= 30000) {
    clearInterval(intervalId);
    console.log('30 секунд прошло');
  }
}, 3000);

// задание 4
function delayForSecond(callback) {
  setTimeout(() => {
    callback();
  }, 1000);
}

delayForSecond(function () {
  console.log('Привет, Глеб!');
});

// задание 5
delayForSecond(() => sayHi('Глеб'));