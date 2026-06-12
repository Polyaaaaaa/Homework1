let password = 'пароль'
let input = prompt('Введите пароль: ')


if (input === password) {
    alert ('Пароль введен верно')
} else {
    alert('Пароль введен неправильно')
}

// task 2

let c = 5;

function lessMore(number) {
    if (number > 0 && number < 10) {
        console.log('Верно');
    } else {
        console.log('Неверно');
    }
}

lessMore(c);
lessMore(0)
lessMore(10)
lessMore(-3)
lessMore(2)

// task 3

let d = 355;
let e = 75;

if (d > 100 || e > 100) {
    console.log('Верно')
} else {
    console.log('Неверно')
}

// task 4

let a = '2';
let b = '3';
// Код выше изменять менять нельзя. Чтобы решить задачу исправьте код ниже:
alert(Number(a) + Number(b));

// task 5

let monthNumber = Number(prompt("Введите номер месяца (от 1 до 12):"));

// Проверка: номер месяца должен быть от 1 до 12
if (monthNumber < 1 || monthNumber > 12) {
    console.log("Ошибка: номер месяца должен быть от 1 до 12");
} else {
    switch (monthNumber) {
        case 12:
        case 1:
        case 2:
            alert('зима')
            console.log("зима");
            break;

        case 3:
        case 4:
        case 5:
            alert('весна')
            console.log("весна");
            break;

        case 6:
        case 7:
        case 8:
            alert('лето')
            console.log("лето");
            break;

        case 9:
        case 10:
        case 11:
            alert('осень')
            console.log("осень");
            break;

        default:
            alert('Ошибка: некорректный номер месяца')
            console.log("Ошибка: некорректный номер месяца");
    }
}