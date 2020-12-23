import React from 'react';
import "./index.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Home from "./component/pages/Home";
import About from './component/pages/About';
import Contact from './component/pages/contact';
import AddUser from './component/users/AddUser';
import EditUser from './component/users/EditUser';
import User from './component/users/user';
import Navbar from "./component/layout/Navbar";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import NotFound from './component/pages/NotFound';

function Comp1(){
    return(
        <Router>
        <div className="App">
        <Navbar/>
        <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/about' component={About}/>
        <Route exact path='/contact' component={Contact}/>
        <Route exact path='/users/add' component={AddUser}/>
        <Route exact path='/users/edit/:id' component={EditUser}/> 
        <Route exact path='/users/:id' component={User}/> 
        <Route  component={NotFound}/>
        </Switch>
        </div>
        </Router>
    )
}

export default Comp1;


// <Route exact path='/users/edit/:id' component={EditUser}/> // dynamic routing concept {:id}

 // "homepage": "https://vikas96gupta.github.io/users-crud-operations",
//  "predeploy": "npm run build",
//    "deploy": "gh-pages -d build",