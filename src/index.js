import React from 'react';
import ReactDom from "react-dom";
import './index.css';
import Comp1 from './comp1'  ;

 

 ReactDom.render(
   
    <React.StrictMode>
        <Comp1/>
    </React.StrictMode>
   , document.getElementById("root")

 )

 /*   
 import { BrowserRouter } from "react-router-dom";
import App from "./App";

<BrowserRouter> <App/> 
    </BrowserRouter>
*/