import { useState } from "react";
import axios from "axios";




const UserForm = () => {
  // Step 1: Create state for form fields
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact , setContact] = useState("");
  const [userId, setUserId] = useState("");
  const [address, setAddress] = useState(""); 
  const [gender, setGender] = useState("");
  const [message, setMessage] = useState("");
  
  

  // Step 2: Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page reload

    try {
      const response = await axios.post("https://jsonplaceholder.typicode.com/posts", {
        name,
        email,
        contact,
        userId,
        address,
        gender,
      });

      setMessage("User added successfully! ✅");
      console.log("Response:", response.data);
    } catch (error) {
      setMessage("Error submitting the form ❌");
      console.error("Error:", error);
    }
  };

  return (
    <div  style={{ maxWidth: "500px",
      margin: "auto",
      padding: "20px",
      alignItems: "center",
       justifyContent: "center",
       border: "2px solid #bcc",
       borderRadius: "8px",
       backgroundColor: "lightgray" }}>
      <h2>User Registration</h2>
      {message && <p style={{ textAlign: "center", fontWeight: "bold", color: message.includes("Error") ? "red" : "green" }}>{message}</p>}

      <form onSubmit={handleSubmit} className="space-y-4">

        <div>
        <label className="block font-medium">Name :</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required 
        className="W-full px-3 py-2 border round"/> 
        </div>
         
         <div>
        <label className="block font-medium">Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required 
        className="W-full px-3 py-2 border round" />
         </div>

         <div>
        <label className="block font-medium">contact :</label>
        <input type="text" value={contact} onChange={(e) => setContact(e.target.value)} required 
        className="W-full px-3 py-2 border round" />
         </div>

         <div>
        <label className="block font-medium">userId :</label>
        <input type="text" value={userId} onChange={(e) => setUserId(e.target.value)} required 
        className="W-full px-3 py-2 border round" /> 
         </div>

         <div>
        <label className="block font-medium">address :</label>
        <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} required 
        className="W-full px-3 py-2 border round"/>
         </div>.

         <div><label>gender :</label>
        <select value={gender} onChange={(e) => setGender(e.target.value)} required 
          className={"W-full px-3 py-2 border round"}>
        <option value=""> select gender</option>
        <option value="male"> male</option>
        <option value="female"> female</option>
        </select>
        </div>
        
        
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default UserForm;
