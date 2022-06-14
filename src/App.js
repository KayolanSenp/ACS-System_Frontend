import React from "react";
import "./styles.css"
import Login from "./Login";
import Hub from "./Hub";
import  Viewemp from "./Viewlog";
import {Route,Routes} from "react-router-dom";


function App(){
    return(
    <div className="App">
        <Routes>
            <Route exact path="https://dazzling-pavlova-051a02.netlify.app" element={<Login />} /> 
            <Route exact path="https://dazzling-pavlova-051a02.netlify.app/hub" element={<Hub />} />
            <Route exact path="https://dazzling-pavlova-051a02.netlify.app/logs" element={<Viewemp />} />
        </Routes>
           
    </div>

    );
} 
export default App;