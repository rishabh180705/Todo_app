import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUser,
  faClipboardList,
  faSignOutAlt,
  faSignInAlt,
  faBars,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';
import { logout } from '../redux';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  let isLoggedIn = useSelector((state) => state.isLoggedIn);
    const dispatch = useDispatch()
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };
 const loggingOut=()=>{
  sessionStorage.removeItem('id');
  dispatch(logout());
  toast.success('user logged out');
 }
  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <div className="flex items-center justify-between w-full md:w-auto">
        <h2>
          <Link to="/todo" className="flex items-center text-lg lg:text-xl">
            <FontAwesomeIcon icon={faClipboardList} className="mr-2" /> ToDo
          </Link>
        </h2>

        {/* Mobile Menu Toggle Button */}
        <div className="md:hidden" onClick={toggleMenu}>
          <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} size="lg" />
        </div>
      </div>

      {/* Navbar Links */}
      <div
        className={`w-full md:w-auto ${menuOpen ? 'block' : 'hidden'} md:flex md:items-center`}
      >
        <ul className="flex flex-col md:flex-row items-center md:space-x-6">
          <li>
            <NavLink
              to="/"
              onClick={closeMenu}
              className={({ isActive }) =>
                `block py-2 pr-4 pl-3 duration-200 ${
                  isActive ? 'text-orange-700' : 'text-white'
                } border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 hover:text-orange-700 md:p-0`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/todo"
              onClick={closeMenu}
              className={({ isActive }) =>
                `block py-2 pr-4 pl-3 duration-200 ${
                  isActive ? 'text-orange-700' : 'text-white'
                } border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 hover:text-orange-700 md:p-0`
              }
            >
              Todo
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              onClick={closeMenu}
              className={({ isActive }) =>
                `block py-2 pr-4 pl-3 duration-200 ${
                  isActive ? 'text-orange-700' : 'text-white'
                } border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 hover:text-orange-700 md:p-0`
              }
            >
              About Us
            </NavLink>
          </li>
        </ul>
      </div>

      {/* User Actions */}
      <div
        className={`w-full md:w-auto ${menuOpen ? 'block' : 'hidden'} md:flex items-center`}
      >
        <div className="flex flex-col md:flex-row md:items-center">
          {isLoggedIn ? (
            <>
              <Link
                to="/profile"
                onClick={closeMenu}
                className="hover:text-gray-300 block py-2 md:mr-4"
              >
                <FontAwesomeIcon icon={faUser} /> Profile
              </Link>
              <Link
                to="/"
                onClick={loggingOut}
                
                className="hover:text-gray-300 block py-2"
              >
                <FontAwesomeIcon icon={faSignOutAlt} /> Logout
              </Link>
            </>
          ) : (
            <div className="flex flex-col md:flex-row md:space-x-6 space-y-4 md:space-y-0">
              <Link
                to="/signin"
                onClick={closeMenu}
                className="hover:text-gray-300 block py-2"
              >
                <FontAwesomeIcon icon={faSignInAlt} /> Login
              </Link>
              <Link
                to="/signup"
                onClick={closeMenu}
                className="hover:text-gray-300 block bg-slate-800 px-3 py-2 rounded-md"
              >
                Sign Up
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
