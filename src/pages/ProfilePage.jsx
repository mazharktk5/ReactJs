import React from 'react';
import profile from '../assets/images/Profile/profile.jpeg';


const ProfilePage = () => {
  const user = {
    name: 'Mazhar',
    email: 'ABC@example.com',
    profileImage: {profile},
    bio: 'Web Developer with a passion for creating beautiful and functional web applications.',
    location: 'Peshawe, KPK',
    joined: 'January 2025',
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-6">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
        <div className="bg-blue-600 h-40"></div>
        <div className="relative -mt-20 text-center">
          <img
            className="inline-block h-40 w-40 rounded-full ring-4 ring-white"
            src={profile}
            alt="Profile"
          />
        </div>
        <div className="px-6 py-4">
          <h2 className="text-2xl font-semibold text-gray-800">{user.name}</h2>
          <p className="text-gray-600">{user.email}</p>
          <p className="mt-2 text-gray-700">{user.bio}</p>
          <div className="mt-4 flex justify-between items-center text-gray-600">
            <span><strong>Location:</strong> {user.location}</span>
            <span><strong>Joined:</strong> {user.joined}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
