import axios from 'axios';

const settings = {
    baseURL: 'http://localhost:8080/api',
};

export const instance = axios.create(settings);