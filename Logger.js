import React, { useState } from 'react'
import {logData} from '../data';
import {dateTime, timeLength} from '../time'


function Logger() {
    const [logins, setLogin] = useState(logData[0].logs);
    const [totaltime,setTotalTime]= useState('')  

           
    function login() {
        let loginTime = dateTime();
        const newLogin = {
            id: Date.now(),
            login: loginTime,
            logout: "",
            length:""
        }
        setLogin([...logins,newLogin])

    }
    
    function logout() {
        const currLogin = logins[logins.length - 1];
        if (currLogin.logout === '') {
            const newLogout = dateTime();
            currLogin.logout = newLogout;
            currLogin.length = timeLength(currLogin.login, currLogin.logout)
          //  console.log(currLogin.length);
            setLogin([...logins]);
        } else {
            window.alert("Must login First!");
        }
    }

    function handleDelete(id) {
        const newList =logins.filter(login=>login.id !== id)
        setLogin(newList);
    }
    function handleEdit(id) {
        const newList =logins.filter(login=>login.id !== id)
        setLogin(newList);
    }
    
    return (
      
        <div className="container">
            <h1>
                <a href="/">Coding Logger</a>
                </h1>
            
            <div>
                <h3>Weekly Total time: 5 Hours</h3>
                <button onClick={login}>Login</button>
                <button onClick={logout}>Logout</button>
        </div>
        <h3>Current Logs</h3>
        <div className="table">
                <table>
                    <thead>
                <tr>
                    <th className='login'>Logged in</th>
                    <th className='logout'>Logged out</th>
                    <th className='time_spent'>Time spent</th>
                   <th className='action'>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                {
                    logins.map(log => (
                        <tr key={log.id}>
                      
                            <td>{log.login}</td>
                            <td>{log.logout}</td>
                            <td>{log.length}</td>
                            <td>
                                <button onClick={() => handleDelete(log.id)}>X</button>
                                <button onClick={() => handleEdit(log.id)}>?</button>
                            
                            </td>
                       </tr>
                   ))
                }
                </tbody>
            </table>
        </div>
    </div>
    )
}

export default Logger
