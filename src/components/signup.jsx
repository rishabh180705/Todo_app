import React, { useState } from 'react';
import './SignUp.css'; // Import the CSS file for styling
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function SignUp() {
  const Navigate=useNavigate();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    axios.post("https://todo-backend-acad.onrender.com/api/v1/sinup",{username,password,email}).then((response) => {

      if(response.data.message==="User already exists"){
       toast.warning(response.data.message);
        setLoading(false);
      }
      else{
        toast.success(response.data.message);
        setUsername("");
      setPassword("");
      setEmail("");
      setLoading(false);
      Navigate("/signin")
      }
     
      
    })
   

  };

  return (
    <div className="signup">
      <h1>Sign Up</h1>
      {error && <div className="error">{error}</div>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" disabled={loading}>
          {loading ? 'Signing Up...' : 'Sign Up'}
        </button>
      </form>
      <div className="signin-link">
        <p>Already have an account? <a href="/signin">Sign In</a></p>
      </div>
    </div>
  );
}

export default SignUp;
