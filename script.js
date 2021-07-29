const fizBuz = () => {
    let container = '';

    for (let i = 1; i <= 10; i++) {
        if (i % 3 === 0) {
            container += 'FizBuz';
        } else if (i % 2 === 0) {
            container += 'Fiz';
        } else {
            container += 'Buz';
        }
        container += '\n';
    }
    return container;
}

const fuctorial = (number) => {
    let count = 1;

    for (i = number; i >= 1; i--) {
        count *= i;
    }
    return count;
}

const sheetsInReamPaper = 500;
const consumptionPerWeek = 1200;
const weeksAmount = 8;

const papperCalc = (reemPaperValue, consumption, week) => {
    let totalConsumption = consumption * week;

    if (totalConsumption % reemPaperValue) {
        return ((totalConsumption - totalConsumption % reemPaperValue) / reemPaperValue + 1);

    } else {
        return (totalConsumption / reemPaperValue);
    }
}


const roomsOnFloor = 3;
const floors = 9;
const roomNumber = 456;


const showPorch = (roomsOnFloor, floors, roomNumber) => {
    let allRoomsOnPorch = roomsOnFloor * floors;

    if (roomNumber % allRoomsOnPorch) {
        return ((roomNumber - roomNumber % allRoomsOnPorch) / allRoomsOnPorch) + 1;
    } else {
        return roomNumber / allRoomsOnPorch;
    }

};


const showFloor = (roomsOnFloor, floors, roomNumber, porch) => {
    let allRooms = ((roomNumber - roomNumber % roomsOnFloor) / roomsOnFloor) + 1;
    let floorValue = (floors * (porch - 1));

    if (roomNumber % roomsOnFloor) {

        return allRooms - floorValue;

    } else {

        return (roomNumber / roomsOnFloor) - (floors * (porch - 1));
    }
}


const medianNumber = 6;


const triangle = (triangleSize) => {

    let container = '';
    let triangleHeight = (triangleSize * 2);

    for (let i = 1; i <= triangleSize; i++) {

        let triangleWidth = (triangleSize - `${i}`);

        for (let k = 1; k <= (triangleHeight - 1); k++) {

            if (k > triangleWidth && k < (triangleHeight - triangleWidth)) {
                container += '#';
            } else {
                container += `-`;
            }

        }
        container += '\n';
    }

    return container;
}