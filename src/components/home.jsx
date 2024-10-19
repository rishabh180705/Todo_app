import React from 'react';
import { Link,NavLink} from 'react-router-dom';
//import { useHistory } from 'react-router-dom'; // If using React Router v5
// For React Router v6, use 'useNavigate' instead of 'useHistory'
import "./Home.css";

function Home() {
//   const history = useHistory(); // For navigation, use 'useNavigate' for React Router v6



  return (
    <div className="home">
      <h1>Welcome to ToDo App</h1>
      <p>
        This is a simple ToDo application where you can manage your daily tasks.
        You can add, edit, and delete tasks, as well as mark them as completed.
      </p>
      <p>Click the button below to start managing your tasks.</p>
      
           <Link to="/todo" className="home-button">Go to ToDo List</Link>
      
                
       
    </div>
  );
}

export default Home;
