import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/esm/Button';
import './User-content.css'
import axios from 'axios';
import { useHistory } from "react-router-dom";

const Userdets = () => {
    const [users, setUsers] = useState([]);
    useEffect(()=>{
        axios
            .get('/customers')
            .then(res=>setUsers(res.data))
            .catch(err=>console.log(err));
    })
    let history = useHistory();
    const transferhandler = (Id)=>{
        console.log(users);
        history.push({pathname:`/transfer/${Id}`,state:{users:users}});
    }

    return ( 
        <div className="User-details-table">
            <h3 className="Heading">Customer Details</h3>
            <Table  striped bordered hover responsive variant="bordered" size="sm">
                <thead>
                    <tr>
                        <th>User-ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email-ID</th>
                        <th>Balance (₹.)</th>
                        <th>Operation</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user)=>
                    <tr key={user.customerId}>
                        <td>{user.customerId}</td>
                        <td>{user.firstname}</td>
                        <td>{user.lastname}</td>
                        <td>{user.email}</td>
                        <td>{user.balance}</td>
                        <td><Button variant="success" id={user.id} onClick={()=>transferhandler(user._id)}>Transfer</Button></td>
                    </tr>)}
                </tbody>
            </Table>
        </div>
     );
}
 
export default Userdets;