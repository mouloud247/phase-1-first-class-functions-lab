// Code your solution in this file!
let drivers = [];
const returnFirstTwoDrivers = function (drivers) {
    let newArray = [drivers[0], drivers[1]];
    return newArray;

}
const returnLastTwoDrivers = function (drivers) {
    let newArray = [drivers[(drivers.length) - 2], drivers[(drivers.length) - 1]];
    return newArray;
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(a) {
    return function (a) { return a * a };
}

const mimo = createFareMultiplier();

function fareDoubler(mimo) {
    return mimo * 2;

}

const momo = createFareMultiplier();

function fareTripler(momo) {
    return momo * 3;

}


function selectDifferentDrivers(drivers, twoDrivers) {


    if (twoDrivers === returnFirstTwoDrivers) {
        return returnFirstTwoDrivers(drivers);
    }
    else if
        (twoDrivers === returnLastTwoDrivers) {
        return returnLastTwoDrivers(drivers);
    }


}
