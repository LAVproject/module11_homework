// Функция показа в консоли обратного отчета от числа n
function countDown(n) {
    for (let i = n; i > 0; i--) {
        console.log(i);
    }
}

// Функция расчета процента от числа
function getPercents(percent, number) {
    return (percent / 100) * number;
}

// Функция выводит в консоль слово с заданным числом повторений
function repeatWord(word, count) {
    if (count !== 0) {
        let result = '';

        for (let i = 1; i <= count; i++) {
            const str = `${word}${i}`

            if (i !== count) {
                result += str + `, `;
            }
            else {
                result += str;
            }
        }

        console.log(result);
    }
}

// Функция, которая возвращает функцию addA, которая принимает b и возвращает a + b.
function createAdder(a) {
    return function addA(b) {
        return a + b;
    };
}

// Функция возвращает название месяца в зависимости от введенного порядкового номера месяца
function getMonth(n) {
    if (n === 1) {
        return 'январь';
    }
    else if (n === 2) {
        return 'февраль';
    }
    else if (n === 3) {
        return 'март';
    }
    else if (n === 4) {
        return 'апрель';
    }
    else if (n === 5) {
        return 'май';
    }
    else if (n === 6) {
        return 'июнь';
    }
    else if (n === 7) {
        return 'июль';
    }
    else if (n === 8) {
        return 'август';
    }
    else if (n === 9) {
        return 'сентябрь';
    }
    else if (n === 10) {
        return 'октябрь';
    }
    else if (n === 11) {
        return 'ноябрь';
    }
    else if (n === 12) {
        return 'декабрь';
    }
    else {
        return 'Некорректный номер месяца';
    }
}


module.exports = {countDown, getPercents, repeatWord, createAdder, getMonth};