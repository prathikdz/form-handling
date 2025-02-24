import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from "react";
import axios from "axios";

const Userlogin = () => {
    // Step 1: Create state for form fields
    const [firstname, setFirstName] = useState("");
    const [lastname, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [gender, setGender] = useState("");
    const [message, setMessage] = useState("");

    // Step 2: Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent page reload

        try {
            const response = await axios.post("https://jsonplaceholder.typicode.com/posts", {
                firstname,
                lastname,
                email,
                password,
                gender
            });

            setMessage("User added successfully! ✅");
            console.log("Response:", response.data);
        } catch (error) {
            setMessage("Error submitting the form ❌");
            console.error("Error:", error);
        }
    };

    return (
        <Container className="d-flex justify-content-center align-items-center vh-100">
            <Row>
                <Col md={20}>
                    <div className="p-4 shadow-lg rounded bg-white" style={{ width: "600px" }}>
                        <h3 className="text-center mb-4">Login</h3>
                        {message && <p className="text-center text-success">{message}</p>}

                        {/* Corrected Form Submission */}
                        <Form onSubmit={handleSubmit}>
                            <Row>
                                {/* First Name */}
                                <Form.Group className="mb-3" as={Col} controlId="formFirstName">
                                    <Form.Label>First Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter your first name"
                                        value={firstname}
                                        onChange={(e) => setFirstName(e.target.value)}
                                        required
                                    />
                                </Form.Group>

                                {/* Last Name */}
                                <Form.Group className="mb-3" as={Col} controlId="formLastName">
                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter your last name"
                                        value={lastname}
                                        onChange={(e) => setLastName(e.target.value)}
                                        required
                                    />
                                </Form.Group>
                            </Row>

                            {/* Email Address */}
                            <Form.Group className="mb-3" controlId="formEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="Enter email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>

                            {/* Password */}
                            <Form.Group className="mb-3" controlId="formPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </Form.Group>

                            {/* Gender Selection */}
                            <Form.Group className="mb-3">
                                <Form.Label>Gender</Form.Label>
                                <div>
                                    <Form.Check
                                        type="radio"
                                        label="Male"
                                        name="gender"
                                        value="male"
                                        onChange={(e) => setGender(e.target.value)}
                                    />
                                    <Form.Check
                                        type="radio"
                                        label="Female"
                                        name="gender"
                                        value="female"
                                        onChange={(e) => setGender(e.target.value)}
                                    />
                                </div>
                            </Form.Group>

                            {/* Submit Button */}
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default Userlogin;
