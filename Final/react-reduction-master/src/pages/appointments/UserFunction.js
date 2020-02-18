import axios from 'axios';

export const searchByCustomerName = async user => {
    console.log("user",user);
    console.log(user.searchId);
    return await axios
    .post('http://localhost:5001/customers/searchByName', {
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

export const searchByVehicleById = async user => {
    console.log("user",user);
    console.log(user.searchId);
    return await axios
    .post('http://localhost:5001/vehicles/searchById', {
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

export const register = userRes => {
    console.log(userRes);
    return axios
    .post('http://localhost:5001/appointments/create', {
        date: userRes.date,
        customerId: userRes.customerId,
        vehicleId: userRes.vehicleId,
        descript: userRes.descript,
        
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