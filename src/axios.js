import axios from 'axios';

const baseUrl = `http://localhost:8080`;

export const post = (route, body) => {
    const url = baseUrl + route;
    return axios.post(url, body);
}

/*
Test user data
    "email": "test@email.com",
    "password": "test12345",
    "name": "testUser"

 */
