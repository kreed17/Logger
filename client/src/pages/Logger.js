import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import { dateTime, timeLength } from '../time';
import './Logger.css'

import  LogRow  from '../components/LogRow';



function Logger() {
    const [logins, setLogin] = useState([]);
    const [logs, setLogs] = useState([]);
    const [update,setUpdate] = useState(false)
    //const [totaltime, setTotalTime] = useState('');
    let { name } = useParams();

    useEffect(() => {
        async function fetchData() {
            const res = await axios.get(`http://localhost:5001/api/log/${name}`)
            setLogs(res.data.data[0].logs); 
            setLogin(res.data.data[0])
            setUpdate(false)
        }
        fetchData();
    }, [update,name])
     
    function login() {
        let loginTime = dateTime();
        const newLog= {
            logs: [
                ...logs,
                    {
                    login: loginTime,
                    logout: "",
                    duration: ""
                    }
                ]               
        }
        //console.log(logins._id);
        axios.put(`http://localhost:5001/api/log/${logins._id}`, newLog)
            .then((res) => {
               setLogin(newLog);
               setUpdate(true); 
                console.log(res.data);
            }).catch((err) => {
            console.log("Failed to Login ", err.message);
            })
//console.log(logs);
        
    }
    
    function logout() {
        const currLogin = logs[logs.length - 1];
        if (currLogin.logout) {
            window.alert("Must Login First");
        }
        else {
            const newLogout = dateTime();
            currLogin.logout = newLogout;
            currLogin.duration = timeLength(currLogin.login, currLogin.logout);
            //setLogin(currLogin)
            axios.put(`http://localhost:5001/api/log/${logins._id}`, logins)
            .then((res) => {                
                console.log(res.data);
            }).catch((err) => {
            console.log("Failed to Login ", err.message);
        })
         setUpdate(true); 
        }
    }
    

    function handleDelete(id) {
        //axios.delete(`http://localhost:5001/api/log/${id}`)
        const newList = logins.logs.filter(log => log._id !== id);
        const newLog = {
            logs: logins.logs.filter(log => log._id !== id)
        }
        
        axios.put(`http://localhost:5001/api/log/${logins._id}`, newLog)
        .then((res) => {
            console.log(res.data);
        }).catch((err) => {
            console.log("Error couldnt Update Log ", err.message);
        });
        setUpdate(true);        
    }

    function handleEdit(id) {
        const newList =logins.filter(login=>login._id !== id)
        setLogs(newList);

    }
    
    return (
                    
            <div className="container">
            <p style={{fontSize:"30px" ,display: "flex"}}><a href="/">Back</a></p>
            <h1>{name} Logger</h1>

            <div>
                {/* <h3>Total time: 5 hrs</h3> */}
                <button onClick={login}>Login</button>
                <button onClick={logout}>Logout</button>
            </div>
            <h3>Current Logs</h3>
            <div className="log-table" style={{height:"400px" , overflow:"auto"}}>
                <table className='table-contents'>
                    <thead>
                <tr className='table-headers'>
                    <th className='login'>Logged in</th>
                    <th className='logout'>Logged out</th>
                    <th className='time_spent'>Time spent</th>
                    <th className='action'>Action</th>
                </tr>
                    </thead>
                    <tbody className='table-data' >
                  {  logs.map((log, idx) => (                            
                            <LogRow key={idx}
                                    log={log}
                                    handleDelete={handleDelete}
                                    handleEdit={handleEdit}
                            />                       
                ))
                }
                </tbody>
            </table>
            </div> 
            </div>
    )
}

export default Logger





