import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";

function ProfileDetails({ profileId }) {

  const { id } = useParams();
  const [profileData, setProfileData] = useState(null);

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const response = await axios.get(`http://localhost:1000/profile/${id}`);
        setProfileData(response.data.userProfile);
      } catch (error) {
        console.error("Error fetching profile data:", error);
      }
    };

    fetchProfileData();
  }, [profileId]);

  if (!profileData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="h-screen bg-[#F2F3F4] flex px-12 justify-between items-center">
      <div className="container mx-auto px-10 py-10 flex justify-between">
        <div className="bg-white w-1/3 p-8 rounded-lg shadow-lg flex flex-col items-center">
          <div className="bg-yellow-400 rounded-full w-28 h-28 flex justify-center items-center mb-8">
            <img src={profileData.profileImage} className="rounded-full w-32 h-32" />
          </div>
          <h2 className="text-xl font-bold text-center mb-8">{profileData.fullName}</h2>
          <div className="flex justify-center space-x-8 mb-4">
            <a href={profileData.githubURL} target="_blank" rel="noopener noreferrer" ><FaGithub className="inline-block text-2xl"/></a>
            <a href={profileData.linkedinURL} target="_blank" rel="noopener noreferrer" ><FaLinkedin className="inline-block text-2xl" /></a>
          </div>
        </div>
        <div className="bg-white text-black w-[55vw] p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Profile Details</h2>
          <p className="mb-2">
            <strong>Username:</strong> {profileData.username}
          </p>
          <p className="mb-2">
            <strong>Email:</strong> {profileData.email}
          </p>
          <p className="mb-2">
            <strong>Location:</strong> {profileData.location}
          </p>
          <p className="mb-2">
            <strong>Role:</strong> {profileData.role}
          </p>
          <p className="mb-2">
            <strong>Bio:</strong> {profileData.bio}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProfileDetails;
