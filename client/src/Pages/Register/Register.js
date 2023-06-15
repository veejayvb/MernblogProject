import "./Register.css";
import { useState } from "react";
import axios from "axios";
import {Link} from 'react-router-dom'

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [emailId, setemailId] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [error, setError] = useState(false);

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    try {
      const newUser = await axios.post("http://localhost:5000/api/register", {
        username: username,
        emailid: emailId,
        password: password,
        passwordConfirm: passwordConfirm,
      });
      newUser && window.location.replace("/");
    } catch (err) {
      setError(err);
    }
  };
  return (
    <div className="register">
      <span className="registerTitle">Register</span>
      <form className="registerForm" onSubmit={handleRegisterSubmit}>
        <label>Username</label>
        <input
          className="registerInput"
          type="text"
          placeholder="Enter your username..."
          onChange={(e) => setUsername(e.target.value)}
        />
        <label>Email</label>
        <input
          className="registerInput"
          type="text"
          placeholder="Enter your email..."
          onChange={(e) => setemailId(e.target.value)}
        />
        <label>Password</label>
        <input
          className="registerInput"
          type="password"
          placeholder="Enter your password..."
          onChange={(e) => setPassword(e.target.value)}
        />
        <label>Password Confirm</label>
        <input
          className="registerInput"
          type="passwordConfirm"
          placeholder="Enter your password..."
          onChange={(e) => setPasswordConfirm(e.target.value)}
        />
        <button className="registerButton" type="submit">Register</button>
      </form>
      <button className="registerLoginButton" >
        <Link to='/login' className="link">Login</Link>
        
      </button>
      {error && <span style={{color:"red", marginTop:"10px"}}>Something went wrong!</span>}
    </div>
  );
};

export default Register;
