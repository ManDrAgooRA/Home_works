function hexToRgb(hex) {
    hex = hex.replace(/^#/mg, ' ')
    let bigint = parseInt(hex, 16);
    let r = (bigint >> 16) & 255;
    let g = (bigint >> 8) & 255;
    let b = bigint & 255;

    return r + ", " + g + ", " + b;
}

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


/////////////// close
const closeModal = () => {
    const modal = document.querySelector('.modal');
    modal.classList.remove('active')
}
/////////////// close


/////////////// add property
const form = document.querySelector('#form__add');

const addProperty = (e) => {
    e.preventDefault();

    const { title, start, duration, color } = form;

    if ((getHoursToMinutes(start.value) + +duration.value) < 540 && (getHoursToMinutes(start.value)) >= 0) {
        const event = {
            id: Event.id++,
            start: getHoursToMinutes(start.value),
            duration: +duration.value,
            title: title.value,
            background: color.value,
        }

        eventLists.push(new Event(event))

        renderEvents();

        start.value = '';
        duration.value = '';
        title.value = '';
        color.value = '';

    } else {
        alert('Событие должно заканчиваться не позже 17:00 и начинаться не раньше 08:00')
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

    removeEvents();

    for (let i = 0; i < eventLists.length; i++) {
        let objectStart = +getMinutesToHours(eventLists[i].start).split(':').join('');
        for (let k = 0; k < timeHtml.length; k++) {
            let htmlStart = +timeHtml[k].getAttribute('data-time').split(':').join('');
            if (objectStart >= htmlStart && objectStart < htmlStart + 30) {
                if ((objectStart - htmlStart) < 17) {
                    const event = document.createElement('div');
                    event.innerHTML = '';
                    event.classList.add('event');
                    event.innerHTML = `
                    <div class="event__content">
                            <span data-id="${eventLists[i].id}">${eventLists[i].title}</span>
                            <button class="btn btn__event-edit" data-id="${eventLists[i].id}">edit</button>
                        </div>
                    `
                    event.style.background = `rgba(${hexToRgb(eventLists[i].background)}, 0.5)`;
                    event.style.borderLeft = `4px solid rgba(${hexToRgb(eventLists[i].background)})`
                    event.style.top = `${objectStart - htmlStart}px`;
                    event.style.height = `${eventLists[i].duration * 2}px`;
                    timeHtml[k].append(event);

                } else {
                    const event = document.createElement('div');
                    event.classList.add('event');
                    event.innerHTML = '';

                    event.innerHTML = `
                        <div class="event__content">
                            <span data-id="${eventLists[i].id}">${eventLists[i].title}</span>
                            <button class="btn btn__event-edit" data-id="${eventLists[i].id}">edit</button>
                        </div>
                    `
                    event.style.background = `rgba(${hexToRgb(eventLists[i].background)}, 0.5)`;
                    event.style.borderLeft = `4px solid rgba(${hexToRgb(eventLists[i].background)})`
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
            return item.id === +e.target.getAttribute('data-id')
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
                    <button class="btn delete__property" data-title="${item.title}">delete</button>
            `;
            modalContent.append(divWrap);
        });
    }
}

events.addEventListener('click', showModal);
/////////////// show modal


///////////// delete
const deletProperty = (e) => {
    if (e.target.className === 'btn delete__property' || e.target.id === 'modal') {
        let obj = eventLists.findIndex((item) => {
            if (item.title === e.target.dataset.title) {
                return item;
            } else {
                return false;
            }
        })

        eventLists.splice(obj, 1);
        closeModal();
        document.querySelector('.form__edit').classList.remove('active')
        renderEvents();
    }
}

document.querySelector('.modal').addEventListener('click', deletProperty)
///////////// delete


/////////////// alertEvent
// const getMaxTime = () => {
//     let max = eventLists[0].start;
//     eventLists.forEach((item) => {
//         if (item.start > max) {
//             max = item.start
//         }
//     })

//     return max;
// }

// getMaxTime()


// const alertEvent = setInterval(() => {

//     const parseTime = (string) => {
//         const date = new Date();
//         date.setHours(string.split(':')[0]);
//         date.setMinutes(string.split(':')[1]);
//         date.setSeconds(string.split(':')[2]);

//         return date;
//     }

//     eventLists.forEach((item) => {
//         let alertBlock = document.querySelector('.modal__alert');

//         if (new Date() >= parseTime(`${getMinutesToHours(getMaxTime())}:00`)) {
//             clearInterval(alertEvent);
//         }

//         let p = document.createElement('p');
//         if ((new Date() - parseTime(`${getMinutesToHours(item.start)}:00`)) === 0) {
//             p.innerHTML = `${item.title} - начинается`;

//             alertBlock.append(p);
//             alertBlock.classList.add('active');

//             setTimeout(() => {
//                 alertBlock.classList.remove('active');
//                 alertBlock.innerHTML = '';
//             }, 4000);

//         } else {
//             console.log(false)
//         }

//     })
// }, 1000);
/////////////// alertEvent


/////////////// edit
const btnEdit = document.querySelector('.btn__event-edit');
const btnEditEvent = document.querySelector('.btn__edit-form');

const editEvent = (e) => {
    const form = document.querySelector('.form__edit');
    const formValue = document.querySelector('#form__edit');
    const { title, start } = formValue;

    const showForm = () => {
        if (e.target.classList[1] === 'btn__event-edit') {
            form.classList.add('active');
        }
    }

    if (e.target.className === 'btn btn__event-edit') {
        const findIndex = (e) => {
            return eventLists.findIndex((item) => {
                return +e.target.getAttribute('data-id') === item.id;
            })
        }

        btnEditEvent.setAttribute('data-id', eventLists[findIndex(e)].id);

        const fillForm = (e) => {

            title.value = eventLists[findIndex(e)].title;
            start.value = getMinutesToHours(eventLists[findIndex(e)].start);
        }

        const hideForm = () => {
            form.classList.remove('active');
        }

        const changeEvent = (e) => {
            e.preventDefault();
            eventLists.forEach((item) => {
                if (item.id === +btnEditEvent.getAttribute('data-id')) {
                    item.title = title.value;
                    item.start = getHoursToMinutes(start.value);
                }
            })
            renderEvents();
            hideForm();
        }

        findIndex(e);
        showForm();
        formValue.addEventListener('submit', changeEvent);
        fillForm(e);
    }

}

events.addEventListener('click', editEvent)
/////////////// edit


