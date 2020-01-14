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

export const customerregister = user => {
    return axios
    .post('users/customerRegistration', {
        // username: user.userName,
        // password: user.password
        name: user.name,
        fax: user.fax,
        NIC:user.NIC,
        type:user.type,
        email:user.email,
        website:user.website,
        address:user.address,
        phoneNo:user.phoneNo,
        DOB:user.DOB,
        note:user.note
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