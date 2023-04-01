import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const BuyNow = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let buyData = JSON.parse(localStorage.getItem("cart")) || [];

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmail("");
    setPassword("");
    console.log(email);
    console.log(password);
  };

  return (
    <div style={{ marginTop: "1rem" }}>
      <div>
        {buyData.map((e) => {
          return (
            <div>
              <h1> Movie :- {e.name}</h1>
            </div>
          );
        })}
      </div>
      <Form style={{ width: "50%", margin: "auto" }} onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email"
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          buy
        </Button>
      </Form>
    </div>
  );
};

export default BuyNow;
