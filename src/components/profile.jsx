import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

function Profile() {
  const [profileData, setProfileData] = useState({
    username: '',
    email: '',
    bio: '',
  });
  const [isEditing, setIsEditing] = useState(false);
  const [newProfileData, setNewProfileData] = useState(profileData);
  let userId = sessionStorage.getItem('id'); // Assuming user ID is stored in session

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get('https://todo-backend-acad.onrender.com/api/v2/profile', {
          params: { id: userId },
        });
        //console.log(response);
        setProfileData(response.data.user);
        setNewProfileData(response.data.user); // Set initial form state
      } catch (error) {
        console.error('Error fetching profile data:', error);
        toast.error('Failed to load profile data');
      }
    };

    if (userId) {
      fetchProfile();
    } else {
      toast.error('User ID not found');
    }
  }, [userId]);

  // Handle edit toggle
  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  // Handle form change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProfileData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle profile update
  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    try {
     const response =await axios.put(`https://todo-backend-acad.onrender.com/api/v2/profileUpdate/${userId}`, newProfileData);
       //   console.log(response);
      setProfileData(newProfileData);
      setIsEditing(false);
      toast.success('Profile updated successfully!');
    } catch (error) {
      console.error('Error updating profile:', error);
      toast.error('Failed to update profile');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-12 p-6 bg-white rounded-lg shadow-md">
      <div className="text-center mb-6">
        <img
          src="https://st3.depositphotos.com/19428878/35382/v/380/depositphotos_353826748-stock-illustration-unknown-man-profile-avatar-vector.jpg"
          alt="Profile Avatar"
          className="w-24 h-24 rounded-full mx-auto"
        />
        <h2 className="text-2xl font-bold mt-4">{profileData.username}</h2>
        <p className="text-gray-600">{profileData.email}</p>
        <p className="text-gray-600 mt-2">{profileData.bio}</p>
      </div>

      {isEditing ? (
        <form onSubmit={handleUpdateProfile} className="space-y-4">
          <input
            type="text"
            name="username"
            value={newProfileData.username}
            onChange={handleInputChange}
            placeholder="Update Username"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none"
            required
          />
          <input
            type="email"
            name="email"
            value={newProfileData.email}
            onChange={handleInputChange}
            placeholder="Update Email"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none"
            required
          />
          <textarea
            name="bio"
            value={newProfileData.bio}
            onChange={handleInputChange}
            placeholder="Update Bio"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none"
          ></textarea>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
          >
            Save
          </button>
          <button
            type="button"
            onClick={handleEditToggle}
            className="ml-2 bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600 transition"
          >
            Cancel
          </button>
        </form>
      ) : (
        <button
          onClick={handleEditToggle}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition w-full"
        >
          Edit Profile
        </button>
      )}
    </div>
  );
}

export default Profile;

