class Candidate {
    constructor(data) {
        this.id = data._id;
        this.phone = data.phone;
        this.registered = data.registered;
        this.balance = data.balance;
        this.eyeColor = data.eyeColor;
    }
}

const arrOfCandidate = [];

for (let key in condidateArr) {
    arrOfCandidate.push(new Candidate(condidateArr[key]));
}

const searchCandidatesByPhoneNumber = phone => {
    const arr = [];
    const regExp = /\[^0-9]|\D/g;
    const phoneValue = phone.replace(regExp, '');

    if (phoneValue.length < 1) return false;

    for (let key in arrOfCandidate) {
        if (arrOfCandidate[key].phone.replace(regExp, '').includes(phoneValue)) {
            arr.push(arrOfCandidate[key]);
        }
    }

    if (arr.length === 0) return 'phone was not found'

    return arr
}

searchCandidatesByPhoneNumber('+1 (803) 433-2863');

const getCandidateById = id => {
    const arr = [];
    const regExp = /\W/g;
    const idValue = id.replace(regExp, '');
    let unFormatDate = ''
    let formatDate = '';

    for (let key in condidateArr) {
        if (condidateArr[key]._id === idValue) {
            unFormatDate = (condidateArr[key].registered.split('T'))
        }
    }

    let preFotmatDate = unFormatDate[0].split('-');

    for (let i = 0; i < preFotmatDate.length; i++) {
        formatDate += i < preFotmatDate.length - 1 ?
            `${preFotmatDate.reverse()[i]}/` :
            `${preFotmatDate.reverse()[i]}`;
    }

    for (let key in condidateArr) {
        if (condidateArr[key]._id === idValue) {
            condidateArr[key].registered = formatDate;
            arr.push(condidateArr[key]);
        }
    }

    return arr;
}

getCandidateById('5e216b(---)c9a6059760578aefa4@');

const sortCandidatesArr = sortBy => {
    let arr = [];

    for (let key in condidateArr) {
        arr.push((condidateArr[key]));
    }

    if (sortBy === 'asc') {
        arr.sort((a, b) => {
            return parseFloat(a.balance.replace(/\W/g, '')) - parseFloat(b.balance.replace(/\W/g, ''))
        })
    }

    if (sortBy === 'desc') {
        arr.sort((a, b) => {
            return parseFloat(b.balance.replace(/\W/g, '')) - parseFloat(a.balance.replace(/\W/g, ''))
        })
    }

    return arr;

}

sortCandidatesArr();

const getEyeColorMap = () => {
    let arr = [];
    let set = new Set();
    const colorsOfEyes = {};

    for (let key in arrOfCandidate) {
        set.add(arrOfCandidate[key].eyeColor);
    }

    set.forEach((item) => {
        arr.push(item)
        colorsOfEyes[item] = [];
    })


    for (let i = 0; i < arrOfCandidate.length; i++) {
        for (let k = 0; k < arr.length; k++) {
            if (arrOfCandidate[i].eyeColor == arr[k]) {
                colorsOfEyes[arr[k]].push(arrOfCandidate[i]);
            }
        }
    }

    return colorsOfEyes;
}

getEyeColorMap();