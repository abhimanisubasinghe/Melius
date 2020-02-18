import { number } from "prop-types";

export const notNull = data => {
    var pass = false;
    if(data){
        pass = true;
    }
    else{
        console.log("error not null",data);
        pass = false;
    }
    return pass;    
}

export const appointmentDateValidator = data => {
    var pass = false;
    var d = new Date();
    var check = new Date(data)
    if(check>d)
        pass = true;
    else{ 
        console.log("error appointment date",d,data);
        pass = false;
    }   
    return pass;
}

export const faxValidator = data => {
    var pass = false;
    var d = /^\+?[0-9]{6,}$/;
    if(!data.match(d))
        pass = true;
    else 
        pass = false;
    return pass;
}

export const NICValidator = data => {
    var pass = false;
    var d = /^[0-9]{9,}?v|V/;
    if(!data.match(d))
        pass = true;
    else 
        pass = false;
    return pass;
}

export const phoneValidator = data => {
    var pass = false;
    var d = /^\+?[0-9]{10,}$/;
    if(data.match(d))
        pass = true;
    else 
        pass = false;
    return pass;
}

export const emailValidator = data => {
    var pass = false;
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(String(data).toLowerCase()))
        pass = true;
    else    
        pass = false;
    return pass;

}

export const URLValidator = data => {
    var pass = false;
    var re = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g;
    if(data.match(re))
        pass = true;
    else 
        pass = false;
    return pass;
  };

export const DOBValidator = data => {
    var pass = false;
    var d = new Date();
    if(data<d)
        pass = true;
    else 
        pass = false;
    return pass;
}  

export const positiveNumberValidator = data => {
    var pass = false;
    if(data>0)
        pass = true;
    else 
        pass = false;
    return pass;
}



