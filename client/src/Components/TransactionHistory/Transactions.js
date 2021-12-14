import React, { useState, useEffect } from "react";
import "./Transactions.css";
import axios from "axios";
import Table from "react-bootstrap/Table";

//Transaction history page
const Transactions = () => {
  const [transaction, setTransaction] = useState([]);

  useEffect(() => {
    axios
      .get('/transactions')
      .then((res) => setTransaction(res.data))
      .catch((err) => console.log(err));
    console.log(transaction);
  });
  return (
    <div className="trasaction-history-table">
      <h3 className="Heading">Transaction History</h3>
      <Table striped bordered hover responsive variant="bordered" size="sm">
        <thead>
          <tr>
            <th>Transaction-ID</th>
            <th>Sender</th>
            <th>Recipient</th>
            <th>Amount Transferred (.₹)</th>
            <th>Date & Time</th>
          </tr>
        </thead>
        <tbody>
          {transaction.map((trans) => (
            <tr key={trans._id}>
              <td>{trans.transactionId}</td>
              <td>{trans.sender}</td>
              <td>{trans.receiver}</td>
              <td>{trans.amount}</td>
              <td>{trans.date}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Transactions;
