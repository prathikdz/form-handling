import { useState } from "react";
import axios from "axios";
import { Container, Form, Button, Alert } from "react-bootstrap";

const App = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [course, setCourse] = useState("");
  const [registerNumber, setRegisterNumber] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (registerNumber.trim() === "") {
      setMessage("Please enter a valid register number! ❌");
      return;
    }

    try {
      const response = await axios.post("https://jsonplaceholder.typicode.com/posts", {
        name,
        email,
        registerNumber,
        course,
      });

      setMessage("User added successfully! ✅");
      console.log("Response:", response.data);
    } catch (error) {
      setMessage("Error submitting the form ❌");
      console.error("Error:", error);
    }
  };

  const cancelCourse = () => {
    setName("");
    setEmail("");
    setRegisterNumber("");
    setCourse("");
    setMessage("");
  };

  return (
    <Container className="my-5" style={{ backgroundColor: "lightgreen", height: "500px", borderRadius:"10px" }}>
      <div className="text-center">
        <h2>Student Registration</h2>
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

        <Form.Group controlId="formRegisterNumber" className="mb-3">
          <Form.Label>Register Number</Form.Label>
          <Form.Control
            type="varchar"
            placeholder="Enter your register number"
            value={registerNumber}
            onChange={(e) => setRegisterNumber(e.target.value)}
            required
            min="0"
          />
        </Form.Group>

        <Form.Group controlId="formCourse" className="mb-3">
          <Form.Label>Select Course</Form.Label>
          <Form.Select value={course} onChange={(e) => setCourse(e.target.value)} required>
            <option value="">-- Select a Course --</option>
            <option value="Computer Science">Computer Science</option>
            <option value="Business Administration">Business Administration</option>
            <option value="Mechanical Engineering">Mechanical Engineering</option>
            <option value="Electrical Engineering">Electrical Engineering</option>
            <option value="Psychology">Psychology</option>
          </Form.Select>
        </Form.Group>

        <div>
        <Button
            variant="primary"
            type="submit"
            className="me-2 btn-hover"
            style={{
              transition: "all 0.3s ease-in-out",
            }}
          >
            Submit
          </Button>
          <Button
            variant="secondary"
            type="button"
            onClick={cancelCourse}
            className="btn-hover"
            style={{
              transition: "all 0.3s ease-in-out",
            }}
          >
            Refresh
          </Button>
        </div>
      </Form>
    </Container>
  );
};

export default App;
