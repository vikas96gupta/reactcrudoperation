import React , {useContext, useState, useEffect} from 'react';
import {Name,Last} from './App';

const Map=()=>{
    let[num, setname]= useState(0);
            
       let fname= useContext(Name);
       let last=  useContext(Last);
       useEffect(()=> {
               document.title=`it is clicked now ${num}`  ;
       })
    return(
      <>
       
        <h1>My name is vikas {fname} </h1>
        <h2>{last} </h2>

        <button onMouseEnter={ () => {
             setname(num ++ )
             ; } } >
        Clicked the effect {num}</button>
      </>
    )

 }

 export default Map;












///* ------------------------
/*

  const Sdata= [
    {
      imgsrc :" https://wallpapercave.com/wp/wp4056410.jpg" ,
        link:'https://www.netflix.com/in/title/80100172'    ,
        sname:"Dark" ,
        title:'Netflix web series' 
    },

    {
        imgsrc:" https://wallpapercave.com/wp/wp1839579.jpg" ,
        link:'https://www.netflix.com/in/title/80057281'    ,
        sname:"Stranger things" ,
        title:'Netflix web series' 
    },

    {
        imgsrc:"https://wallpapercave.com/wp/wp5410711.jpg" ,
        link:'https://www.netflix.com/in/title/80189685'    ,
        sname:"The Witcher" ,
        title:'Netflix web series' 
    } ,

    {
        imgsrc:"https://wallpapercave.com/wp/wp5410711.jpg" ,
        link:'https://www.netflix.com/in/title/80192098'    ,
        sname:"The Witcher" ,
        title:'Netflix web series' 
    }

]


export default Sdata;

-----------------
     */
 