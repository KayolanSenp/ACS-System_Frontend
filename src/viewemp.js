import './styles.css';
import {useState,useEffect} from "react";
function App() {
   
const [employeesList,setemployeesList] = useState([]);
    
    const getemployee = async ()=>{

        try {
            const res = await fetch("http://localhost:3001/employee");
            const data = await res.json();
            if (res.ok) {
                setemployeesList(data);
            }
        
        }
        catch (err) {
            console.log(err);
        }
        
    };

    useEffect(()=>{
        getemployee();
    },[employeesList]);


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
                          <li class="logo"><a href="hubpage.html">ACSS LOGO</a></li>
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
                              
                              <th width="170">Time</th>
                          </tr>
                          {employeesList.map((employee) => (
                            <tr key = {employee.id}>
                                <td>{employee.RFID}</td>
                                <td>{employee.lastname}</td>
                                <td>{employee.firstname}</td>
                                <td>{employee.gender}</td>
                                <td>{employee.department}</td>
                                <td>{employee.updatedAt}</td>
                            </tr>
                          ))}

                          </table>
                  </div>
              </section>
              <footer>Made by: Abdulrahman Abu Raas - Version 2.87 - Automated Covid Screening System Website © - Contact: info.help@acss.com</footer>
          </body></>
     
  );
}

export default App;