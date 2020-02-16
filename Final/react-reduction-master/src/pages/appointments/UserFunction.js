import axios from 'axios';

export const searchByCustomerName = async user => {
    console.log("user",user);
    console.log(user.searchId);
    return await axios
    .post('http://localhost:5001/customer/searchByName', {
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