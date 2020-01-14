//  import React from 'react';
//  import axios from 'axios';

// export default class Customerreg extends React.Component{
    
//         constructor(props) {
//                 super(props)
            
//                 this.state = {
//                     //Id:"",    
//                     name: "",
//                    // gender: "",
//                     fax: "",
//                     NIC: "",
//                     type: "",
//                     email: "",
//                     website: "",
                   
//                     address: "",
//                     phoneNo: "",
//                     DOB: "",
//                     note: "",
//                 }
//             }
        
//             onChange = (e) => {
//                 this.setState(
//                 {[e.target.name]: e.target.value}
//                 )
//             }
            
// //             onSubmit(e){
// //                 e.preventDefault();
                
// //                 const user = {
// //                     name: this.state.name,
// //                     fax: this.state.fax,
// //                     NIC:this.State.NIC,
// //                     type:this.State.type,
// //                     email:this.State.email,
// //                     website:this.State.website,
// //                     address:this.State.address,
// //                     phoneNo:this.State.phoneNo,
// //                     DOB:this.State.DOB,
// //                     note:this.State.note
// //                 }
// //            
           
// //             handleSubmit = e => { 
// //                 e.preventDefault();
// //                 console.log(this.state);
// //                 const url = "http://localhost:5001/customers/customerRegistration";
// //                 axios
// //                         .post(url,
// //                                 this.state
// //                         ,{headers: {'Accept': 'application/json'}})
// //                         .then( response =>
// //                                 {console.log("good "+response)}
// //                         )
// //                         .catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"))
// //                         alert(`customer registered`);
// //                         console.log(this.state.id)
                
// //             }

// // im

// // export default class Customerreg extends Component {
// //     constructor(props) {
// //         super(props)
    
// //         this.state = {
// //                     Id:"",    
// //                     name: "",
// //                    // gender: "",
// //                     fax: "",
// //                     NIC: "",
// //                     type: "",
// //                     email: "",
// //                     website: "",
                   
// //                     address: "",
// //                     phoneNo: "",
// //                     DOB: "",
// //                     note: "",
// //         }
// //         ////////////
// //         this.onChange = this.onChange.bind(this)
// //         this.onSubmit = this.onSubmit.bind(this)
// //     }

// //     onChange = (e) => {
// //         this.setState(
// //         {[e.target.name]: e.target.value}
// //         )
// //     }
    
// //    /* handleSubmit = event => {
// //         alert(`Hi ${this.state.userName}! `);
// //         //event.preventDefault()
// //     }*/

// //     /////////////////////////////////////
// //     onSubmit(e){
// //         e.preventDefault();
       
// //                 const user = {
// //                     name: this.state.name,
// //                     fax: this.state.fax,
// //                     NIC:this.State.NIC,
// //                     type:this.State.type,
// //                     email:this.State.email,
// //                     website:this.State.website,
// //                     address:this.State.address,
// //                     phoneNo:this.State.phoneNo,
// //                     DOB:this.State.DOB,
// //                     note:this.State.note
// //                 }
// //         console.log(user.name);
// //         customerregister(user).then(res => {
// //             if(res === 'logged') {
// //                 /////
// //                 console.log(res);
// //                 console.log('111111111111111');
// //                 this.props.history.push('/profile');
// //             }
// //             else if(res === 'User does not exist'){
// //                 console.log(res);
// //                 console.log('fj');
// //                 this.props.history.push('/LoginForm');
// //             }
// //             else if(res === 'fill all fields'){
// //                 alert(res);
// //             }
// //         })
// //     }
// //     handleSubmit = e => { 
// //         e.preventDefault();
// //         console.log(this.state);
// //         const url = "http://localhost:5001/customers/customerRegistration";
// //         const url2 = "http://localhost:3001/admin/dashboard";
// //         //const url = "http://localhost:5000/admin/login"; 
// //         axios
// //                 .post(url,
// //                         this.state
// //                 ,{headers: {'Accept': 'application/json'}})
// //                 .then( response =>
// //                         {console.log(response)
// //                             if(response.data == "worng data"){
// //                                 console.log('run')
// //                                 axios.get(url2)
                                
// //                             }
// //                         }
                        
// //                 )
                
// //                 //.catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"))
        
        
// //     }

//         render(){
//                 return(  
//                         <div className="jumbotron" style ={jumbotronStyle}>  
//                 <div className="container" style={container}>
//                         <form onSubmit={this.handleSubmit}>
                       
//                                 <div className = "col-md-12">
//                                         <div className= "row">
//                                                 <div className="col-md-8" align="left" > 
//                                                         <h3 style={h3}>Register Customer</h3>
//                                                 </div>
//                                                 <div className ="col-md-4">
//                                                         <span className="glyphicon glyphicon-pencil" style={glyphiconpencil }></span>
//                                                 </div> 
//                                         <br/>
//                                         <div>
//                                                 <br/>
//                                         </div>
//                                         </div>
//                                         <hr style={hr}/> 

//                                         {/* <div className= "row form-group" align="left">
//                                                 <label for="id" className="col-md-2">Customer Id</label>
//                                                         <div className="col-md-10">
//                                                                 <input type="text" value={this.state.Id} onChange={this.onChange} className="form-control" style={formcontrol}id="Id" name="Id" placeholder="Enter customer ID"/>                        

//                                                         </div>
//                                         </div> */}
//                                         <div className= "row form-group" align="left">

//                                                 <label for="customerName" className="col-md-2">Customer Name</label>
//                                                          <div className="col-md-10">
//                                                                 <input type="text" className="form-control" style={formcontrol} value={this.state.Name} onChange={this.onChange} id="Name" name="Name"  placeholder="Cutomer Name"/>  
//                                                               {/* <fieldset className="row-md form-group">
//                                                                         <div className="form-check">
//                                                                                 <label class="form-check-label">
//                                                                                 <input 
//                                                                                         type="radio" 
//                                                                                         className="form-check-input" 
//                                                                                         name="gender" 
//                                                                                         id="gender" 
//                                                                                         value={this.state.gender} 
//                                                                                         onChange={this.onChange}
//                                                                                         />
//                                                                                         Mr.
//                                                                                 </label>
//                                                                         </div>
//                                                                         <div class="form-check">
//                                                                                 <label class="form-check-label">
//                                                                                 <input 

//                                                                                         type="radio" 
//                                                                                         class="form-check-input" 
//                                                                                         name="gender" 
//                                                                                         id="gender" 
//                                                                                         value={this.state.gender} 
//                                                                                         onChange={this.onChange}/>
//                                                                                         Ms.
//                                                                                 </label>
//                                                                         </div>
//                                                                         <div class="form-check">
//                                                                                 <label class="form-check-label">
//                                                                                 <input 
//                                                                                         type="radio" 
//                                                                                         class="form-check-input" 
//                                                                                         name="gender" 
//                                                                                         id="gender" 
//                                                                                         value={this.state.gender} 
//                                                                                         onChange={this.onChange}/>
//                                                                                         Other
//                                                                                 </label>
//                                                                         </div>
//                                                                 </fieldset> */}
//                                                         </div>
//                                         </div>
//                                         <div className= "row form-group" align="left">
//                                                 <label for="NIC" className="col-md-2">NIC</label>
//                                                         <div className="col-md-10">
//                                                                 <input type="text" value={this.state.NIC} style={formcontrol} onChange={this.onChange} className="form-control" id="NIC" name="NIC" placeholder="NIC"/>                        

//                                                         </div>
//                                         </div>
//                                         <div className= "row form-group" align="left">
//                                                 <label for="fax" className="col-md-2">Fax</label>
//                                                         <div className="col-md-10">
//                                                                 <input type="text" value={this.state.fax} style={formcontrol} onChange={this.onChange} className="form-control" id="fax" name="fax" placeholder="Fax Number"/>                        

//                                                         </div>
//                                         </div>
//                                         <div className= "row form-group" align="left">
//                                                 <label for="type" className="col-md-2">Type</label>
//                                                         <div className="col-md-10">
//                                                                 <input type="text" value={this.state.type}style={formcontrol} onChange={this.onChange} className="form-control" id="type" name="type" placeholder="Type"/>                        

//                                                         </div>
//                                         </div>
//                                         <div className= "row form-group" align="left">
//                                                 <label for="website" className="col-md-2">Website</label>
//                                                         <div className="col-md-10">
//                                                                 <input type="text" value={this.state.website} style={formcontrol} onChange={this.onChange} className="form-control" id="website" name="website" placeholder="Insert website"/>                        

//                                                         </div>
//                                         </div>
//                                         <div className= "row form-group" align="left">
//                                                 <label for="email" className="col-md-2">E-Mail</label>
//                                                         <div className="col">
//                                                                 <input type="email" value={this.state.email} style={formcontrol}onChange={this.onChange} className="form-control" id="email" name="email"  placeholder="email"/>                        
//                                                         </div>
//                                         </div>
//                                          <div className= "row form-group" align="left">
//                                                 <label for="address" className="col-md-2">Address</label>
//                                                         <div className="col">
//                                                                 <input type="address" value={this.state.address} style={formcontrol} onChange={this.onChange} className="form-control" id="address" name="address" placeholder="address"/>                        
//                                                         </div>
//                                         </div> 
//                                          <div className= "row form-group" align="left">
//                                                 <label for="contactNo" className="col-md-2">Contact no</label>
//                                                         <div className="col-md">
//                                                                 <input type="text" value={this.state.phoneNo} style={formcontrol} onChange={this.onChange} className="form-control" id="phoneNo" name="phoneNo" placeholder="contact number"/>                        
//                                                         </div>
//                                         </div> 

//                                         <div className= "row form-group" align="left">
//                                                 <label for="dob" className="col-md-2">DOB</label>
//                                                         <div className="col-md">
//                                                                 <input type="date" value={this.state.DOB} style={formcontrol} onChange={this.onChange} className="form-control" id="DOB" name="DOB"  placeholder="date of birth"/>                        
//                                                         </div>
//                                         </div>
                                        

//                                         <div className= "row form-group" align="left">
//                                                 <label for="note" className="col-md-2">Note</label>
//                                                         <div className="col-md-10">
//                                                         <textarea name="message" rows="3" value={this.state.note} style={formcontrol} onChange={this.onChange} id="note" name="note" className="col-md-12" style={textAreaStyle}>
//                                                                 The cat was playing in the garden.
//                                                         </textarea>           
//                                                         </div>
//                                         </div>
//                                         <div align="right">
//                                         <button className="btn btn-primary"  style={btn} type="submit">Submit</button>
//                                         </div>
//                                         <div>
//                                                 <br/>
//                                         </div>
//                                 </div>
//                         </form>
//                 </div>
//         </div>            
//                 )
//     }
        
    
// }



// const jumbotronStyle = {
//         background: '#f1f1f1'
//     }
    
//     const invisiblejumbotronStyle = {
//         background: '#00000000'
    
//     }

// const textAreaStyle = {
//         border: '1px solid #dedede',
//         borderRadius: '10px',
//         color : '#828282'
// }


// const container={
//         justifyContent:"right",
//         alignItems:"right",
//         textAlign: "right",
//         background:"rgba(0,0,0,.3)",
//         backgroundImage:"url(./customers.jpg)",
//         width:"700px",
//         backgroundImage: "url(./customers.jpg)",



    
    
//     }

    
// const hr={
//         height:"2px",
// }

   
    
   
// const glyphiconpencil={
//         fontSize:"45px" ,
//         color:"black",
//         marginTop:"20px" ,
//         float:"right",
//     }


// const  h3={
//         fontSize: "30px",
//         color:"black" ,
//         fontWeight:"bold",

//     }
    


   
    
// const formcontrol={
//         background: "transparent",
//         borderTop: "1px",
//         borderLeft: "1px",
//         borderRight:"2px" ,
//         marginTop: "1px",
//         fontWeight:"bold",
//         color:"white" ,
//         fontSize: "15px",

//     }


// const     btn ={
//         borderRadius:"20px" ,
//         border:"1px solid #ff4b",
//         background:"rgba(15, 28, 30, 0.62)",
//         color:"rgb(231, 231, 219)",
//         fontSize:"12px",
//         fontWeight: "bold",
//         padding:"12px 45px",
//         letterSpacing:"1px" ,
//         borderColor:"rgba(15, 28, 30, 0.62)",
//     }

// const colmd10={
//         marginTop: "20px",
//         color:"wheat",
//    }
//        /* 


    
//     .col-md-10{
//          margin-top: 20px;
//          color:wheat;
//     }
// const col-md-4={
//         background:"rgba(.1,0,0,.5 )";
//         border-radius: 10px;
//         position:relative;
//         overflow:hidden;
//         width:475px;
//         max-width: 100%;
//         min-height: 350px; 
//         text-align: center;
//         margin:20px 20px 10px 10px;
        
        
//     }

//     .col-sm-4 {
//         font-weight: normal;
//         font-size: 20px; 
//         margin-top: 10px;
//         margin-left: 10px;
//         color: gold;
//         float: left;
    
//     }

//    const     col-md-7{
//         margin-top: 80px;
//         box-shadow: -1px 1px 20px 1px black;
//         background: rgba(0,0,0,0.4);
//     }
//     .col-md-6 {
//         width: -webkit-calc((100% - 60px) / 2);
//         width: -moz-calc((100% - 60px) / 2);
//         width: calc((100% - 60px) / 2);
//       }
    
//     .label1{
    
//         font-size:15px;
//         font-weight: bold;
//         color:#ffff;
//     }
    
    
//     .form-group input{
//         border-radius: 10px;
//         background:#f1f2f5bb;
//         padding:12px 15px;
//         margin:8px 20px 10px 10px;
//         justify-content:center;
//         align-items:center;
//         width:90%;
//         border-color:rgb(64, 42, 161);
        
    
//     }
    
//     .btn btn-primary{
//         border-radius: 20px;
//         border:1px solid #ff4b;
//         background:rgba(46, 25, 235, 0.733);
//         color:rgb(231, 231, 219);
//         font-size:12px;
//         font-weight: bold;
//         padding:12px 45px;
//         letter-spacing: 1px;
//         border-color:rgb(220, 221, 213);
//     }
    
//     .btn btn-primary:active{
//         transform:scale(2.5);
//     }
    
// //   */  
import React from 'react';

import axios from 'axios';



export default class Itemregister extends React.Component{
    
        constructor(props) {
                super(props)
            
                this.state = {

                    name:"",
                    fax:"",    
                    NIC: "",
                    type: "",
                    email: "",
                    website: "",
                    address: "",
                    phoneNo: "",
                    DOB: "",
                    note: ""
                   
                }
                
            }
        
            onChange = (e) => {
                this.setState(
                {[e.target.name]: e.target.value}
            )
            }
            
            handleSubmit = e => { 
                e.preventDefault();
                console.log(this.state);
                const url = "http://localhost:5001/customer/customerRegistration"; 
                axios
                        .post(url,
                                this.state
                        ,{headers: {'Accept': 'application/json'}})
                        .then( response =>
                                {console.log("good "+response)}
                        )
                        .catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"))
                
                
            }

            

        render(){
                return(  
                        <div className="jumbotron" style ={jumbotronStyle}> 
                       
                <div className="container" style={container}>

               

                        <form onSubmit={this.handleSubmit}>
                       
                                <div className = "col-md-12">
                                        <div className= "row">
                                                <div className="col-md-8" align="left" > 
                                                        <h3 style={h3}>Register Customer</h3>
                                                </div>
                                                <div className ="col-md-4">
                                                        <span className="glyphicon glyphicon-pencil" style={glyphiconpencil }></span>
                                                </div> 
                                        <br/>
                                        <div>
                                                <br/>
                                        </div>
                                        </div>
                                        <hr style={hr}/> 

                                        {/* <div className= "row form-group" align="left">
                                                <label for="id" className="col-md-2">Customer Id</label>
                                                        <div className="col-md-10">
                                                                <input type="text" value={this.state.Id} onChange={this.onChange} className="form-control" style={formcontrol}id="Id" name="Id" placeholder="Enter customer ID"/>                        

                                                        </div>
                                        </div> */}
                                        <div className= "row form-group" align="left">

                                                <label for="customerName" className="col-md-2">Customer Name</label>
                                                         <div className="col-md-10">
                                                                <input type="text" className="form-control" style={formcontrol}  onChange={this.onChange} id="name" name="name"  placeholder="Cutomer Name"/>  
                                                              {/* <fieldset className="row-md form-group">
                                                                        <div className="form-check">
                                                                                <label class="form-check-label">
                                                                                <input 
                                                                                        type="radio" 
                                                                                        className="form-check-input" 
                                                                                        name="gender" 
                                                                                        id="gender" 
                                                                                        value={this.state.gender} 
                                                                                        onChange={this.onChange}
                                                                                        />
                                                                                        Mr.
                                                                                </label>
                                                                        </div>
                                                                        <div class="form-check">
                                                                                <label class="form-check-label">
                                                                                <input 

                                                                                        type="radio" 
                                                                                        class="form-check-input" 
                                                                                        name="gender" 
                                                                                        id="gender" 
                                                                                        value={this.state.gender} 
                                                                                        onChange={this.onChange}/>
                                                                                        Ms.
                                                                                </label>
                                                                        </div>
                                                                        <div class="form-check">
                                                                                <label class="form-check-label">
                                                                                <input 
                                                                                        type="radio" 
                                                                                        class="form-check-input" 
                                                                                        name="gender" 
                                                                                        id="gender" 
                                                                                        value={this.state.gender} 
                                                                                        onChange={this.onChange}/>
                                                                                        Other
                                                                                </label>
                                                                        </div>
                                                                </fieldset> */}
                                                        </div>
                                        </div>
                                        <div className= "row form-group" align="left">
                                                <label for="NIC" className="col-md-2">NIC</label>
                                                        <div className="col-md-10">
                                                                <input type="text" value={this.state.NIC} style={formcontrol} onChange={this.onChange} className="form-control" id="NIC" name="NIC" placeholder="NIC"/>                        

                                                        </div>
                                        </div>
                                        <div className= "row form-group" align="left">
                                                <label for="fax" className="col-md-2">Fax</label>
                                                        <div className="col-md-10">
                                                                <input type="text" value={this.state.fax} style={formcontrol} onChange={this.onChange} className="form-control" id="fax" name="fax" placeholder="Fax Number"/>                        

                                                        </div>
                                        </div>
                                        <div className= "row form-group" align="left">
                                                <label for="type" className="col-md-2">Type</label>
                                                        <div className="col-md-10">
                                                                <input type="text" value={this.state.type}style={formcontrol} onChange={this.onChange} className="form-control" id="type" name="type" placeholder="Type"/>                        

                                                        </div>
                                        </div>
                                        <div className= "row form-group" align="left">
                                                <label for="website" className="col-md-2">Website</label>
                                                        <div className="col-md-10">
                                                                <input type="text" value={this.state.website} style={formcontrol} onChange={this.onChange} className="form-control" id="website" name="website" placeholder="Insert website"/>                        

                                                        </div>
                                        </div>
                                        <div className= "row form-group" align="left">
                                                <label for="email" className="col-md-2">E-Mail</label>
                                                        <div className="col">
                                                                <input type="email" value={this.state.email} style={formcontrol}onChange={this.onChange} className="form-control" id="email" name="email"  placeholder="email"/>                        
                                                        </div>
                                        </div>
                                         <div className= "row form-group" align="left">
                                                <label for="address" className="col-md-2">Address</label>
                                                        <div className="col">
                                                                <input type="address" value={this.state.address} style={formcontrol} onChange={this.onChange} className="form-control" id="address" name="address" placeholder="address"/>                        
                                                        </div>
                                        </div> 
                                         <div className= "row form-group" align="left">
                                                <label for="contactNo" className="col-md-2">Contact no</label>
                                                        <div className="col-md">
                                                                <input type="text" value={this.state.phoneNo} style={formcontrol} onChange={this.onChange} className="form-control" id="phoneNo" name="phoneNo" placeholder="contact number"/>                        
                                                        </div>
                                        </div> 

                                        <div className= "row form-group" align="left">
                                                <label for="dob" className="col-md-2">DOB</label>
                                                        <div className="col-md">
                                                                <input type="date" value={this.state.DOB} style={formcontrol} onChange={this.onChange} className="form-control" id="DOB" name="DOB"  placeholder="date of birth"/>                        
                                                        </div>
                                        </div>
                                        

                                        <div className= "row form-group" align="left">
                                                <label for="note" className="col-md-2">Note</label>
                                                        <div className="col-md-10">
                                                        <textarea name="message" rows="3" value={this.state.note} style={formcontrol} onChange={this.onChange} id="note" name="note" className="col-md-12" style={textAreaStyle}>
                                                                The cat was playing in the garden.
                                                        </textarea>           
                                                        </div>
                                        </div>
                                        <div align="right">
                                        <button className="btn btn-primary"  style={btn} type="submit">Submit</button>
                                        </div>
                                        <div>
                                                <br/>
                                        </div>
                                </div>
                        </form>
                </div>
        </div>            
                )
    }
        
    
}



const jumbotronStyle = {
        background: '#f1f1f1'
    }
    
    const invisiblejumbotronStyle = {
        background: '#00000000'
    
    }

const textAreaStyle = {
        border: '1px solid #dedede',
        borderRadius: '10px',
        color : '#828282'
}


const container={
        justifyContent:"right",
        alignItems:"right",
        textAlign: "right",
        background:"rgb(209, 212, 213)",
        backgroundImage:"url(./customers.jpg)",
        width:"700px",
        backgroundImage: "url(./customers.jpg)",



    
    
    }

    
const hr={
        height:"2px",
}

   
    
   
const glyphiconpencil={
        fontSize:"45px" ,
        color:"black",
        marginTop:"20px" ,
        float:"right",
    }


const  h3={
        fontSize: "30px",
        color:"black" ,
        fontWeight:"bold",

    }
    


   
    
const formcontrol={
        background: "transparent",
        borderTop: "1px",
        borderLeft: "1px",
        borderRight:"2px" ,
        marginTop: "1px",
        fontWeight:"bold",
        color:"black" ,
        fontSize: "15px",

    }


const     btn ={
        borderRadius:"20px" ,
        border:"1px solid #ff4b",
        background:"rgba(15, 28, 30, 0.62)",
        color:"rgb(231, 231, 219)",
        fontSize:"12px",
        fontWeight: "bold",
        padding:"12px 45px",
        letterSpacing:"1px" ,
        borderColor:"rgba(15, 28, 30, 0.62)",
    }

const colmd10={
        marginTop: "20px",
        color:"wheat",
   }