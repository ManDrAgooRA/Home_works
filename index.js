//task 1


// const arr = ['Vasya', 'Petya', 'Alexey']

const removeUser = (arr, index) => {
    arr.splice(index, 1);
}

// removeUser(arr, 1);


//task 2


// const obj = { name: 'Vasya', age: 1 }

const getAllKeys = (obj) => {
    const arrOfAllKeys = [];
    for (let key in obj) {
        arrOfAllKeys.push(key)
    }

    return arrOfAllKeys;
}

// getAllKeys(obj);


//task 3


const getAllValues = (obj) => {
    const arrOfAllvalue = [];
    for (let key in obj) {
        arrOfAllvalue.push(obj[key]);
    }

    return arrOfAllvalue;
}

// getAllValues(obj)


//task 4


const obj = {
    id: 3,
    name: 'Vasya'
}

const secondObj = {
    id: 4,
    name: 'Katya'
}

const arr = [
    {
        id: 1,
        name: 'Kolya'
    },
    {
        id: 2,
        name: 'Petya'
    },
];

const insertIntoarr = (obj, index) => {

    if (index >= 1) {
        arr.splice(index - 1, 0, obj);
    } else {
        console.error('Index not available')
    }

}

insertIntoarr(obj, 2)
insertIntoarr(secondObj, 1)


//task 5


class Condidate {
    constructor(obj) {
        this.address = obj.address;
        this.greeting = obj.greeting;
        this.gender = obj.gender;
    }

    state() {
        let stateName = this.address.split(',')
        return stateName[stateName.length - 2].trim();
    }
}

const condidate = new Condidate(condidateArr[0]);
condidate.state();


//task 6


const getCompanyNames = () => {
    const set = new Set();
    const arrOfCompanyName = [];

    for (let i = 0; i < condidateArr.length; i++) {
        set.add(condidateArr[i].company)
    }

    set.forEach((value) => {
        arrOfCompanyName.push(value);
    });

    return arrOfCompanyName;
}

getCompanyNames();


//task 7


const getUsersByYear = (year) => {
    const arrOfDateRegister = [];
    const arrOfId = [];

    condidateArr.forEach((item) => {
        arrOfDateRegister.push(item.registered.split('-')[0])
    })

    for (let i = 0; i < condidateArr.length; i++) {
        if (+arrOfDateRegister[i] === year) {
            arrOfId.push(condidateArr[i]._id)
        }
    }

    return arrOfId;
}

getUsersByYear(2016);

//task 8

const getCondidatesByUnreadMsg = (message) => {
    const arrayOfExamples = [];

    for (let i = 0; i < condidateArr.length; i++) {
        if (+condidateArr[i].greeting.split(' ')[5] === message) {
            let condidate = new Condidate(condidateArr[i]);
            arrayOfExamples.push(condidate);
        }
    }

    return arrayOfExamples;

}

getCondidatesByUnreadMsg(4);


//task 9 

const getCondidatesByGender = (gender) => {
    const arrayOfExamples = [];

    for (let i = 0; i < condidateArr.length; i++) {
        if (condidateArr[i].gender === gender) {
            let condidate = new Condidate(condidateArr[i]);
            arrayOfExamples.push(condidate);
        }
    }

    return arrayOfExamples;
}

getCondidatesByGender();

//task 10

const reduce = (arr, accumulator) => {

    if (!accumulator) {
        accumulator = '0';
    }

    if (Array.isArray(arr)) {
        for (let i = 0; i < arr.length; i++) {
            accumulator += arr[i];
        }

        return accumulator;

    } else {
        return ('not Array')
    }
}

reduce([1, 2, 3, 4, 5, 6, 7], 2);


const join = (arr, separator) => {

    let string = '';

    if (!separator || separator === '') {
        separator = ',';
    }

    if (Array.isArray(arr)) {
        for (let i = 0; i < arr.length; i++) {
            if (i + 1 !== arr.length) {
                string += arr[i] + separator;
            } else {
                string += arr[i];
            }
        }

        return string;

    } else {
        return ('not Array')
    }
}

join(['s1', 's2', 's3', 's4', null], '');
