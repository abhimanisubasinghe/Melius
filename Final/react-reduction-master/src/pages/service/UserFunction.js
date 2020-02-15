import axios from 'axios';

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


export const invoice = servicein => {
    console.log(servicein);
    return axios
    .post('http://localhost:5001/services/newServiceInvoice', { 
        customerId:servicein.customerId,    
        serviceId:servicein.serviceId,    
        vehicleId: servicein.vehicleId,
        total: servicein.total,
        discount: servicein.discount,
        remarks: servicein.remarks,
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

export const view = service =>  {
    console.log('service',service);
    return axios
    .get('http://localhost:5001/service/viewService', {

    })
    .then(res =>{
        console.log('wwwwwww');
        console.log(res.data.result);
        return res.data.result;
    })
    .catch(err =>{
        console.log('ER')
    })
}


export const search = service => {
    console.log("service",service);
    console.log(service.searchId);
    return axios
    .post('http://localhost:5001/services/search', {
        searchId: service.searchId,
    })
    .then(res => {
        console.log('eeeeeeeeeeeeee')
        console.log(res.data);
        console.log(res.data)
        
        localStorage.setItem('usertoken',res.data)
        return res.data;
    })
    .catch(err =>{
        console.log('log err')
        console.log(err)
    })
}