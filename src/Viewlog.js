import React from 'react';
import './styles.css';
import {useState, useEffect,useRef} from "react";





function Viewemp() {
   

const [logList,setlogList] = useState([]);
const {current: arr} = useRef(logList)
     
    
    const getLogs = async ()=>{

        try {
            const res = await fetch("https://acs-system-backend.herokuapp.com/log");
            const data = await res.json();
            if (res.ok) {
                setlogList(data);

            }
        
        }
        catch (err) {
            console.log(err);
        }
        
    };
  
  
   useEffect(()=>
   {
    getLogs();

   },[arr]
   );
      
  



  return (
    <><head>
          <title>ACSS</title>
          <link rel="stylesheet" href="styles.css">
            </link>
      </head>
          <body>
              <header>
                  <nav>
                      <ul>
                          <li class="logo"><a href="/hub">ACSS LOGO</a></li>
                      </ul>
                  </nav>
              </header>
              <section class="table">
                  <div class="tablecontainer">
                      <table id = "table" align="center" height="150" width="1400">
                          <tr class="top_row">
                              <th width="150">ID</th>
                              <th width="160">Last Name</th>
                              <th width="100">First Name</th>
                              <th width="180">Gender</th>
                              <th width="150">Department</th>
                              <th width="100">Entry</th> 
                              <th width="100">Temperature</th>                                                     
                            
                              <th width="170">Time</th>
                          </tr>
                          {logList.map((employee) => (
                            <tr key = {employee.id}>
                                <td>{employee.RFID}</td>
                                <td>{employee.lastname}</td>
                                <td>{employee.firstname}</td>
                                <td>{employee.gender}</td>
                                <td>{employee.department}</td>
                                <td>{employee.entry}</td>
                                <td>{employee.temp}</td>
                                <td>{employee.time}</td>
                                

                              </tr>                     
                            )                           
                          )                         
                          }
                          

                          </table>
                  </div>
              </section>
              <footer>Made by: ACSS Developers - Version 2.87 - Automated Covid Screening System Website © - Contact: info.help@acss.com</footer>
          </body></>
     
  );
}

export default Viewemp;