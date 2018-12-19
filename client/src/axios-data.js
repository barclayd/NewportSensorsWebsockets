import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://newportcouncil-88032.firebaseio.com/'
});

export default instance;


