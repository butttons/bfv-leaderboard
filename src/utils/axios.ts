import axios from 'axios';
export const instance = axios.create({
    baseURL: 'https://api.battlefieldtracker.com/api/v1/bfv/',
});
