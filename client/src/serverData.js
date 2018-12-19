import openSocket from 'socket.io-client';
const  socket = openSocket('http://localhost:8000');

function getPlaces(cb) {
    socket.on('objectKeys', placeNames => cb(null, placeNames));
    socket.emit('objectKeys', 1000);
}

function getDescriptions(cb) {
    socket.on('descriptions', descriptions => cb(null, descriptions));
    socket.emit('descriptions', 1000);
}

function getImages(cb) {
    socket.on('images', images => cb(null, images));
    socket.emit('images', 1000);
}

function getLocations(cb) {
    socket.on('locations', locations => cb(null, locations));
    socket.emit('locations', 1000);
}

function sendLocation(location) {
    socket.emit('sendLocation', location, 1000);
}

function getSensorData(cb) {
    socket.on('sensorData', data => cb(null, data));
}
function newDate(cb) {
    socket.on('newDate', date => cb(null, date));
}

export {
    getPlaces,
    getDescriptions,
    getImages,
    getLocations,
    sendLocation,
    getSensorData,
    newDate
};
