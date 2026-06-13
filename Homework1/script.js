const mobileMediaQuery = window.matchMedia('(max-width: 767px)');

const scrollToElement = (element) => {
    if (!element) {
        return;
    }

    element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
    });
};

const promoButton = document.querySelector('.promo__button');
const aboutGames = document.querySelector('.about-games');
const mobileGames = document.querySelector('.games_mobile');

promoButton?.addEventListener('click', () => {
    scrollToElement(mobileMediaQuery.matches ? mobileGames : aboutGames);
});

document.querySelectorAll('.games:not(.games_mobile) .card[data-game]').forEach((card) => {
    card.addEventListener('click', (event) => {
        event.preventDefault();
        scrollToElement(document.querySelector(`#game-${card.dataset.game}`));
    });
});

// квиз игра

function quizGame() {
  const quiz = [
    {
      question: "Какой цвет небо?",
      options: ["1. Красный", "2. Синий", "3. Зеленый"],
      correctAnswer: 2
    },
    {
      question: "Сколько дней в неделе?",
      options: ["1. Шесть", "2. Семь", "3. Восемь"],
      correctAnswer: 2
    },
    {
      question: "Сколько у человека пальцев на одной руке?",
      options: ["1. Четыре", "2. Пять", "3. Шесть"],
      correctAnswer: 2
    }
  ];

  let correctAnswers = 0;

  for (let i = 0; i < quiz.length; i++) {
    let userAnswer = Number(
      prompt(quiz[i].question + "\n" + quiz[i].options.join("\n"))
    );

    if (userAnswer === quiz[i].correctAnswer) {
      correctAnswers++;
    }
  }

  alert(`Правильных ответов: ${correctAnswers}`);
}


// игра «Угадай число»

function guessNumberGame() {
  let randomNumber = Math.floor(Math.random() * 100) + 1;
  let userAnswer;

  while (true) {
    userAnswer = Number(prompt('Угадай число от 1 до 100'));

    if (isNaN(userAnswer)) {
      alert('Введите число');
    } else if (userAnswer < randomNumber) {
      alert('Больше');
    } else if (userAnswer > randomNumber) {
      alert('Меньше');
    } else {
      alert('Вы угадали!');
      break;
    }
  }
}

// игра «Простая арифметика»

function simpleArithmeticGame() {
  const num1 = Math.floor(Math.random() * 10) + 1;
  const num2 = Math.floor(Math.random() * 10) + 1;
  const operations = ['+', '-', '*', '/'];
  const operation = operations[Math.floor(Math.random() * operations.length)];

  let correctAnswer;

  if (operation === '+') {
    correctAnswer = num1 + num2;
  } else if (operation === '-') {
    correctAnswer = num1 - num2;
  } else if (operation === '*') {
    correctAnswer = num1 * num2;
  } else {
    correctAnswer = num1 / num2;
  }

  let userAnswer = Number(prompt(`Реши пример: ${num1} ${operation} ${num2}`));

  if (userAnswer === correctAnswer) {
    alert('Верно!');
  } else {
    alert(`Ошибка. Правильный ответ: ${correctAnswer}`);
  }
}

// игра «Переверни текст»

function reverseTextGame() {
  let text = prompt('Введите текст');

  if (text === null) {
    return;
  }

  let reversed = text.split('').reverse().join('');
  alert(reversed);
}

// игра «Камень, ножницы, бумага»

function rockPaperScissorsGame() {
  const choices = ['камень', 'ножницы', 'бумага'];
  const userChoice = prompt('Выберите: камень, ножницы или бумага')?.toLowerCase();

  if (!choices.includes(userChoice)) {
    alert('Некорректный выбор');
    return;
  }

  const computerChoice = choices[Math.floor(Math.random() * choices.length)];

  let result = '';

  if (userChoice === computerChoice) {
    result = 'Ничья';
  } else if (
    (userChoice === 'камень' && computerChoice === 'ножницы') ||
    (userChoice === 'ножницы' && computerChoice === 'бумага') ||
    (userChoice === 'бумага' && computerChoice === 'камень')
  ) {
    result = 'Вы победили';
  } else {
    result = 'Вы проиграли';
  }

  alert(`Ваш выбор: ${userChoice}\nВыбор компьютера: ${computerChoice}\n${result}`);
}

// игра «Генератор случайных цветов»
const footer = document.querySelector('.footer');

function randomColorGame() {
  const color = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
  footer.style.backgroundColor = color;
}

document.querySelector('.button_guess').addEventListener('click', guessNumberGame);
document.querySelector('.button_math').addEventListener('click', simpleArithmeticGame);
document.querySelector('.button_reverse').addEventListener('click', reverseTextGame);
document.querySelector('.button_rps').addEventListener('click', rockPaperScissorsGame);
document.querySelector('.button_color').addEventListener('click', randomColorGame);
document.querySelector('.button_quiz').addEventListener('click', quizGame);