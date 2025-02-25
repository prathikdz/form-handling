import { useState } from "react";
import axios from "axios";
import { Form, Button, Alert, Container, Row, Col } from "react-bootstrap";

const UserForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [dob, setDob] = useState("");
  const [message, setMessage] = useState("");
  const [validated, setValidated] = useState(false);
  const [loading, setLoading] = useState(false);
  console.log(name,email,phone,dob)


  console.log(name, email, phone, dob);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      setValidated(true);
      return;
    }

    setLoading(true);
    try {
      const response = await axios.post("https://jsonplaceholder.typicode.com/posts", {
        name,
        email,
        phone,
        dob,
      });

      setMessage("User added successfully! ✅");
      console.log("Response:", response.data);
    } catch (error) {
      setMessage("Error submitting the form ❌");
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleClear = () => {
    setName("");
    setEmail("");
    setPhone("");
    setDob("");
    setMessage("");
    setValidated(false);
  };

  return (
    <Container className="mt-5 d-flex justify-content-center align-items-center">
      <Row className="justify-content-center w-100">
        <Col md="6" className="text-center">
          <div className="registration-card p-4 shadow-lg rounded-3">
            <h2 className="mb-4 text-primary">User Registration</h2>

            {message && (
              <Alert
                variant={message.includes("Error") ? "danger" : "success"}
                className="mb-4 animated fadeIn"
              >
                {message}
              </Alert>
            )}

            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formName">
                <Form.Label className="fw-bold">Full Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-75 mx-auto mb-2 shadow-sm"
                />
                <Form.Control.Feedback type="invalid">
                  Please enter your name.
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label className="fw-bold">Email Address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-75 mx-auto mb-2 shadow-sm"
                />
                <Form.Control.Feedback type="invalid">
                  Please enter a valid email.
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formPhone">
                <Form.Label className="fw-bold">Phone Number</Form.Label>
                <Form.Control
                  type="tel"
                  placeholder="Enter your phone number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  pattern="^\+?\d{0,13}"
                  required
                  className="w-75 mx-auto mb-2 shadow-sm"
                />
                <Form.Control.Feedback type="invalid">
                  Please enter a valid phone number.
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formDob">
                <Form.Label className="fw-bold">Date of Birth</Form.Label>
                <Form.Control
                  type="date"
                  value={dob}
                  onChange={(e) => setDob(e.target.value)}
                  required
                  className="w-75 mx-auto mb-2 shadow-sm"
                />
                <Form.Control.Feedback type="invalid">
                  Please select your date of birth.
                </Form.Control.Feedback>
              </Form.Group>

              <div className="d-flex justify-content-center gap-3">
                <Button
                  variant="primary"
                  type="submit"
                  className={`btn-lg text-uppercase animated ${loading ? "disabled" : "bounceIn"}`}
                  disabled={loading}
                >
                  {loading ? "Submitting..." : "Submit"}
                </Button>

                <Button
                  variant="secondary"
                  type="button"
                  onClick={handleClear}
                  className="btn-lg text-uppercase animated"
                >
                  Clear
                </Button>
              </div>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default UserForm;
