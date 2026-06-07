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