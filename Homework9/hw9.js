//  task 1
const title = document.querySelector('#title');
const toggleBtn = document.querySelector('#toggleBtn');

toggleBtn.addEventListener('click', () => {
  if (title.style.display === 'none') {
    title.style.display = 'block';
    toggleBtn.textContent = 'Скрыть';
  } else {
    title.style.display = 'none';
    toggleBtn.textContent = 'Показать';
  }
});

//  task 2
const text = document.querySelector('#text');
const colorBtn = document.querySelector('#colorBtn');

colorBtn.addEventListener('click', () => {
  text.style.color = 'blue';
});

//  task 3
const header = document.querySelector('#header');
const textBtn = document.querySelector('#textBtn');

textBtn.addEventListener('click', () => {
  header.textContent = 'Привет, мир!';
});

//  task 4
const descriptions = document.querySelectorAll('.description');

descriptions.forEach((item) => {
  item.textContent = 'Измененный текст';
});

//  task 5
const descriptions_ = document.querySelectorAll('.description');

descriptions_.forEach((item) => {
  item.textContent = 'Новый текст';
});

//  task 6
const addBtn = document.querySelector('#addBtn');

addBtn.addEventListener('click', () => {
  const p = document.createElement('p');
  p.textContent = 'Новый абзац';
  document.body.appendChild(p);
});

//  task 7
const removeBtn = document.querySelector('#removeBtn');

removeBtn.addEventListener('click', () => {
  const firstDescription = document.querySelector('.description');
  if (firstDescription) {
    firstDescription.remove();
  }
});