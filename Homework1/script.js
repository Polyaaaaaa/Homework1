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

// квиз

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
