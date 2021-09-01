class Candidate {
    constructor(data) {
        this.id = data._id;
        this.phone = data.phone;
        this.registered = data.registered;
        this.balance = data.balance;
        this.eyeColor = data.eyeColor;
    }
}

const arrOfCandidate = condidateArr.map((item) => { return new Candidate(item) });

const searchCandidatesByPhoneNumber = phone => {

    const parsePhone = (item, regExp, replaceValue) => {
        return item.replace(regExp, replaceValue);
    }

    const regExp = /\[^0-9]|\D/g;
    const phoneValue = parsePhone(phone, regExp, '');

    if (phoneValue.length < 1) return false;

    const arr = arrOfCandidate.filter((item) => {
        if (parsePhone(item.phone, regExp, '').includes(phoneValue)) {
            return item;
        }
    })

    if (arr.length === 0) return 'phone was not found'

    return arr;

}

searchCandidatesByPhoneNumber('+1 (803) 433-2863');

const getCandidateById = id => {
    const regExp = /\W/g;
    const idValue = id.replace(regExp, '');


    arrOfCandidate.forEach((item) => {
        item.registered = item.registered.split('T')[0].split('-').reverse().join('/')
    })

    const arr = arrOfCandidate.filter((item) => {
        if (item.id === idValue) {
            return item
        }
    })

    return arr;

}

getCandidateById('5e216b(---)c9a6059760578aefa4@');


const sortCandidatesArr = sortBy => {

    const parseBalance = (item) => {
        return parseFloat(item.replace(/\W/g, ''))
    }

    const arr = condidateArr.map((item) => { return item });

    if (sortBy === 'asc') {
        arr.sort((a, b) => {
            return parseBalance(a.balance) - parseBalance(b.balance);
        })
    }

    if (sortBy === 'desc') {
        arr.sort((a, b) => {
            return parseBalance(b.balance) - parseBalance(a.balance);
        })
    }

    return arr;
}

sortCandidatesArr();


const getEyeColorMap = () => {

    return condidateArr.reduce((acc, item) => {

        if (!acc.hasOwnProperty(item.eyeColor)) {
            acc[item.eyeColor] = [];
        }

        acc[item.eyeColor].push(item)

        return acc

    }, {})

}

getEyeColorMap();