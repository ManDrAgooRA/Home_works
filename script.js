const rederInputs = () => {
    let button = document.querySelector('.button')
    let count = +prompt('enter count of inputs');

    const array = new Array(count).fill(1).forEach((item, index, arr) => {
        let input = document.createElement('input');
        input.classList = 'input-item'
        input.value = `Input ${index + 1}`;

        if (index % 2 == 0) {
            input.classList.add('background-mark');
        }

        if ((index + 1) % 3 == 0) {
            input.value = '';
            input.setAttribute("placeholder", "Some text");
        }

        if (index == arr.length - 1) {
            input.classList.add('margin-zero');
        }

        button.before(input)

    })
}

rederInputs();

const timer = () => {
    let out = document.querySelector('.time h2');
    let startTime = document.querySelector('#time-start');
    let stopTime = document.querySelector('#time-stop');

    const checkTime = (num) => {
        if (num <= 9) {
            return `0${num}`
        } else {
            return `${num}`;
        }
    }

    const startInterval = () => {
        return interval = setInterval(() => {
            let hours = new Date().getHours();
            let minutes = new Date().getMinutes();
            let sec = new Date().getSeconds();

            out.innerHTML = `${checkTime(hours)}:${checkTime(minutes)}:${checkTime(sec)}`

        }, 1000)

    }

    const stopInterval = () => {
        clearInterval(interval)
    }

    startTime.addEventListener('click', startInterval)
    stopTime.addEventListener('click', stopInterval)

}

timer();


const changeColor = () => {
    let list = document.querySelectorAll('#main p');

    list[list.length - 1].classList = 'red';
}

changeColor();

const channgeBlock = () => {
    let wrapper = document.querySelector('#wrapper');
    let footer = document.querySelector('#footer');

    wrapper.append(footer);
}

channgeBlock()

const prouctLists = () => {
    const INGREDIENTS = {
        "cocoa": ["cocoa powder", "milk", "sugar"],
        "cappuccino": ["milk", "coffee"],
        "smoothie": ["banana", "orange", "sugar"],
        "matcha frappe": ["matcha", "milk", "ice"]
    }

    let listOfItems = document.querySelector('#menu')

    const renderItems = (e) => {
        let keys = Object.keys(INGREDIENTS);
        let listOfNumber = document.createElement('ol');

        if (!e.target.children[0]) {
            keys.forEach((item) => {
                if (e.target.innerText === item) {
                    INGREDIENTS[item].forEach((item) => {
                        let elements = document.createElement('li');
                        elements.append(`${item}`)
                        listOfNumber.append(elements)
                    })
                    e.target.append(listOfNumber);
                }
            })
        } else {
            e.target.children[0].remove();
        }
    }

    listOfItems.addEventListener('click', renderItems);
}

prouctLists();
