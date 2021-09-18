const getMinutesToHours = (time) => {
    // getMinutesToHours
    const parseTime = (time) => {
        if (time <= 9) {
            return `0${time}`;
        } else {
            return `${time}`;
        }
    }

    let start = 8;
    let hours = Math.floor(time / 60);
    let minutes = Math.floor(time - (60 * hours));

    if ((start + hours) < 10) {
        return ('0' + (start + hours) + ':' + parseTime(minutes));
    } else {
        return ((start + hours) + ':' + parseTime(minutes));
    }
}

const getHoursToMinutes = (time) => {
    return ((+time.split(':')[0] - 8) * 60) + +time.split(':')[1];
}

// console.log(getMinutesToHours(120))

/////////////// close

const closeModal = () => {
    const modal = document.querySelector('.modal');
    modal.classList.remove('active')
}

/////////////// close

/////////////// add property


const addProperty = (e) => {
    e.preventDefault();
    const form = document.querySelector('#form');

    const { title, start, duration, color } = form;

    if ((getHoursToMinutes(start.value) + +duration.value) < 540 && (getHoursToMinutes(start.value)) >= 0) {
        const event = {
            start: getHoursToMinutes(start.value),
            duration: +duration.value,
            title: title.value,
            background: color.value,
        }
        eventLists.push(event)
        renderEvents();
        start.value = '';
        duration.value = '';
        title.value = '';
        color.innerHTML = '';
    } else {
        console.log('Событие должно заканчиваться не позже 17:00 и начинаться не раньше 08:00')
    }
}

form.addEventListener('submit', addProperty)

/////////////// add property

/////////////// render events

const renderEvents = () => {
    const timeHtml = document.querySelectorAll('.event__wrap');
    ///////////
    const removeEvents = () => {
        const events = document.querySelectorAll('.event');
        events.forEach((item) => {
            item.remove();
        })
    }

    removeEvents()


    for (let i = 0; i < eventLists.length; i++) {
        let a = +getMinutesToHours(eventLists[i].start).split(':').join('');
        for (let k = 0; k < timeHtml.length; k++) {
            let b = +timeHtml[k].getAttribute('data-time').split(':').join('');
            if (a >= b && a < b + 30) {
                if ((a - b) < 17) {
                    const event = document.createElement('div');
                    event.innerHTML = '';
                    event.classList.add('event');
                    event.innerHTML = `
                    <div class="event__content">
                            <span>${eventLists[i].title}</span>
                            <button class="btn btn__event-edit" data-title="${eventLists[i].title}">edit</button>
                        </div>
                    `
                    event.style.background = `${eventLists[i].background}`;
                    event.style.top = `${a - b}px`;
                    event.style.height = `${eventLists[i].duration * 2}px`;
                    timeHtml[k].append(event);
                } else {
                    const event = document.createElement('div');
                    event.classList.add('event');
                    event.innerHTML = '';

                    event.innerHTML = `
                        <div class="event__content">
                            <span>${eventLists[i].title}</span>
                            <button class="btn btn__event-edit" data-title="${eventLists[i].title}">edit</button>
                        </div>
                    `
                    event.style.background = eventLists[i].background;
                    event.style.top = `-${(eventLists[i].duration - eventLists[i].start) * 2}px`;
                    event.style.height = `${eventLists[i].duration * 2}px`;
                    timeHtml[k + 1].append(event);
                }
            }
        }
    }
}

renderEvents();

/////////////// render events

/////////////// show modal
const events = document.querySelector('.container');

const showModal = (e) => {
    const modal = document.querySelector('.modal');
    const modalContent = document.querySelector('.modal__wrap');
    const modalClose = document.querySelector('.modal__close');

    if (e.target.localName === 'span') {
        let object = eventLists.filter((item) => {
            return item.title === e.target.innerText
        })

        modal.classList.toggle('active');
        modalClose.addEventListener('click', closeModal);
        modalContent.innerHTML = ''

        object.forEach((item) => {
            let divWrap = document.createElement('div');
            divWrap.classList.add('modal__wrap');
            divWrap.innerHTML = `
                    <p>Title: ${item.title}</p>
                    <p>Start: ${getMinutesToHours(item.start)}</p>
                    <p>Duration: ${item.duration} min</p>
                    <button class="delete__property" data-title="${item.title}">delete</button>
            `;
            modalContent.append(divWrap);
        });
    }
}

events.addEventListener('click', showModal);

/////////////// show modal

///////////// delete

const deletProperty = (e) => {
    if (e.target.className === 'delete__property') {
        let obj = eventLists.findIndex((item) => {
            if (item.title === e.target.dataset.title) {
                return item;
            } else {
                return false;
            }
        })
        eventLists.splice(obj, 1);
        closeModal();
        renderEvents();
    }
}

document.querySelector('.modal').addEventListener('click', deletProperty)

///////////// delete

/////////////// alertEvent
const getMaxTime = () => {
    let max = eventLists[0].start;
    eventLists.forEach((item) => {
        if (item.start > max) {
            max = item.start
        }
    })

    return max;
}

getMaxTime()


const alertEvent = setInterval(() => {

    const parseTime = (string) => {
        const date = new Date();
        date.setHours(string.split(':')[0]);
        date.setMinutes(string.split(':')[1]);
        date.setSeconds(string.split(':')[2]);

        return date;
    }

    eventLists.forEach((item) => {
        let alertBlock = document.querySelector('.modal__alert');

        if (new Date() >= parseTime(`${getMinutesToHours(getMaxTime())}:00`)) {
            clearInterval(alertEvent);
        }

        let p = document.createElement('p');
        if ((new Date() - parseTime(`${getMinutesToHours(item.start)}:00`)) === 0) {
            p.innerHTML = `${item.title} - начинается`;

            alertBlock.append(p);
            alertBlock.classList.add('active');

            setTimeout(() => {
                alertBlock.classList.remove('active');
                alertBlock.innerHTML = '';
            }, 4000);

        } else {
            console.log(false)
        }

    })
}, 1000);
/////////////// alertEvent


/////////////// edit

const editEvent = (e) => {
    const form = document.querySelector('#form');
    const { title, start, duration, color } = form;
    const btnSubmit = document.querySelector('.btn__submit');
    const btnEdit = document.querySelector('.btn__edit-form');

    const findIndex = eventLists.findIndex((item) => {
        return e.target.getAttribute('data-title') === item.title;
    })

    const obj = eventLists.filter((item, index) => {
        return e.target.getAttribute('data-title') === item.title;
    })

    console.log(obj)

    obj.forEach((item) => {
        title.value = item.title;
        start.value = getMinutesToHours(item.start);
        duration.value = item.duration;
        color.value = item.background;
    })

    btnSubmit.style.display = 'none'
    btnEdit.classList.add('active')

    const changeEvent = (e) => {
        e.preventDefault()
        let obj1 = {
            start: getHoursToMinutes(start.value),
            duration: +duration.value,
            title: title.value,
            background: color.value,
        };
        console.log(obj1)

        eventLists.splice(findIndex, 1, obj1);

        btnSubmit.style.display = 'block';
        btnEdit.classList.remove('active');

        renderEvents();
        // title.value = '';
        // start.value = '';
        // duration.value = '';
        // color.value = '';
    }

    btnEdit.addEventListener('click', changeEvent);
}

events.addEventListener('click', editEvent)
/////////////// edit





