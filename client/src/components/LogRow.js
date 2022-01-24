import React, { useState } from 'react';
import './LogRow.css';
import { Link } from 'react-router-dom';

function LogRow({ log, handleDelete, handleEdit }) {   
    //console.log(log);
    const { _id, login, logout, duration } = log;
    
        return (
            <tr className= 'row__data' key= {_id} >
        
                <td>{login}</td>
                <td>{logout}</td>
                <td>{duration}</td>
                <td>
                   <button onClick={() => handleDelete(_id)}>X</button>
                   {/* <button onClick={() => handleEdit(_id)}>?</button>                */}
                </td>
        </tr>
        )        
}

export default LogRow




// <button onClick={() => handleDelete(log._id)}>X</button>
// <button onClick={() => handleEdit(log.logid)}>?</button> 