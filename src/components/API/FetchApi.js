import React, { useState, useEffect } from 'react'

import './FetchApi.css';
function FetchApi() {
    const [data, setData] = useState([])
    const apiGet = () => {
        fetch('https://swapi.dev/api/people/')
            .then((response) => response.json())
            .then((result) => {
                console.log(result.results);
                setData(result.results);
            });
    }
    useEffect(() => {
        apiGet();
    }, [])
    return ( <div className = "app-container" > { /* <button onClick={apiGet}>Fetch</button> */ } <br/>
            <select> {
                data.map((item) => <option key = {item.id} > {item.name } </option>)};
                 </select> 
                 <br/>
                    <table>
                    <thead>
                    <tr>
                    <th> Name </th>
                     <th> Gender </th>
                      <th> Height </th>
                       </tr> <tr >
                    <td> {
                        data.map((item) => <option key = {item.id}> {item.name} </option>)}
                         </td>
                          <td> {data.map((item) => <option key = {item.id} > {item.gender} </option>)}
                           </td> 
                            <td>{data.map((item)=><option key={item.id}>{item.height}</option >)
                            } 
                            </td>
                             </tr>
                              <tr>
                         </tr>
                          </thead>
                           </table> 
                           </div>
                        )
                    }
                    export default FetchApi