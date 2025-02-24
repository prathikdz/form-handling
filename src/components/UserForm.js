import { useState } from "react";
import axios from "axios";
import { Form, Button, Alert, Container, Row, Col } from "react-bootstrap";

const UserForm = () => {
  // Step 1: Create state for form fields and validation
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [validated, setValidated] = useState(false); // Add validation state

  // Step 2: Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page reload

    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      setValidated(true); // Trigger validation feedback
      return; // Prevent submission if form is invalid
    }

    try {
      // Replace 'YOUR_API_URL' with your actual API endpoint
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
          
          {/* Display message */}
          {message && (
            <Alert
              variant={message.includes("Error") ? "danger" : "success"}
              className="mb-4"
            >
              {message}
            </Alert>
          )}

          {/* Form */}
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-75 mx-auto" // Center the input and reduce width
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
                className="w-75 mx-auto" // Center the input and reduce width
              />
              <Form.Control.Feedback type="invalid">
                Please enter a valid email.
              </Form.Control.Feedback>
            </Form.Group>

            {/* Submit Button */}
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
