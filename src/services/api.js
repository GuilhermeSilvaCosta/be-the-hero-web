import axios from 'axios';

const api = axios.create({
    baseURL: 'https://potfolio.redirectme.net/week11',
})

export default api;