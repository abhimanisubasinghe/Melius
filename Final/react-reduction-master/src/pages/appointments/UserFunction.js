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
        console.log(res);
        console.log(res.data)
        //localStorage.setItem('usertoken', res.data)
        return res.data
    })
    .catch(err => {
        console.log('not registered')
        console.log(err);
    })
}

export const search = user => {
    console.log("user",user);
    console.log(user.searchId);
    return axios
    .post('http://localhost:5001/appointments/search', {
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

export const deleteUser = user => {
    console.log("userfn",user);
    console.log("ofdasf",user.jobId);
    return axios
    .post('http://localhost:5001/appointments/delete', {
        jobId: user.jobId,
    })
    .then(res => {
        console.log('come response');
        console.log(res.data.state);
        localStorage.setItem('usertoken',res.data);
        return res.data.state;
    })
    .catch(err => {
        console.log('err');
        console.log(err);
    })
}

export const update = user => {
    console.log("userfn",user);
    console.log("id",user.jobId);
    return axios 
    .post("http://localhost:5001/appointments/update", {
        jobId: user.jobId,
        date: user.date,
        customerId: user.customerId,
        vehicleId: user.vehicleId,
        descript: user.descript,
    })
    .then(res => {
        if(res.data != "Fill all details"){
            console.log('come response');
        // console.log(res.data);
            //localStorage.setItem('usertoken',res.data);
            //return res.data;
            console.log('eeeeeeeeeeeeee')
            //console.log(res.data.state);
            console.log(res.data)
            
            return "TRUE";
        }
        else{
            console.log(res.data);
            return "FALSE";
        }
    })
    .catch(err => {
        console.log('err');
        console.log(err);
    })
}