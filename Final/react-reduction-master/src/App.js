import { STATE_LOGIN, STATE_SIGNUP } from 'components/AuthForm';
import GAListener from 'components/GAListener';
import { EmptyLayout, LayoutRoute, MainLayout } from 'components/Layout';
import PageSpinner from 'components/PageSpinner';
import AuthPage from 'pages/AuthPage';
import React from 'react';
import componentQueries from 'react-component-queries';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import './styles/reduction.scss';
import Profile from './components/Profile';
import Cookies from 'universal-cookie';


import Login from 'pages/AuthPage.js';
//import { Router } from 'express';

import AlertPage from './pages/AlertPage';
import AuthModalPage from './pages/AuthModalPage';
import BadgePage from './pages/BadgePage';
import ButtonGroupPage from './pages/ButtonGroupPage';
import ButtonPage from './pages/ButtonPage';
import CardPage from './pages/CardPage';
import ChartPage from './pages/ChartPage';
import DashboardPage from './pages/DashboardPage';
import DropdownPage from './pages/DropdownPage';
import FormPage from './pages/FormPage';
import InputGroupPage from './pages/InputGroupPage';
import ModalPage from './pages/ModalPage';
import ProgressPage from './pages/ProgressPage';
import TablePage from './pages/TablePage';
import TypographyPage from './pages/TypographyPage';
import WidgetPage from './pages/WidgetPage';
import RegisterItemPage from './pages/item/RegisterItemPage';
import AddCustomer from './pages/customer/AddCustomer';
import ViewCustomer from './pages/customer/ViewCustomer';
import AddVehicle from './pages/vehicle/AddVehicle';

// const AlertPage = React.lazy(() => import('pages/AlertPage'));
// const AuthModalPage = React.lazy(() => import('pages/AuthModalPage'));
// const BadgePage = React.lazy(() => import('pages/BadgePage'));
// const ButtonGroupPage = React.lazy(() => import('pages/ButtonGroupPage'));
// const ButtonPage = React.lazy(() => import('pages/ButtonPage'));
// const CardPage = React.lazy(() => import('pages/CardPage'));
// const ChartPage = React.lazy(() => import('pages/ChartPage'));
// const DashboardPage = React.lazy(() => import('pages/DashboardPage'));
// const DropdownPage = React.lazy(() => import('pages/DropdownPage'));
// const FormPage = React.lazy(() => import('pages/FormPage'));
// const InputGroupPage = React.lazy(() => import('pages/InputGroupPage'));
// const ModalPage = React.lazy(() => import('pages/ModalPage'));
// const ProgressPage = React.lazy(() => import('pages/ProgressPage'));
// const TablePage = React.lazy(() => import('pages/TablePage'));
// const TypographyPage = React.lazy(() => import('pages/TypographyPage'));
// const WidgetPage = React.lazy(() => import('pages/WidgetPage'));
// const RegisterItemPage = React.lazy(() => import('pages/item/RegisterItemPage'));
import AddNewPRPage from './pages/item/AddNewPR';
import AddNewPOPage from './pages/item/AddNewPO';
import POTablePage from './pages/item/PO';
import PRTablePage from './pages/item/PR';
import ServiceInvoice from './pages/service/ServiceInvoice';
//import AddNewPRPage from './pages/item/AddNewPR';
import RegisterStoragePage from './pages/storage/RegisterStoragePage';
import RegisterOperatorPage from './pages/operator/RegisterOperatorPage';
import ViewOperatorPage from './pages/operator/ViewOperatorPage';
import InvoiceServicePrint from './pages/service/PrintInvoiceService';
import Addservice from './pages/service/Addservice';
import OperatorProfilePage from './pages/operator/OperatorProfilePage';
import OperatorUpdatePage from './pages/operator/OperatorUpdatePage';
import ServiceView from './pages/service/ViewService';
import ServiceProfilePage from './pages/service/ServiceProfile';
import SingleView from './pages/customer/SingleView';
import UpdateCustomer from './pages/customer/UpdateCustomer';
import ViewVehicle from './pages/vehicle/ViewVehicle';
import Singlevehicle from './pages/vehicle/Singlevehicle';
import UpdateVehicle from './pages/vehicle/UpdateVehicle';
import ServiceUpdate from './pages/service/ServiceUpdate';
import ServiceDelete from './pages/service/ServiceDelete';
import CreateAppointmentPage from './pages/appointments/CreateAppointmentPage';



const getBasename = () => {
  return `/${process.env.PUBLIC_URL.split('/').pop()}`;
};

const cookies = new Cookies();
cookies.set();

class App extends React.Component {

  render() {
    return (
      <BrowserRouter basename={getBasename()}>
        <GAListener>
          <Switch>
            <LayoutRoute
              exact
              path="/login"
              layout={EmptyLayout}
              component={props => (
                <AuthPage {...props} authState={STATE_LOGIN} />
              )}
            />
            <LayoutRoute
              exact
              path="/signup"
              layout={EmptyLayout}
              component={props => (
                <AuthPage {...props} authState={STATE_SIGNUP} />
              )}
            />

            <MainLayout breakpoint={this.props.breakpoint}>
              <React.Suspense fallback={<PageSpinner />}>
                <Route exact path="/profile" component={Profile}/>
                <Route exact path="/" component={DashboardPage} />
                <Route exact path="/login-modal" component={AuthModalPage} />
                <Route exact path="/buttons" component={ButtonPage} />
                <Route exact path="/cards" component={CardPage} />
                <Route exact path="/widgets" component={WidgetPage} />
                <Route exact path="/typography" component={TypographyPage} />
                <Route exact path="/alerts" component={AlertPage} />
                <Route exact path="/tables" component={TablePage} />
                <Route exact path="/badges" component={BadgePage} />
                <Route
                  exact
                  path="/button-groups"
                  component={ButtonGroupPage}
                />
                <Route exact path="/dropdowns" component={DropdownPage} />
                <Route exact path="/progress" component={ProgressPage} />
                <Route exact path="/modals" component={ModalPage} />
                <Route exact path="/forms" component={FormPage} />
                <Route exact path="/input-groups" component={InputGroupPage} />
                <Route exact path="/charts" component={ChartPage} />
                <Route exact path="/item-register" component={RegisterItemPage} />
                <Route exact path="/new-pr" component={AddNewPRPage} />
                <Route exact path="/new-po" component={AddNewPOPage} />
                <Route exact path="/po-view" component={POTablePage} />
                <Route exact path="/pr-view" component={PRTablePage} />
                {/* <Route exact path="/new-pr" component={AddNewPRPage} /> */}
                <Route exact path="/storage-register" component={RegisterStoragePage} />
                <Route exact path="/operator-register" component={RegisterOperatorPage} />
                <Route exact path="/operator-view" component={ViewOperatorPage} />
                <Route exact path="/operator-profile" component={OperatorProfilePage} />
                <Route exact path="/operator-update" component={OperatorUpdatePage} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/add-customer" component={AddCustomer} />
                <Route exact path="/view-customer" component={ViewCustomer} />
                <Route exact path="/add-vehicle" component={AddVehicle} />
                <Route exact path="/new-invoice" component={ServiceInvoice} />
                <Route exact path="/printInvoiceService" component={InvoiceServicePrint}/>
                <Route exact path="/service-add" component={Addservice}/>
                <Route exact path="/service-view" component={ServiceView}/>
                <Route exact path="/service-profile" component={ServiceProfilePage}/>
                <Route exact path="/addservice" component={Addservice}/>
                <Route exact path="/singleview" component={SingleView}/>
                <Route exact path="/updatecustomer" component={UpdateCustomer}/>
                <Route exact path="/view-vehicle" component={ViewVehicle}/>
                <Route exact path="/singlevehicle" component={Singlevehicle}/>
                <Route exact path="/updatevehicle" component={UpdateVehicle}/>
                <Route exact path="/service-update" component={ServiceUpdate}/>
                <Route exact path="/service-delete" component={ServiceDelete}/>
                <Route exact path="/appointment-create" component={CreateAppointmentPage}/>

              </React.Suspense>
            </MainLayout>
            <Redirect to="/" />
          </Switch>
        </GAListener>
      </BrowserRouter>
    );
  }
}

const query = ({ width }) => {
  if (width < 575) {
    return { breakpoint: 'xs' };
  }

  if (576 < width && width < 767) {
    return { breakpoint: 'sm' };
  }

  if (768 < width && width < 991) {
    return { breakpoint: 'md' };
  }

  if (992 < width && width < 1199) {
    return { breakpoint: 'lg' };
  }

  if (width > 1200) {
    return { breakpoint: 'xl' };
  }

  return { breakpoint: 'xs' };
};

export default componentQueries(query)(App);