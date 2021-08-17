function counterFunction() {
    let count = 0;
    return function (a) {
        count = count + a;
        return count;
    }
}


// let counter = counterFunction();
// console.log(counter(3));
// console.log(counter(5));
// console.log(counter(228));


function getUpdatedArrFunction() {
    let arr = [];
    return function (a) {
        if (a) {
            arr.push(a);
            return arr;
        } else {
            arr.length = 0;
            return arr;
        }
    }
}

let getUpdatedArr = getUpdatedArrFunction();

// console.log(getUpdatedArr(3));
// console.log(getUpdatedArr(5));
// console.log(getUpdatedArr({ name: 'Vasya' }));
// console.log(getUpdatedArr());
// console.log(getUpdatedArr(4));

function getTimeFunction() {
    let start = new Date().getTime();
    let count = 0;

    return () => {
        if (count === 0) {
            count++
            return 'Enabled';
        }

        let endTime = new Date().getTime();
        let result = Math.round((endTime - start) / 1000);
        start = endTime;
        return result;
    }
}

let getTime = getTimeFunction();


const time = 70;
const timer = (sec) => {

    let interval = setInterval(() => {
        if (sec <= 0) {
            clearInterval(interval);
            console.log("Time End");
            return false;
        }

        let minutes = Math.floor(sec % 3600 / 60);
        let seconds = Math.floor(sec % 60);

        const checkTime = (num) => {
            if (num <= 9) {
                return `0${num}`;
            } else {
                return num;
            }

        }
        console.log(`${checkTime(minutes)}:${checkTime(seconds)}`);
        sec--
    }, 1000)
}

// timer(time)
