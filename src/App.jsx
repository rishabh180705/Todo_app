import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './components/home';
import Footer from './components/Footer';
import AboutUs from './components/About';
import SignIn from './components/signin';
import SignUp from './components/signup';
import Todo from './components/todo';
import Profile from './components/profile';
import { useDispatch } from 'react-redux';
import { login } from './redux/index'; // Make sure the path is correct for the login action

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const user = sessionStorage.getItem('id');
    if (user) {
      dispatch(login());
    }
  }, []);

  return (
    <>
      <Router>
        <Navbar /> {/* Include your Navbar for navigation */}
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/todo" element={<Todo />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </>
  );
}

export default App;
