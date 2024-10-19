import React from 'react';
import { Link,NavLink} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
        {/* About Section */}
        <div className="footer-section about">
          <h3 className="text-xl font-semibold mb-4">About ToDo App</h3>
          <p className="text-sm">
            ToDo App helps you manage your daily tasks and boost productivity. Add, edit, and complete tasks easily with our simple interface.
          </p>
        </div>
        
        {/* Contact Section */}
        <div className="footer-section contact">
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <p className="text-sm">Email: Rishabh180705@gmail.com</p>
          <p className="text-sm">Phone: +91 9627962812</p>
          <p className="text-sm">Address: Delhi, India</p>
        </div>

        {/* Quick Links Section */}
        <div className="footer-section links">
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link to="/privacy-policy" className="hover:underline">Privacy Policy</Link></li>
            <li><Link to="/terms-of-service" className="hover:underline">Terms of Service</Link></li>
            <li><Link to="/about" className="hover:underline">About Us</Link></li>
            <li><Link to="mailto:rishabh180705@gmail.com" className="hover:underline">Contact</Link></li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div className="footer-section social-media">
          <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
          <div className="social-icons flex space-x-4">
            <Link to="https://x.com/CoderRishabh18" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
              <FontAwesomeIcon icon={faTwitter} size="lg" />
            </Link>
            <Link to="https://www.instagram.com/its_rishidev18/" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400">
              <FontAwesomeIcon icon={faInstagram} size="lg" />
            </Link>
            <Link to="https://www.linkedin.com/in/rishabh-singh-506491221/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
              <FontAwesomeIcon icon={faLinkedin} size="lg" />
            </Link>
            <Link to="https://github.com/rishabh180705" target="_blank" rel="noopener noreferrer" className=" hover:text-green-900">
            <FontAwesomeIcon icon={faGithub} size="lg" />
            </Link>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="footer-section newsletter">
          <h3 className="text-xl font-semibold mb-4">Subscribe to Our Newsletter</h3>
          <form target="_blank" action="https://formsubmit.co/rishabh180705@gmail.com" method="POST" className="flex flex-col space-y-2">
            <input type="email" placeholder="Your email" className="p-2 rounded text-black" />
            <button type="submit" value="Submit" className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded">Subscribe</button>
          </form>
        </div>
      </div>
      
      {/* Footer Bottom */}
      <div className="footer-bottom text-center mt-8 border-t border-gray-700 pt-4">
        <p>&copy; {new Date().getFullYear()} ToDo App. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
