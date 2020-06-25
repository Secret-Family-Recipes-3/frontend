import axios from 'axios';

export default function authAxios () {
    const token = localStorage.getItem('loginToken');

    return axios.create({
        headers: {
            'Authorization': token
        },
        baseURL: 'https://sfr-backend.herokuapp.com/'
    });
}