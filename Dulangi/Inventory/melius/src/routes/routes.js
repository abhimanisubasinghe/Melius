/*!

=========================================================
* Light Bootstrap Dashboard React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Dashboard from "views/Dashboard.jsx";
import UserProfile from "views/UserProfile.jsx";
import TableList from "views/TableList.jsx";
import Typography from "views/Typography.jsx";
import Customerreg from "views/Registerform.jsx";
import Vehiclereg from "views/Vehiclereg.jsx";
import Customerdetails from "views/Customerdetails.jsx";

import Icons from "views/Icons.jsx";
import Maps from "views/Maps.jsx";
import Notifications from "views/Notifications.jsx";
import Upgrade from "views/Upgrade.jsx";
import Hello from "views/Hello.js";
import Itemregister from "views/Itemregister";
import SubNav from "components/Navbars/SubNav";
import Invoice from "views/Invoice"
import Test from "views/Test"


const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "pe-7s-graph",
    component: Dashboard,
    layout: "/admin",
    in  : "TRUE"
  },
  /*{
    path: "/testing",
    name: "Testing",
    icon: "pe-7s-headphones",
    component: Itemregister,
    layout: "/admin"
  },*/
  {
    path: "/user",
    name: "User Profile",
    icon: "pe-7s-user",
    component: UserProfile,
    layout: "/admin",
    in  : "TRUE"
  },
  {
    path: "/table",
    name: "Customers",
    icon: "pe-7s-add-user",
    component: TableList,
    layout: "/admin",
    in  : "TRUE"
  },
  {
    path: "/typography",
    name: "Vehicles",
    icon: "pe-7s-car",
    component: Typography,
    layout: "/admin",
    in  : "TRUE"
  },
  {
    path: "/icons",
    name: "Icons",
    icon: "pe-7s-science",
    component: Icons,
    layout: "/admin",
    in  : "TRUE"
  },
  {
    path: "/maps",
    name: "Maps",
    icon: "pe-7s-map-marker",
    component: Maps,
    layout: "/admin",
    in  : "TRUE"
  },
  {
    path: "/notifications",
    name: "Notifications",
    icon: "pe-7s-bell",
    component: Notifications,
    layout: "/admin",
    in  : "TRUE"
  },
  {
    path: "/testing",
    name: "Testing",
    icon: "pe-7s-headphones",
    component: Itemregister,
    layout: "/admin",
    in  : "TRUE"
  },
  {
    path: "/item_register",
    name: "Register",
    icon: "pe-7s-headphones",
    component: Itemregister,
    layout: "/admin",
    in : "TRUE"
  },
  {
    path: "/inovice",
    name: "Invoice",
    icon: "pe-7s-cart",
    component: Invoice,
    layout: "/admin",
    in : "TRUE"
  },
  {
    path: "/customers",
    name: "Register Customer",
    icon: "pe-7s-add-user",
    component: Customerreg,
    layout: "/admin",
    in  : "FALSE"
  },
  {
    path: "/vehicle",
    name: "Register Vehicle",
    icon: "pe-7s-add-user",
    component: Vehiclereg,
    layout: "/admin",
    in  : "FALSE"
  },
  {
    path: "/details",
    name: "Details",
    icon: "pe-7s-add-user",
    component: Customerdetails,
    layout: "/admin",
    in  : "TRUE"
  },
  {
    path: "/test",
    name: "Test",
    icon: "pe-7s-gleam",
    component: Test,
    layout: "/admin",
    in : "TRUE"
  },
  
  
];



export default dashboardRoutes;
