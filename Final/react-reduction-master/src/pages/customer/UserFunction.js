import axios from 'axios';

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
