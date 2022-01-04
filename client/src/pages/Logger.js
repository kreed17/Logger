import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import {logData} from '../data';
import { dateTime, timeLength } from '../time';
import './Logger.css'


function Logger() {
    const [logins, setLogin] = useState([]);
    const [totaltime, setTotalTime] = useState('');
    let { id } = useParams();

    // useEffect(() => {
    //     async function fetchData() {
    //         const res = await axios.get('http://localhost:5001')
    //         console.log(res.data);
    //         setLog(res.data)
    //     }
    //     fetchData();
    // }, [])
    
    function login() {
        let loginTime = dateTime();
        const newLogin = {
            id: Date.now(),
            login: loginTime,
            logout: "",
            duration: ""
        }
        setLogin([...logins, newLogin])
        console.log(logins);
    }
    
    function logout() {
        const currLogin = logins[logins.length - 1];
        if (currLogin.logout === '') {
            const newLogout = dateTime();
            currLogin.logout = newLogout;
            currLogin.duration = timeLength(currLogin.login, currLogin.logout)
            //  console.log(currLogin.length);
            setLogin([...logins]);
        } else {
            window.alert("Must login First!");
        }
    }
    let {duration}= logins;
    console.log(duration);

    function handleDelete(id) {
        const newList =logins.filter(login=>login.logid !== id)
        setLogin(newList);
    }
    function handleEdit(id) {
        const newList =logins.filter(login=>login.id !== id)
        setLogin(newList);
    }
    
    return (
      
        <div className="container">
            <p><a href="/">Back</a></p>
            <h1>{id} Logger</h1>
            
            <div>
                <h3>Total time: 5 Hours</h3>
                <button onClick={login}>Login</button>
                <button onClick={logout}>Logout</button>
        </div>
        <h3>Current Logs</h3>
        <div className="table">
                <table className='table-contents'>
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
                        <tr
                        key={log.logid}
                        >
                      
                            <td>{log.login}</td>
                            <td>{log.logout}</td>
                            <td>{log.duration}</td>
                            <td>
                                <button onClick={() => handleDelete(log.logid)}>X</button>
                                <button onClick={() => handleEdit(log.logid)}>?</button>
                            
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
