import React, { useState } from "react";
import "./Transfer.css";
import { useHistory } from "react-router-dom";
import { updateHandler } from "./updateHandler";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
//create a fuction to fetch and update info accordingly.

const Transfer = (props) => {
  const history = useHistory();

  //Customer-Details, senderID, RecepientID, Amount states
  const [customs] = useState(props.location.state.users);
  const [receiver, setReceiver] = useState("select recepient");
  const [amount, setAmount] = useState("Entered amount");
  const [sender] = useState(props.match.params.id);
  //Senders details
  const temp = customs.find((user) => user._id === props.match.params.id);

  //Amount input handler
  function amountHandler(event) {
    // console.log(event.target.value);
    setAmount(event.target.value);
  }

  //Receipient selector handler
  function selectHandler(event) {
    setReceiver(event.target.value);
  }

  //transferamount
  const transferHandler = (s, r, a) => {
    const senderComps = customs.find((user) => user._id === s);
    const receiverComps = customs.find((user) => user._id === r);
    const transAmount = a;
    // console.log(transAmount);
    senderComps.balance = senderComps.balance - transAmount;
    // console.log(senderComps);
    receiverComps.balance = Number(receiverComps.balance) + Number(transAmount);
    // console.log(receiverComps);
    updateHandler(senderComps, receiverComps, transAmount);
    history.push("/success");
  };

  return (
    <div className="transfer-card parent">
      <Card border="primary" style={{ width: "25rem" }} className="child">
        <Card.Header>Transfer Money</Card.Header>
        <Card.Body>
          <Card.Title>
            Username: {temp.firstname} {temp.lastname}
          </Card.Title>
          <Card.Title>Balance: ₹ {temp.balance}</Card.Title>
          <Form>
            <Row className="contentrow">
              <Col md="auto">
                <Form.Label>
                  <b>Enter Amount:</b>
                </Form.Label>
              </Col>
              <Col>
                <Form.Control
                  type="number"
                  placeholder="Amount"
                  onChange={(event) => amountHandler(event)}
                />
              </Col>
            </Row>
            <Row className="contentrow">
              <Col>
                <Form.Label>
                  <b>Transfer To:</b>
                </Form.Label>
              </Col>
              <Col md="auto">
                <Form.Control
                  className="sender"
                  as="select"
                  onChange={(e) => selectHandler(e)}
                  value={receiver}
                >
                  <option>Select Recipient</option>
                  {customs.map((user) => (
                    <option key={user.customerId} value={user._id}>
                      {user.firstname} {user.lastname}
                    </option>
                  ))}
                </Form.Control>
              </Col>
            </Row>
            <Row className="contentrow">
              <Col>
                <Button
                  className="Buttons"
                  onClick={() => history.push("/users")}
                  variant="danger"
                >
                  Abort
                </Button>
              </Col>
              <Col>
                <Button
                  className="Buttons"
                  onClick={() => transferHandler(sender, receiver, amount)}
                  variant="success"
                >
                  Proceed
                </Button>
              </Col>
            </Row>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Transfer;
