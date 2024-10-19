import React, { useEffect, useState } from 'react';
import axios from 'axios';
import{Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './SignIn.css'; // Import the CSS file for styling
import { useDispatch} from 'react-redux';
import {login } from "../redux/index.js";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function SignIn() {
  const navigate = useNavigate(); // Use a single instance of useNavigate
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null); // State for success message

  useEffect(() => {
    if (error) {
      setPassword('');
      setTimeout(() => {
        setError(null);
      }, 2500);
    }
  }, [error]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      const response = await axios.post('https://todo-backend-acad.onrender.com/api/v1/login', { email, password });
         console.log(response);
      if (response.status === 200) {
        // Success, navigate to the home page
        sessionStorage.setItem('id', response.data);
        dispatch(login());
        toast.success("user logged in successfully")
        setSuccess('Login successful! Redirecting...');
        setEmail('');
        setPassword('');
        setLoading(false);

        setTimeout(() => {
          navigate('/'); // Redirect after showing the success message
        }, 1500);
      } else {
        setError('Failed to log in. Please try again.');
      }
    } catch (error) {
      setError(error.response?.data?.message || 'An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="signin">
      <h1>Sign In</h1>
      {error && <div className="error">{error}</div>}
      {success && <div className="success">{success}</div>} {/* Display success message */}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email} // Add value binding
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
          {loading ? 'Signing In...' : 'Sign In'}
        </button>
      </form>
      <div className="signup-link">
        <p>Don't have an account? <Link href="/signup">Sign Up</Link></p>
      </div>
    </div>
  );
}

export default SignIn;
