import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

function DeveloperCard() {
  return (
    <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="bg-gray-800 p-4 text-center">
        <img
          className="w-32 h-32  mx-auto border-4 border-white"
          src="https://res.cloudinary.com/dn09bc29y/image/upload/v1729111951/kjbo888cbc3toxbcwesz.jpg" // Replace with your image URL
          alt="Rishabh Singh"
        />
        <h2 className="text-xl font-semibold text-white mt-4">Rishabh Singh</h2>
        <p className="text-gray-300">Software Developer</p>
      </div>
      
      <div className="p-6 my-5">
        <p className="text-gray-700 mb-4">
          Final-year B.Tech student passionate about software development and problem-solving. 
          Experienced in JavaScript, React, and back-end development. 
        </p>

        <div className="flex justify-center space-x-4">
          {/* Social Media Links */}
          <a href="mailto:rishabh180705@gmail.com" className="text-gray-800 hover:text-gray-600">
            <FontAwesomeIcon icon={faEnvelope} size="lg" />
          </a>
          <a href="https://www.linkedin.com/in/rishabh-singh-506491221/" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-blue-600">
            <FontAwesomeIcon icon={faLinkedin} size="lg" />
          </a>
          <a href="https://github.com/rishabh180705" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-gray-900">
            <FontAwesomeIcon icon={faGithub} size="lg" />
          </a>
          <a href="https://x.com/CoderRishabh18" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-blue-400">
            <FontAwesomeIcon icon={faTwitter} size="lg" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default DeveloperCard;
