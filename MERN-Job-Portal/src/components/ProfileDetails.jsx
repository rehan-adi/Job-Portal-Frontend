import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

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
    <div className="bg-red-500 py-44">
      <h2>Your Profile</h2>
      <p>
        <strong>Username:</strong> {profileData.username}
      </p>
      <p>
        <strong>Email:</strong> {profileData.email}
      </p>
      <p>
        <strong>Full Name:</strong> {profileData.fullName}
      </p>
      <p>
        <strong>Bio:</strong> {profileData.bio}
      </p>
    </div>
  );
}

export default ProfileDetails;
