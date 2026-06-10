// Задание 1
function getMin(a, b) {
  if (a <= b) {
    return a;
  } else {
    return b;
  }
}

console.log(getMin(8, 4)); // 4
console.log(getMin(6, 6)); // 6

// Задание 2
function checkNumber(n) {
  if (n % 2 === 0) {
    return 'Число четное';
  } else {
    return 'Число нечетное';
  }
}

console.log(checkNumber(4)); // Число четное
console.log(checkNumber(7)); // Число нечетное


// Задание 3
function squareToConsole(n) {
  console.log(n * n);
}

squareToConsole(5); // 25

// -------

function square(n) {
  return n * n;
}

let result = square(5);
console.log(result); // 25


// Задание 4
function checkAge() {
  let age = Number(prompt('Сколько вам лет?'));

  if (age < 0) {
    console.log('Вы ввели неправильное значение');
  } else if (age >= 0 && age <= 12) {
    console.log('Привет, друг!');
  } else {
    console.log('Добро пожаловать!');
  }
}

checkAge();

// Задание 5
function multiplyNumbers(a, b) {
  a = Number(a);
  b = Number(b);

  if (isNaN(a) || isNaN(b)) {
    return 'Одно или оба значения не являются числом';
  }

  return a * b;
}

console.log(multiplyNumbers(2, 3)); // 6
console.log(multiplyNumbers('5', 4)); // 20
console.log(multiplyNumbers('abc', 4)); // Одно или оба значения не являются числом

// Задание 6
function cubeNumber() {
  let n = Number(prompt('Введите число'));

  if (isNaN(n)) {
    return 'Переданный параметр не является числом';
  }

  return `n в кубе равняется ${n ** 3}`;
}

console.log(cubeNumber());


for (let i = 0; i <= 10; i++) {
  console.log(`n в кубе равняется ${i ** 3}`);
}

// Задание 7
const circle1 = {
  radius: 5,
  getArea() {
    return Math.PI * this.radius ** 2;
  },
  getPerimeter() {
    return 2 * Math.PI * this.radius;
  }
};

const circle2 = {
  radius: 10,
  getArea() {
    return Math.PI * this.radius ** 2;
  },
  getPerimeter() {
    return 2 * Math.PI * this.radius;
  }
};

console.log(circle1.getArea());
console.log(circle1.getPerimeter());
console.log(circle2.getArea());
console.log(circle2.getPerimeter());