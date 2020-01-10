import React from 'react'
import { Router,Route,IndexRoute,hashHistory } from "react-router"
import Admin from "layouts/Admin"
import Hello from "views/Hello.js"
import Itemregister from "views/Itemregister";


const itemNavBarRoutes = [
  
    {
      path: "/item_register",
      name: "Register",
      icon: "pe-7s-headphones",
      component: Itemregister,
      layout: "/admin"
    },
    
    
  ];

  export default itemNavBarRoutes;
