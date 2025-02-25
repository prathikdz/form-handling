import { useState } from "react";
import axios from "axios";
import { Form, Button, Alert, Container, Row, Col } from "react-bootstrap";

const UserForm = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [validated, setValidated] = useState(false);


  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      setValidated(true);
    }

    try {
      const response = await axios.post("https://jsonplaceholder.typicode.com/posts", {
        name,
        email,
      });

      setMessage("User added successfully! ✅");
      console.log("Response:", response.data);
    } catch (error) {
      setMessage("Error submitting the form ❌");
      console.error("Error:", error);
    }
  };

  return (
    <Container className="mt-5 d-flex justify-content-center align-items-center">
      <Row className="justify-content-center w-100">
        <Col md="6" className="text-center">
          <h2>User Registration</h2>
          {message && (
            <Alert
              variant={message.includes("Error") ? "danger" : "success"}
              className="mb-4"
            >
              {message}
            </Alert>
          )}

          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-75 mx-auto"
              />
              <Form.Control.Feedback type="invalid">
                Please enter your name.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-75 mx-auto"
              />
              <Form.Control.Feedback type="invalid">
                Please enter a valid email.
              </Form.Control.Feedback>
            </Form.Group>
            <Button
              variant="primary"
              type="submit"
              className="w-50 mx-auto btn-sm"
            >
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default UserForm;