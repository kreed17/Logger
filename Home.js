import React, { useState } from 'react'
import logData from '../data'
import { dateTime } from '../time';
import './Home.css';


function Home() {
    const [logs, setLog] = useState(logData);
    const [input, setInput] = useState('');
    
    
    function newLogger() {
        let today = dateTime("date");
        if (input === "") {
            window.alert("Enter Name First")
        }
        else if (logs.find(log => log.name === input)) {
            window.alert("Log already created");
        }
        else {
            const newLog = {
                id: Date.now(),
                name: input,
                lastUpdate: today,
                logs: []
            };
            setLog([...logs,newLog])
            setInput('');
        }
        
    }

    function handleDelete(id) {
        const newList =logs.filter(log=>log.id !== id)
        setLog(newList);
    }

    return (
        <div className="container">
            <h1>Logger</h1>
            <div>
                {/* <form action="">
                    <label>New Log  */}
                        <input value={input}
                            onChange={event => setInput(event.target.value)}
                             placeholder="Enter Log Name" />
                        <button onClick={newLogger}>Create Logger</button>
                    {/* </label>
                </form> */}
            </div>
            <h3>Current Logs</h3>
            <div className="table">
                <table>
                <thead>
                <tr>
                    <th className='name'>Name</th>
                    <th className='update'>Last Updated</th>
                   <th className='action'>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                {
                        logs.map(log => (
                        <tr key ={log.id}>
                           <td className='name'>{log.name}</td>
                           <td className='update'>{log.lastUpdate}</td>
                           <td className='action'>
                                <button onClick={() => handleDelete(log.id)}>X</button>
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

export default Home
