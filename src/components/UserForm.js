import { useState } from "react";
import axios from "axios";
import { Container, Form, Button, Alert } from "react-bootstrap";  // Import required components from React Bootstrap

const App = () => {
  // Step 1: Create state for form fields
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // Step 2: Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page reload

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
    <Container className="my-5">
      <div className="text-center">
        <h2>User Registration</h2>
        {message && <Alert variant={message.includes("Error") ? "danger" : "success"}>{message}</Alert>}
      </div>

      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formName" className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="formEmail" className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default App;
