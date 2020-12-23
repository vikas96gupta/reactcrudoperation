import React from "react";

import {Route, Switch} from 'react-router-dom';
import {Comp , Menu} from './Comp';
 
const Fun= () => {
    return(
      <h2>it is good time</h2>
    )
}

const Funrout= () => {
  return(
    <h2>it is jhgtuygfvufgyu good time</h2>
  )
  }

 const App=()=>{
    
    return(
      <>
      <Menu/>
        <Switch>
          <Route exact  path='/' component={Comp}     />
          <Route   path='/fun' component={Fun}     />
          <Route   path='/rout/ter' component={Funrout}     />
        </Switch>
      </>
    )

 }

 export default App;