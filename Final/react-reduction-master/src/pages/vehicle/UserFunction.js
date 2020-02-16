import axios from 'axios';

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