const io = require('socket.io')();

const sensorData = require('./data/sensors.json');

// console.log(sensorData[2]);

const sensors = Object.keys(sensorData);

// console.log(Object.keys(sensorData));
// console.log(sensors);
// find image keys

// if('image' in sensorData) {
//     console.log('img found');
// } else {
//     console.log('img not found');
// }

// setInterval(() => {
//     console.log(generateRandomData(0, 4))}, 1000);

generateRandomData = (min, max) => {
    return Math.floor(Math.random() * max) + min
};

console.log(generateRandomData(3000, 9000));

const getAllDescriptions = () => {
    let descriptions = {};
    for (let sensor in sensorData) {
        if ('label' in sensorData[sensor]) {
            // descriptions.push(sensorData[sensor].name, sensorData[sensor]['label']);
            descriptions[sensorData[sensor].name] = sensorData[sensor]['label'];
        }
    }
    return descriptions;
};

const getAllImages = () => {
    let images = {};
    for (let sensor in sensorData) {
        if ('image' in sensorData[sensor]) {
            // descriptions.push(sensorData[sensor].name, sensorData[sensor]['label']);
            images[sensorData[sensor].name] = sensorData[sensor]['image'];
        }
    }
    return images;
};

const getAllLocations = () => {
    let location = {};
    for (let sensor in sensorData) {
        if ('location' in sensorData[sensor]) {
            // descriptions.push(sensorData[sensor].name, sensorData[sensor]['label']);
            location[sensorData[sensor].name] = sensorData[sensor]['location'];
        }
    }
    return location;
};

const getSensorData = (location) => {
    // location = 'Tredegar House';
    let data = {};
    if ('sensor1' in sensorData[location]) {
            // descriptions.push(sensorData[sensor].name, sensorData[sensor]['label']);
            // data[sensorData[location]['sensor1'].type] = sensorData[location]['sensor1']['currentReading'];
        data[sensorData[location]['sensor1'].type] = generateRandomData(
            sensorData[location]['sensor1']['min'],
            sensorData[location]['sensor1']['max']);

    }
        if ('sensor2' in sensorData[location]) {
            // descriptions.push(sensorData[sensor].name, sensorData[sensor]['label']);
            data[sensorData[location]['sensor2'].type] = generateRandomData(
                sensorData[location]['sensor2']['min'],
                sensorData[location]['sensor2']['max']);
        }
        if ('sensor3' in sensorData[location]) {
            // descriptions.push(sensorData[sensor].name, sensorData[sensor]['label']);
            // data[sensorData[location]['sensor3'].type] = sensorData[location]['sensor3']['currentReading'];
            data[sensorData[location]['sensor3'].type] = generateRandomData(
                sensorData[location]['sensor3']['min'],
                sensorData[location]['sensor3']['max']);
        }
    return data;
};

// console.log(getSensorData('Tredegar House'));
console.log(getSensorData('Tredegar House'));
console.log(sensorData['Tredegar House']['sensor1']['max']);
// const getSensorData = () => {
//     let data = {};
//     for (let sensor in sensorData) {
//         if ('sensor1' in sensorData[sensor]) {
//             // descriptions.push(sensorData[sensor].name, sensorData[sensor]['label']);
//             data[sensorData[sensor]['sensor1'].type] = sensorData[sensor]['sensor1'];
//         }
//         if ('sensor2' in sensorData[sensor]) {
//             // descriptions.push(sensorData[sensor].name, sensorData[sensor]['label']);
//             data[sensorData[sensor]['sensor2'].type] = sensorData[sensor]['sensor2'];
//         }
//         if ('sensor3' in sensorData[sensor]) {
//             // descriptions.push(sensorData[sensor].name, sensorData[sensor]['label']);
//             data[sensorData[sensor]['sensor3'].type] = sensorData[sensor]['sensor3'];
//         }
//     }
//     return data;
// };

// console.log(getSensorData());

// console.log(getAllImages());

// console.log(getAllLocations());

// console.log(sensorData['Tredegar House']['sensor1'].type);
// console.log(sensorData['Tredegar House']['sensor1']);

// io.on('connection', (client) => {
//     client.on('subscribeToTimer', (interval) => {
//         console.log('client is subscribing to timer with interval ', interval);
//         setInterval(() => {
//             client.emit('timer', new Date());
//         }, interval);
//     });
// });



io.on('connection', (client) => {
    client.on('objectKeys', () => {
        console.log('Client has requested names of places');
        client.emit('objectKeys', sensors);
    });
    client.on('descriptions', () => {
        console.log('Client has requested descriptions');
        client.emit('descriptions', getAllDescriptions());
    });
    client.on('images', () => {
        console.log('Client has requested images');
        client.emit('images', getAllImages());
    });
    client.on('locations', () => {
        console.log('Client has requested locations');
        client.emit('locations', getAllLocations());
    });
    client.on('sendLocation', (location) => {
        console.log('Client has requested sensorData for', location);
        client.emit('sensorData', getSensorData(location));
        setInterval(() => {
            client.emit('sensorData', getSensorData(location));
            client.emit('newDate', new Date());
        }, generateRandomData(2000, 5000));
        // }, 8000);
    });
    // client.on('getDescription', (location) => {
    //     console.log('Client has requested a description for', location );
    //     client.emit('getDescription', getDescription());
    // });
});

// setInterval(() => {
//     console.log(generateRandomData(0, 4))}, 1000);


const port = 8000;
io.listen(port);
console.log('listening on port ', port);
