import React, { useState } from "react";
import axios from "axios";
import ProfileDetails from "./ProfileDetails";
import { useNavigate } from 'react-router-dom'; 

function Profile() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [location, setLocation] = useState("");
  const [role, setRole] = useState("");
  const [githubURL, setGithubURL] = useState("");
  const [linkedinURL, setLinkedinURL] = useState("");
  const [bio, setBio] = useState("");
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  
  const [profileId, setProfileId] = useState(null);
  const navigate = useNavigate();


  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:1000/profile/createProfile", {
        username,
        email,
        password,
        fullName,
        bio,
        location,
        role,
        githubURL,
        linkedinURL,
        image
      });
      console.log("Profile created successfully:", response.data);
      console.log(response.data);
      const newProfileId = response.data.profileId;
      if (newProfileId) {
        setProfileId(newProfileId);
        navigate(`/profile/${newProfileId}`); 
      } else {
        console.error("Error creating profile: Profile ID not found in response");
      }
    } catch (error) {
      console.error("Error creating profile:", error);
    }
  };

  return (
    <div className="max-h-fit w-full flex justify-center py-28 items-center bg-[#F2F3F4]">
      <form
        onSubmit={handleSubmit}
        className="w-full bg-[#F2F3F4] p-8 rounded-lg  flex justify-around items-start"
      >
        <div
          className="bg-white shadow-md rounded-md border w-1/4 p-4 flex flex-col items-start"
          style={{ minHeight: "300px" }}
        >
         <label
            htmlFor="image"
            className="block text-gray-700 font-semibold mb-2"
          >
            Profile Image
          </label>
          <input
            type="file"
            id="image"
            accept="image/*"
            onChange={(e) => handleImageUpload(e.target.files[0])}
            className="hidden"
          />
          <div className="flex items-center space-x-2">
            <label
              htmlFor="image"
              className="cursor-pointer bg-blue-500 py-2 px-4 text-white font-semibold rounded-md hover:bg-blue-600"
            >
              Upload Image
            </label>
            {imagePreview && (
              <img
                src={imagePreview}
                alt="Profile Preview"
                className="w-24 h-24 object-cover rounded-full border"
              />
            )}
          </div>

          <label
            htmlFor="githubURL"
            className="block text-gray-700 font-semibold mb-2"
          >
            GitHub
          </label>
          <input
            type="text"
            id="githubURL"
            value={githubURL}
            onChange={(e) => setGithubURL(e.target.value)}
            className="w-full border rounded-md px-3 py-2 focus:outline-none focus:border-blue-500 mb-6"
            placeholder="Enter your GitHub profile URL"
          />
          <label
            htmlFor="linkedinURL"
            className="block text-gray-700 font-semibold mb-2"
          >
            LinkedIn
          </label>
          <input
            type="text"
            id="linkedinURL"
            value={linkedinURL}
            onChange={(e) => setLinkedinURL(e.target.value)}
            className="w-full border rounded-md px-3 py-2 focus:outline-none focus:border-blue-500 mb-4"
            placeholder="Enter your LinkedIn profile URL"
          />
        </div>

        <div className="w-2/4 bg-white border shadow-md rounded-md p-4">
          <h2 className="text-2xl font-semibold mb-4 text-black">
            Create Profile
          </h2>
          <div className="mb-4 flex flex-wrap">
            <div className="w-full md:w-1/2 pr-2">
              <label htmlFor="username" className="block font-semibold mb-2">
                Username
              </label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full bg-white border rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="w-full md:w-1/2 pl-2">
              <label htmlFor="email" className="block font-semibold mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-white border rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>
          <div className="mb-4 flex flex-wrap">
            <div className="w-full md:w-1/2 pr-2">
              <label htmlFor="password" className="block font-semibold mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-white border rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="w-full md:w-1/2 pl-2">
              <label htmlFor="location" className="block font-semibold mb-2">
                location
              </label>
              <input
                type="text"
                id="location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full bg-white border rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>
          <div className="mb-4 flex flex-wrap">
          <div className="w-full md:w-1/2 pr-2">
            <label htmlFor="fullName" className="block font-semibold mb-2">
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full bg-white border rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="w-full md:w-1/2 pl-2">
            <label htmlFor="fullName" className="block font-semibold mb-2">
              Job Role
            </label>
            <input
              type="text"
              id="role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full bg-white border rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
            />
          </div>
          </div>
          <div className="mb-4">
            <label htmlFor="bio" className="block font-semibold mb-2">
              Bio
            </label>
            <textarea
              id="bio"
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              className="w-full bg-white border rounded-md px-3 py-2 focus:outline-none focus:border-blue-500 h-32"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 py-2 px-4 mt-3 text-white font-semibold rounded-md hover:bg-blue-600"
          >
            Create Profile
          </button>
        </div>
      </form>
      {profileId && <ProfileDetails profileId={profileId} />}
    </div>
  );
}

export default Profile;
