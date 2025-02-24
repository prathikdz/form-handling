import { useState } from "react";
import axios from "axios";

const UserForm = () => {
  // Step 1: Create state for form fields
  const [name, setName] = useState("");
  const [phonenumber, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [Dob, setDob] = useState("");
  const [Password,setPassword] = useState("");
 
  const [message, setMessage] = useState("");

  // Step 2: Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page reload
   

    try {
      const response = await axios.post("https://jsonplaceholder.typicode.com/posts", {
        name,
        email,
        Dob,
        Password,
        phonenumber,
      });

      setMessage("User added successfully! ✅");
      console.log("Response:", response.data);
    } catch (error) {
      setMessage("Error submitting the form ❌");
      console.error("Error:", error);
    }
  };

  return (
    <div style={{ maxWidth: "500px",
     margin: "auto", 
     padding: "20px",
     alignItems: "center", 
      justifyContent: "center",
      border: "1px solid #ccc", 
      borderRadius: "8px",
      backgroundColor: "lavender" }} >
      <h2 style={{ textAlign: "center" }}>User Registration</h2>
      {message && <p style={{ textAlign: "center", color: message.includes("Error") ? "red" : "green" }}>{message}</p>}
      <form  style={{alignItems:"center"}}onSubmit={handleSubmit}>
        <label style={{ display: "block", marginBottom: "5px",justifyContent:"center", alignItems:"center" }}>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        <br></br>
        <label style={{ display: "block", marginBottom: "5px" }}>phonenumber:</label>
        <input type="tel" value={phonenumber} onChange={(e) => setNumber(e.target.value)} required />
        <br></br>
        <label style={{ display: "block", marginBottom: "5px" }}>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
         <br></br>
        <label  style={{ display: "block", marginBottom: "5px" }}>Dob</label>
        <input type="date" value={Dob} onChange={(e) => setDob(e.target.value)} required />
        <br></br>
        <label style={{ display: "block", marginBottom: "5px" }}>Password</label>
        <input type="Password" value={Password} onChange={(e) => setPassword(e.target.value)} required />
         <br></br>
         <br></br>
         <button type="submit"style={{ padding: "10px 20px",fontSize: "16px",color: "white",backgroundColor: "green",border: "none",borderRadius: "4px",cursor: "pointer",}} >Submit</button>
      </form>
    </div>
    
  );
};
       
        
     

export default UserForm;
