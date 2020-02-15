import axios from 'axios';


//USER
export const register = userRes => {
    console.log(userRes);
    return axios
    .post('http://localhost:5001/users/registration', {
        name: userRes.name,
        DOB: userRes.DOB,
        contactNumber: userRes.contactNumber,
        password: userRes.password,
        address: userRes.address,
        status: userRes.status
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

export const search = user => {
    console.log("user",user);
    console.log(user.searchId);
    return axios
    .post('http://localhost:5001/users/search', {
        searchId: user.searchId,
    })
    .then(res => {
        console.log('eeeeeeeeeeeeee')
        //console.log(res.data.state);
        console.log(res.data)
        
        //localStorage.setItem('usertoken',res.data)
        return res.data;
    })
    .catch(err =>{
        console.log('log err')
        console.log(err)
    })
}

export const addService = service => {
    return axios
    .post('http://localhost:5001/services/addService', {
        name: service.name,
        category: service.category,
        price: service.price
    })
    .then(res => {
        console.log('eeeeeeeeeeeeee')
        console.log(res.data.state);
        //console.log(res.data)
        
        localStorage.setItem('servicetoken',res.data)
        return res.data
    })
    .catch(err =>{
        console.log('log err')
        console.log(err)
    })
}

export const selectUser = user => {
    return axios
    .get('http://localhost:5001/users/viewUser',{

    })
    .then(res => {
        console.log('come resposnse')
        console.log(res.data)
        console.log(res.data.state);
        localStorage.setItem('usertoken',res.data);
        return res.data;
    })
    .catch(err =>{
        console.log('err');
        console.log(err);
    })
}

export const updateUser = user => {
    return axios
    .post('http://localhost:5001/users/userUpdateByUser', {
        username: user.username,
        password: user.password,
    })
    .then(res => {
        console.log('come response');
        console.log(res.data.state);
        localStorage.setItem('usertoken',res.data);
        return res.data;
    })
    .catch(err => {
        console.log('err');
        console.log(err);
    })
}

export const deleteUser = user => {
    return axios
    .post('http://localhost:5001/users/delete', {
        username: user.username,
    })
    .then(res => {
        console.log('come response');
        console.log(res.data.state);
        localStorage.setItem('usertoken',res.data);
        return res.data;
    })
    .catch(err => {
        console.log('err');
        console.log(err);
    })
}

