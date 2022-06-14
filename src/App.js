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
            <Route exact path="/" element={<Login />} /> 
            <Route exact path="/hub" element={<Hub />} />
            <Route exact path="/logs" element={<Viewemp />} />
        </Routes>
           
    </div>

    );
} 
export default App;
