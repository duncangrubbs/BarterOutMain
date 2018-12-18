/**
 * @file routes.js
 * @description All client-side routes for react-router.
 * @author Duncan Grubbs <duncan.grubbs@gmail.com>
 * @version 0.0.4
 */

import React from 'react';
import {
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

import AuthService from './services/AuthService';

import LandingPage from './LandingPage/LandingPage';

import SignUp from './routes/SignUp/SignUp';
import Login from './routes/Login/Login';

import Home from './routes/Home/Home';
import Buy from './routes/Buy/Buy';
import Sell from './routes/Sell/Sell';
import Track from './routes/Track/Track';
import Settings from './routes/Settings/Settings';
import Help from './routes/Help/Help';
import Cart from './routes/Cart/Cart';
import EditPassword from './routes/EditPassword/EditPassword';

import TermsOfService from './routes/TermsOfService/termsOfService';
import PrivacyPolicy from './routes/PrivacyPolicy/privacyPolicy';
import Contact from './routes/Contact/contact';
import Careers from './routes/Careers/careers';
import About from './routes/About/About';

import ForgotPassword from './routes/ForgotPassword/ForgotPassword';
import ForgotPasswordSuccess from './routes/ForgotPassword/ForgotPasswordSuccess';
import ResetPassword from './routes/resetPassword/ResetPassword';
import SignUpSuccess from './routes/SignUpSuccess/SignUpSuccess';
import EmailConfirmed from './routes/EmailConfirmed/EmailConfirmed';

import DashboardHome from './Dashboard/Home/DashboardHome';
import Dashboard from './Dashboard/Dashboard';

import page404 from './routes/page404/page404';

const PrivateRoute = ({ component: Component, rest }) => {
  const auth = new AuthService();
  return (
    <Route
      {...rest}
      render={(props) => 
        auth.loggedIn()
        ? <Component {...props} />
        : <Redirect to={{pathname: '/login'}}
      />}
    />
  );
};

const DashboardRoute = ({ component: Component, rest }) => {
  const auth = new AuthService();
  return (
    <Route
      {...rest}
      render={(props) => 
        auth.getProfile().userInfo.permissionType === 1
        ? <Component {...props} />
        : <Redirect to={{pathname: '/dashboard'}}
      />}
    />
  );
};

export default (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route exact path="/termsOfService" component={TermsOfService} />
    <Route exact path="/privacyPolicy" component={PrivacyPolicy} />
    <Route exact path="/contact" component={Contact} />
    <Route exact path="/careers" component={Careers} />
    <Route exact path="/About" component={About} />
    <Route path="/resetPassword/:resetToken" component={ResetPassword} />
    <PrivateRoute exact path="/home" component={Home} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/signup" component={SignUp} />
    <PrivateRoute exact path="/buy" component={Buy} />
    <PrivateRoute exact path="/sell" component={Sell} />
    <PrivateRoute exact path="/track" component={Track} />
    <PrivateRoute exact path="/settings" component={Settings} />
    <PrivateRoute exact path="/help" component={Help} />
    <PrivateRoute exact path="/cart" component={Cart} />
    <PrivateRoute exact path="/editPassword" component={EditPassword} />
    <Route exact path="/forgotPassword" component={ForgotPassword} />
    <Route exact path="/forgotPasswordSuccess" component={ForgotPasswordSuccess} />
    <Route exact path="/signUpSuccess" component={SignUpSuccess} />
    <Route exact path="/emailConfirmed" component={EmailConfirmed} />
    <Route exact path="/dashboard" component={Dashboard} />
    <DashboardRoute exact path="/dashboard/home" component={DashboardHome} />
    <Route path="*" component={page404} />
  </Switch>
);
