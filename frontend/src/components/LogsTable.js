import React from 'react';
import { coding } from '../data';

function LogsTable() {
    return (
        <div className="table">
            <table>
                <tr>
                    <th className='login'>Logged in</th>
                    <th className='logout'>Logged out</th>
                    <th className='time_spent'>Time spent</th>
                   <th className='action'>Action</th>
                </tr>
                {
                    coding.map(log => (
                        <tr>
                            <th>{log.login}</th>
                            <th>{log.logout}</th>
                            <th>{log.length}</th>
                            <th>X</th>
                       </tr>
                   ))
                }
            </table>
        </div>
    )
}

export default LogsTable
