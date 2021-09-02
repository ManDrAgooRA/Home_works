//task 1


// const arr = ['Vasya', 'Petya', 'Alexey']

const removeUser = (arr, index) => {
    arr.splice(index, 1);
}

// removeUser(arr, 1);


//task 2


// const obj = { name: 'Vasya', age: 1 }

const getAllKeys = (obj) => {

    return Object.keys(obj);
}

// console.log(getAllKeys(obj));



//task 3


const getAllValues = (obj) => {
    return Object.values(obj);
}

// console.log(getAllValues(obj))


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
const condidate = condidateArr.map((item) => new Condidate(item))

condidate[0].state();


//task 6


const getCompanyNames = () => {

    return condidateArr
        .map((item) => {
            return item.company
        })
        .filter((item, index, arr) => {
            return arr.indexOf(item) === index;
        })

}

getCompanyNames();


//task 7


const getUsersByYear = (year) => {
    const arr = [];

    condidateArr.forEach((item) => {

        if (+item.registered.split('-')[0] === year) {
            arr.push(item._id)
        }

    })

    return arr;
}

getUsersByYear(2016);

//task 8

const getCondidatesByUnreadMsg = (message) => {

    return condidate.filter((item) => {
        return +item.greeting.split(' ')[5] === message
    })

}

getCondidatesByUnreadMsg(4);


//task 9 

const getCondidatesByGender = (gender) => {
    return condidate.filter((item) => {
        return item.gender === gender;
    })
}

getCondidatesByGender();

//task 10

const reduce = (arr, accumulator) => {

    if (!accumulator) {
        accumulator = 0;
    }

    if (Array.isArray(arr)) {
        arr.forEach((item) => {
            accumulator += item
        })

        return accumulator;

    } else {
        return ('not Array')
    }
}

reduce([1, 2, 3, 4, 5, 6, 7], 2);

// console.log(reduce([1, 2, 3, 4, 5, 6, 7]))


const join = (arr, separator = ',') => {

    if (Array.isArray(arr)) {
        let str = '';

        arr.forEach((item, index) => {
            str += (
                typeof arr[index] === 'string' ||
                typeof arr[index] === 'number'
            ) ? arr[index] : '';

            if (index < arr.length - 2) {
                str += separator
            }

            str += ''

        })

        return str

    } else {
        return ('not Array')
    }
}

join([8, 2], '-')