import React  from 'react';
import {NavLink} from 'react-router-dom';



const Menu= () =>{

    return(
        <>
           <NavLink  active to='/'>
            About us </NavLink>
          
        </>
    )
 }




const Comp=()=>{
    
    return(
      <>
      <h1> I am cmpo page</h1>
      </>
    )

 }


 export  {Comp};
 export {Menu};