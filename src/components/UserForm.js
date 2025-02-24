import { useState } from "react";
import axios from "axios";

const UserForm = () => {
  // Step 1: Create state for form fields
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phno, setPhno] = useState("");
  const [message, setMessage] = useState("");

  // Step 2: Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page reload

    try {
      const response = await axios.post("https://jsonplaceholder.typicode.com/posts", {
        name,
        email,
        phno,
      });

      setMessage("User added successfully! ✅");
      console.log("Response:", response.data);
    } catch (error) {
      setMessage("Error submitting the form ❌");
      console.error("Error:", error);
    }
  };

  return (
    <div style={{ backgroundColor: "grey", padding: "20px", display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh" }}>
      <div style={{ backgroundColor: "#fff", padding: "40px", borderRadius: "10px", boxShadow: "0 4px 10px rgba(0,0, 0.1)", width: "100%", maxWidth: "500px" }}>
        <h2 style={{ fontSize: "24px", fontWeight: "bold", color: "#333", marginBottom: "20px" }}>User Registration</h2>
        
        {message && <p style={{ color: "#4caf50", fontWeight: "bold", marginBottom: "20px" }}>{message}</p>}
        
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
          <label style={{ textAlign: "left", color: "#333", fontSize: "14px" }}>Name:</label>
          <input 
            type="text" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            required 
            style={{ padding: "10px", borderRadius: "5px", border: "1px solid #ddd", fontSize: "16px", width: "100%", boxSizing: "border-box" }}/>
        
          
          <label style={{ textAlign: "left", color: "#333", fontSize: "14px" }}>Email:</label>
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
            style={{ padding: "10px", borderRadius: "5px", border: "1px solid #ddd", fontSize: "16px", width: "100%", boxSizing: "border-box" }}/>
          
          <label style={{ textAlign: "left", color: "#333", fontSize: "14px" }}>Phone Number:</label>
          <input 
            type="number" 
            value={phno} 
            onChange={(e) => setPhno(e.target.value)} 
            required 
            style={{ padding: "10px", borderRadius: "5px", border: "1px solid #ddd", fontSize: "16px", width: "100%", boxSizing: "border-box" }}/>
          
          <button type="submit" style={{ backgroundColor:"#333",color:"white",padding:"12px" }}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserForm;
