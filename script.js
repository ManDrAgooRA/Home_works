class Student {

    constructor(name, surname, ratingPoint, schoolPoint) {
        this.id = Student.id++;
        this.name = name;
        this.surname = surname;
        this.ratingPoint = ratingPoint;
        this.schoolPoint = schoolPoint;
        this.isSelfPayment = true;
        Student.listOfStudents.push(this);
    }

    static id = 1;

    static listOfStudents = [];
    static studentsOnBudget = [];

    static getComparisonPoint() {
        this.listOfStudents.sort((a, b) => {
            return a.ratingPoint - b.ratingPoint || a.schoolPoint - b.schoolPoint;
        }).reverse();

        for (let i = 0; i < 5; i++) {
            this.studentsOnBudget.push(this.listOfStudents[i]);
            this.studentsOnBudget[i].isSelfPayment = false
        }
    }
}

const createStudentsFromArr = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        new Student(...Object.values(arr[i]));
    }

};

const studentsConstructArr = createStudentsFromArr(studentArr);
Student.getComparisonPoint();

class CustomString {
    reverse(str) {
        let reversedString = '';
        for (let i = 0; i < str.length; i++) {
            reversedString += (str[str.length - (1 + i)])
        }

        return reversedString;
    }

    ucFirst(str) {
        let upperCaseLetter = str[0].toUpperCase();

        for (let i = 1; i < str.length; i++) {
            upperCaseLetter += str[i];
        }

        return upperCaseLetter;
    }

    ucWords(str) {
        let changedString = '';
        let firstLetters = [0];

        for (let i = 0; i < str.length; i++) {
            if (str[i] === ' ') {
                firstLetters.push(i + 1)
            } else {
                firstLetters.push(false)
            }
        }

        for (let i = 0; i < str.length; i++) {
            if (i === firstLetters[i]) {
                let changedLetter = str[i].toUpperCase();
                changedString += changedLetter;
            } else {
                changedString += str[i];
            }

        }
        return changedString;
    }
}

const myString = new CustomString();

// console.log(myString.reverse('qwerty'));
// console.log(myString.ucFirst('qwerty'));
// console.log(myString.ucWords('master qwerty qwerty Qwerty task'));


class Validator {
    checkIsEmail(str) {
        let dot = str.split('@');
        let regExp = /[a-zA-Z0-9]{2,20}@[a-zA-Z]{2,10}\.(\w{3}\.\w{2}|\w{2,3})$/gm;

        console.log();
        if (dot.length <= 2) {
            if (str.match(regExp)) {
                return true;
            } else {
                return false;
            }
        } else {
            return false;
        }
    }

    checkIsDomain(str) {
        let regExp = /(\w\w\.\w\w\w|\w\w\.\w\w)$/gm;
        if (str.match(regExp)) {
            return true;
        } else {
            return false;
        }
    }

    checkIsDate(str) {
    }

    checkIsPhone(str) {
        let regExp = /^\+?38(\s|\S|\D\W)0\d{2}\)(\s|\S|\D\W)\d{3}\-\d{2}-\d{2}/;
        if (str.match(regExp)) {
            return true;
        } else {
            return false;
        }
    }
}

const validator = new Validator();

// console.log(validator.checkIsEmail('vasya.pupkin@gmail.com'));
// console.log(validator.checkIsEmail('xamomi2872@alltekia.ua'));
// console.log(validator.checkIsPhone('+38 (066) 937-99-92'));
