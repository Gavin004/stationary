import React from 'react' ;
import { Route,BrowserRouter,Routes } from 'react-router-dom';
import Home from "./Home";
import ADD from "./Form";

import NAV from './Nav';

const App =()=> {
    return(
        <>
        <BrowserRouter>
       
            <NAV/>
            <Routes>
            <Route exact path="/" element={<Home/>}/>
            
            <Route  path="/form" element={<ADD/>}/>
  
        </Routes>
        </BrowserRouter> 
        </>
    )
}
export default App;