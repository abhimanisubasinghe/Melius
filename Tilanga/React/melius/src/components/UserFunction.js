import axios from 'axios';
//import axios, { AxiosResponse, AxiosInstance } from 'axios'


export const register = newUser => {
    return axios
    .post('users/registration', {
        first_name: newUser.first_name,
        last_name: newUser.last_name
    })
    .then(res => {
        console.log('registered');
    })
}

export const login = user => {
    return axios
    .post('users/login', {
        username: user.userName,
        password: user.password
    })
    .then(res => {
        console.log('tillllll');
        console.log(res.data);
        localStorage.setItem('userToken', res.data)
        return res.data
    })
    .catch(err => {
        console.log(err)
    })
}