import axios from 'axios';
import { set } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { Link ,useNavigate} from 'react-router-dom';
import Td from '../components/Td';
import { dateTime } from '../time';
import './Home.css';


function Home() {
    const [logs, setLog] = useState([]);
    const [input, setInput] = useState('');
    let navigate = useNavigate();

    useEffect(() => {
        async function fetchData() {
            const res = await axios.get('http://localhost:5001')
            console.log(res.data);
            setLog(res.data)

        }
        fetchData();
    }, [])
    
    function handleSubmit(e) {
        e.preventDefault();
        if (input === "") {
            window.alert("Enter Name First")
        }
        else if (logs.find(log => log.name.toLowerCase() === input.toLowerCase())) {
            window.alert("Log already created");
        }
        else {
            let today = dateTime("date");
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
    function handleClick(name) {
        navigate(`/${name}`)
        console.log("link");
    }

    function handleDelete(id) {
        const newList =logs.filter(log=>log.id !== id)
        setLog(newList);
    }

    return (
        <div className="container">
            <h1>Logger</h1>
            <div>
                <form onSubmit={handleSubmit}>
                    <label>
                        <input
                            type='text'
                            value={input}
                            onChange={event => setInput(event.target.value)}
                          placeholder="Enter Log Name" 
                        />
                    </label>
                        <button type='submit'>Create Logger</button>
                </form>
            </div>
            <h3>Current Logs</h3>
            <div className="table">
                <table className='table-contents'> 
                <thead>
                <tr>
                    <th className='name'>Name</th>
                    <th className='update'>Date Created</th>
                   <th className='action'>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            logs.map(log => (
                                <tr key={log.id}>
                                    <Link to={`/${log.name}`} style={{color:'inherit'}}>
                                    <td>{log.name}</td>
                                        </Link>
                                    <td>{log.lastUpdate}</td>
                                    <td>
                                        <button type='button' onClick={() =>handleDelete(log.id)}>X</button>
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
