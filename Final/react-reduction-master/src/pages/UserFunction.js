import axios from 'axios';

export const register = userRes => {
    console.log(userRes);
    return axios
    .post('http://localhost:5001/users/registration', {
        name: userRes.name,
        DOB: userRes.DOB,
        contactNumber: userRes.contactNumber,
        password: userRes.password,
        address: userRes.address,
        status: userRes.status,
        username: userRes.username
    })
    .then(res => {
        console.log(res.data)
        localStorage.setItem('usertoken', res.data)
        return res.data
    })
    .catch(err => {
        console.log('not registered')
        console.log(err);
    })
}

export const login = user => {
    return axios
    .post('http://localhost:5001/users/login', {
        username: user.username,
        password: user.password
    })
    .then(res => {
        console.log('eeeeeeeeeeeeee')
        console.log(res.data.state);
        //console.log(res.data)
        
        localStorage.setItem('usertoken',res.data)
        return res.data
    })
    .catch(err =>{
        console.log('log err')
        console.log(err)
    })
}