import React from 'react';
import './About.css'; // Import the CSS file for styling
import DeveloperCard from './devloper';

function AboutUs() {
  return (
    <div className="about-us">
      <h1>About Us</h1>
      <p>
        Welcome to <strong>ToDo App</strong>! My mission is to help you stay organized and boost your productivity. With our simple and intuitive interface, you can easily manage your daily tasks and achieve more.
      </p>
      <h2>Features</h2>
      <ul>
        <li>Add, edit, and delete tasks effortlessly.</li>
        <li>Mark tasks as completed to track your progress.</li>
        <li>Categorize tasks and set priorities.</li>
        <li>Receive reminders for upcoming deadlines.</li>
        <li>Responsive design, accessible from any device.</li>
      </ul>
      <h2>Our Team</h2>
      <p>
        I am passionate developer who believe in the power of technology to improve lives.I am dedicated to creating tools that are not only functional but also easy to use. 
      </p>
      <p>
        I am continuously work on improving our app to meet the evolving needs of our users. Your feedback is valuable to me, and I encourage you to share your thoughts with me.
      </p>
      <DeveloperCard></DeveloperCard>
      <h2>Contact Us</h2>
      <p>
        Have any questions or suggestions? Feel free to reach out at <a href="mailto:rishabh180705@gmail.com.com">support@todoapp.com</a>.
      </p>
    </div>
  );
}

export default AboutUs;
