import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {useNavigate } from 'react-router-dom';
//import LogRow from '../components/LogRow';
//import Td from '../components/Td';
import { dateTime } from '../time';
import './Home.css';




function Home() {
    const [logs, setLog] = useState([]);
    const [input, setInput] = useState('');
    const [update,setUpdate] = useState(false)
    let navigate = useNavigate();

    useEffect(() => {
        async function fetchData() {
            const res = await axios.get('http://localhost:5001/api/log')
            setLog(res.data)
            setUpdate(false)
            //console.log(res.data);
        }
        fetchData();
    }, [update])
    
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
                name: input,
                dateCreated: today,
                logs: []
            };
            //console.log(newLog);
            axios.post("http://localhost:5001/api/log", newLog)
                .then((res) => {
                    setUpdate(true)
                    setInput('');
                    console.log(res.data);
                }).catch((err) => {
                    console.log("Error couldnt create Log ", err.message);
                });
        };        
    };

    // function handleClick(name) {
    //     navigate(`/${name}`)
    //     console.log("link");
    // }

    function handleDelete(id) {       
        axios.delete(`http://localhost:5001/api/log/${id}`)
        .then((res) => {
            setUpdate(true)
            console.log(res.data);
        }).catch((err) => {
            console.log("Error couldnt Delete Log ", err.message);
        });
        const newList = logs.filter(log => log.id !== id)
        setLog(newList);
        setUpdate(true)
    }

    return (
        <div className="container">
            <h1 className='title'>Logger</h1>
            <div>
                <form className='form-content' onSubmit={handleSubmit}>
                    <label>
                        <input
                            type='text'
                            value={input}
                            onChange={event => setInput(event.target.value)}
                          placeholder="Enter Log Name" 
                        />
                    </label>
                        {/* <button type='submit'>Create Logger</button> */}
                </form>
                <h2>Current Logs</h2>
            </div>
            <div className="home-table">
                <table className='table-content'> 
                <thead>
                {/* <tr className='table-headers'>
                    <th className='name'>Name</th>
                    <th className='update'>Date Created</th>
                    <th className='action'>Action</th>
                </tr> */}
                    </thead>
                
                    <tbody>
                        {
                            logs.map(log => (
                                <tr key={log._id}>
                                    {/* <Link to={`/${log.name}`} style={{color:'inherit'}}> */}
                                    <td className="log-name" onClick={() => navigate(`/${log.name}`)}>{log.name}</td>
                                        
                                    <td>{log.dateCreated}</td>
                                    <td>
                                        <button type='button' onClick={() =>handleDelete(log._id)}>X</button>
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
