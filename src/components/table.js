import React from 'react';
import './styles.css'


export function Table({ url, title }) {
    const abc = `https://${url}`
    return( 
        <div className="Table">
           
            <table>
                <thead>
                <tr>
                    <th>Site</th>
                    <th>url</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>{title}</td>
                    <td><a href={abc} className="url">{abc}</a></td>
                </tr>
                </tbody>
            </table>
        </div>
    )}