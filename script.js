function Emploee(id, name, surname, salary, workExperience, isPriveleges, gender) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.salary = salary;
    this.workExperience = workExperience;
    this.isPriveleges = isPriveleges;
    this.gender = gender;
}

const employeeObj = new Emploee(0, 'Valeriy', 'Zhmishenko', 1000, 10, true, 'male');

// const employeeObj = new Emploee(...arr);
// console.log(employeeObj);

Emploee.prototype.getFullName = function () {
    return `${this.surname} ${this.name}`
}


let createEmployesFromArr = (arr) => {
    let arrayContainer = [];
    const result = [];

    for (let i = 0; i < arr.length; i++) {
        let keys = Object.values(arr[i]);
        arrayContainer.push(keys);

        let obj = new Emploee(...arrayContainer[i]);
        result.push(obj)
    }

    return result;

}


// const emplyeeConstructArr = createEmployesFromArr(emplyeeArr);
// console.log(emplyeeConstructArr);

const getFullNamesFromArr = (arr) => {
    let arrOfFullNames = [];

    arr.map(item => arrOfFullNames.push(item.name + ' ' + item.surname));

    return arrOfFullNames;
}

// console.log(getFullNamesFromArr(emplyeeConstructArr));


const getMiddleSalary = (arr) => {
    let allSalary = 0;
    arr.map(item => allSalary += (item.salary));
    return Math.floor(allSalary / arr.length);
}

// console.log(getMiddleSalary(emplyeeConstructArr));

const getRandomEmployee = (arr) => {
    return arr[Math.floor(Math.random() * ((arr.length - 1) - 0 + 1)) + 0];
}

// console.log(getRandomEmployee(emplyeeConstructArr));

const employeeObject = new Emploee(...Object.values(emplyeeArr[0]));

Object.defineProperty(Emploee.prototype, 'fullInfo', {
    get: function () {
        let result = ''
        for (let key in this) {
            if (typeof (this[key]) !== 'function') {
                result += `${key} - ${this[key]}, `;
            }
        }

        return result;
    },

    set(value) {
        for (let key in value) {
            if (this.hasOwnProperty(key)) {
                this[key] = value[key]
            }
        }
    }
})

employeeObj.fullInfo = { name: 'name', surname: 'петренко', salary: 12, newProp: 'wp' }
