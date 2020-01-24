import React from 'react'
import { Router,Route,IndexRoute,hashHistory } from "react-router"
import Admin from "layouts/Admin"
import Hello from "views/Hello.js"
import Itemregister from "views/Itemregister";
import ItemTransfer from "views/ItemTransfer";


const itemNavBarRoutes = [
  
    {
      path: "/item_register",
      name: "Register",
      icon: "pe-7s-headphones",
      component: Itemregister,
      layout: "/admin"
    },
    {
      path: "/item_display",
      name: "Item",
      icon: "pe-7s-headphones",
      component: Itemregister,
      layout: "/admin"
    },
    {
      path: "/item_transfer",
      name: "Transfer",
      icon: "pe-7s-headphones",
      component: ItemTransfer,
      layout: "/admin"
    },

    
    
  ];

  export default itemNavBarRoutes;
