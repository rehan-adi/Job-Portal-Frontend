import { useEffect, useState } from "react";
import axios from "axios";

function Profile() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [role, setRole] = useState("");
  const [age, setAge] = useState("");
  const [location, setLocation] = useState("");
  const [bio, setBio] = useState("");

  const [profileData, setProfileData] = useState(null);


  const fetchProfileData = async (profileId) => {
    try {
      const response = await axios.get(`http://localhost:1000/postjob/getProfile/${profileId}`);
      setProfileData(response.data);
    } catch (error) {
      console.error("Error fetching profile data:", error);
    }
  };

  useEffect(() => {
    fetchProfileData([profileId]);
  }, [profileId]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:1000/postjob/createProfile", {
        username,
        email,
        password,
        fullName,
        role,
        age,
        location,
        bio,
      });
      console.log("Profile created successfully:", response.data);
      const profileId = response.data.profileId;

    if (profileId) {
      fetchProfileData(profileId);
    } else {
      console.error("Error creating profile: Profile ID not found in response");
    }
    } catch (error) {
      console.error("Error creating profile:", error);
    }
  };

  if (profileData) {
    return (
      <div className="h-screen w-full flex justify-center items-center bg-gray-100">
        <div className="max-w-md bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Your Profile</h2>
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
      </div>
    );
  }

  return (
    <div className="max-h-fit w-full flex justify-center py-28 items-center bg-[#F2F3F4]">
      <form
        onSubmit={handleSubmit}
        className="w-full bg-[#F2F3F4] p-8 rounded-lg  flex justify-around items-start"
      >
        {/* Image upload field */}
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
            className="w-full border rounded-md px-3 py-2 focus:outline-none focus:border-blue-500 mb-6"
          />
          <label
            htmlFor="github"
            className="block text-gray-700 font-semibold mb-2"
          >
            GitHub
          </label>
          <input
            type="text"
            id="github"
            className="w-full border rounded-md px-3 py-2 focus:outline-none focus:border-blue-500 mb-6"
            placeholder="Enter your GitHub profile URL"
          />
          <label
            htmlFor="linkedin"
            className="block text-gray-700 font-semibold mb-2"
          >
            LinkedIn
          </label>
          <input
            type="text"
            id="linkedin"
            className="w-full border rounded-md px-3 py-2 focus:outline-none focus:border-blue-500 mb-4"
            placeholder="Enter your LinkedIn profile URL"
          />
        </div>

        <div className="w-2/4 bg-white border shadow-md rounded-md p-4">
          {/* Other input fields */}
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
              <label
                htmlFor="confirmPassword"
                className="block font-semibold mb-2"
              >
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
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
                Your Role
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

          <div className="mb-4 flex flex-wrap">
            <div className="w-full sm:w-1/2 pr-2">
              <label htmlFor="age" className="block font-semibold mb-2">
                Age
              </label>
              <input
                type="number"
                id="age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                className="w-full bg-white border rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="w-full sm:w-1/2 pl-2">
              <label htmlFor="location" className="block font-semibold mb-2">
                Location
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
    </div>
  );
}

export default Profile;
