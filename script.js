const citiesAndCountries = {
    'Киев': 'Украина',
    'Нью-Йорк': 'США',
    'Амстердам': 'Нидерланды',
    'Берлин': 'Германия',
    'Париж': 'Франция',
    'Лиссабон': 'Португалия',
    'Вена': 'Австрия',
};

const countries = (obj) => {
    const result = [];

    for (let key in obj) {
        result.push(`${key} - это ${obj[key]}`);
    }

    return result;
}


const getArray = () => {
    const amount = 15;
    const arrayContainter = [];

    for (let i = 0; i < amount; i++) {
        if (i % 3 === 0) {
            let arr = new Array();

            for (let k = 1; k <= 3; k++) {
                arr.push(i + k);
            }

            arrayContainter.push(arr)
        }
    }

    return arrayContainter;
}


const namesOfDays = {

    ru: ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
    en: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
}

const getNameOfDay = (lang, day) => {

    return namesOfDays[lang][day - 1];

}


let arr = [12, 898, 899, 900,];

const minValueOfArray = (arr) => {
    let testArr = arr
    let arrForMinValue = [];
    let minFirstValue = arr[0];

    for (let i = 0; i < testArr.length; i++) {

        if (minFirstValue > testArr[i]) {
            minFirstValue = testArr[i];
        }
    }

    let index = testArr.indexOf(minFirstValue);
    arrForMinValue.push(minFirstValue);

    testArr.splice(index, 1);

    let changedArr = testArr;
    let minSecondValue = changedArr[0];

    for (let i = 0; i < changedArr.length; i++) {

        if (minSecondValue > changedArr[i]) {
            minSecondValue = changedArr[i];
        }
    }

    arrForMinValue.push(minSecondValue);

    return arrForMinValue.reduce((a, b) => a + b);
}


const testing = (arr) => {
    let reversArr = arr.reverse();
    let counter = 0;

    for (let i = 0; i < reversArr.length; i++) {
        let pow = (1 * (2 ** i));

        if (reversArr[i] === 1) {
            counter += pow;
        }

    }

    return counter;
}
