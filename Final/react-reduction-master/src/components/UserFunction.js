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

export const registerCustomer = userReg=>{
    console.log(userReg);
    return axios
    .post('http://localhost:5001/customers/customerRegistration',{
        name:userReg.name,
        fax:userReg.fax,    
        NIC: userReg.NIC,
        type:userReg.type ,

        email:userReg.email ,
        website:userReg.website ,
        address:userReg.address ,
        phoneNo:userReg.phoneNo ,
        DOB:userReg.DOB ,
        note:userReg.note ,
        
    })
    .then(res=>{
        console.log(res.data);
        localStorage.setItem("usertoken",res.data)
        return res.data
    })
    .catch(err=>{
        console.log("not registered")
        console.log(err);
    })
}

export const viewCustomer = userReg=>{
    console.log(userReg);
    return axios
    .post("http://localhost:5001/customer/customerView",{
        Id:userReg.Id,
        name:userReg.name,
        fax:userReg.fax,    
        NIC: userReg.NIC,
        type:userReg.type ,
        email:userReg.email ,
        website:userReg.website ,
        address:userReg.address ,
        phoneNo:userReg.phoneNo ,
        DOB:userReg.DOB ,
        note:userReg.note ,
        
    })
    .then(res=>{
        console.log(res.data);
        localStorage.setItem("usertoken",res.data)
        return res.data
    })
    .catch(err=>{
        console.log("not registered")
    })
}    



export const updatecustomer = customer => {
    console.log("customer",customer);
    console.log("id",customer.Id);
    return axios 
    .post("http://localhost:5001/customers/customerUpdate", {
            Id: customer.Id,
            name: customer.name,
            fax: customer.fax,
            NIC: customer.NIC,
            type: customer.type,
            email: customer.email,
            website: customer.website,
            address: customer.address,
            phoneNo: customer.phoneNo,
            DOB: customer.DOB,
            note: customer.note,
    })
    .then(res => {
        console.log('come response');
       // console.log(res.data);
        //localStorage.setItem('usertoken',res.data);
        //return res.data;
        console.log('eeeeeeeeeeeeee')
        //console.log(res.data.state);
        console.log(res.data)
        
        return res.data;
    })
    .catch(err => {
        console.log('err');
        console.log(err);
    })
}


export const deletecustomer = user => {
    return axios
    .post('http://localhost:5001/customers/deletecus', {
        Id:user.Id
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


export const registerVehicle = userReg=>{
    console.log(userReg);
    return axios
    .post('http://localhost:5001/vehicles/vehicleRegistration',{
        vehicleNo:userReg.vehicleNo,
        category:userReg.category,    
        type: userReg.type,
        mileage:userReg.mileage ,

        custId:userReg.custId ,
        
        
    })
    .then(res=>{
        console.log(res.data);
        localStorage.setItem("usertoken",res.data)
        return res.data
    })
    .catch(err=>{
        console.log("not registered")
        console.log(err);
    })
}

export const vehiclesearch = user => {
    console.log("user",user);
    console.log(user.searchId);
    return axios
    .post('http://localhost:5001/vehicles/search', {
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

export const updatevehicle = user => {
    console.log("userfn",user);
    console.log("id",user.id);
    return axios 
    .post("http://localhost:5001/vehicles/updatevehicle", {
            Id: user.Id,
            vehicleNo: user.vehicleNo,
            category: user.category,
            type: user.type,
            mileage: user.mileage,
            custId: user.custId,
    })
    .then(res => {
        console.log('come response');
       // console.log(res.data);
        //localStorage.setItem('usertoken',res.data);
        //return res.data;
        console.log('eeeeeeeeeeeeee')
        //console.log(res.data.state);
        console.log(res.data)
        
        return res.data;
    })
    .catch(err => {
        console.log('err');
        console.log(err);
    })
}


export const deletevehicle = user => {
    console.log("userfn",user);
    return axios
    .post('http://localhost:5001/vehicles/delete', {
        Id: user.Id,
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

export const updateAdmin = user => {
    return axios 
    .post("http//localhost:5001/users/updateByAdmin", {
        username: user.username,
        name: user.name,
        DOB: user.DOB,
        address: user.address,
        contactNumber: user.contactNumber,
        password: user.password,
        status: user.status
    })
    .then(res => {
        console.log('come response');
        console.log(res.data);
        localStorage.setItem('usertoken',res.data);
        return res.data;
    })
    .catch(err => {
        console.log('err');
        console.log(err);
    })
}

export const viewService = service => {
    return axios
    .get('http//localhost:5001/services/viewService', {

    })
    .then(res => {
        console.log('come response');
        console.log(res.data);
        localStorage.setItem('servicetoken',res.data);
        return res.data;
    })
    .catch(err =>{
        console.log('err');
        console.log(err);
    })
}
export const customersearch = user => {
    console.log("user",user);
    console.log(user.searchId);
    return axios
    .post('http://localhost:5001/customers/search', {
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
