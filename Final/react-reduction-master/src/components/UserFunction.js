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
        console.log(err);
    })
}



export const registerVehicle = userReg=>{
    console.log(userReg);
    console.log("hi");

    return axios

    .post('http://localhost:5001/vehicles/vehicleRegistration',{

        vehicleNo:userReg.vehicleNo,
        type:userReg.type ,      
        category:userReg.category ,
        mileage:userReg.mileage,    
        custId: userReg.custId,

        
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