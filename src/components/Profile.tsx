import { z } from "zod";
import { ToastT } from "sonner";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { employerProfileValidation } from "@/validation/employer.profile.validation.ts";
import axios from "axios";

type EmployerProfileForm = z.infer<typeof employerProfileValidation>;

const Profile = () => {

  const { register, handleSubmit, formState: { errors }, reset } = useForm<EmployerProfileForm>({
    resolver: zodResolver(employerProfileValidation),
    defaultValues: {
      companyName: "",
      name: "",
      companyDescription: "",
      companyLogo: "",
      location: "",
      website: "",
    },
  });

  const [loading, setLoading] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState<EmployerProfileForm | null>(null);


  useEffect(() => {
     const getProfile = async() => {
         try {
             const response = await axios.get('http://localhost:1000/api/v1/employer-profile/profile')
             if (response.status === 200) {
                 setFormData(response.data);
             }
             console.log(response.data);
             
         } catch (error) {
            
         }
     }
     getProfile();
  }, [])

  const onSubmit = (data: EmployerProfileForm) => {
    setLoading(true);
    // Handle form submission (e.g., API call)

    // Reset the form and disable editing after successful submission
    setIsEditing(false);
    setLoading(false);
  };

  const handleCancel = () => {
    reset(); // Reset form to default values
    setIsEditing(false); // Exit edit mode
  };

  return (
    <div className="flex justify-start px-24 items-center min-h-screen py-16 pt-24 bg-black w-full text-white">
      <div className="w-full max-w-lg bg-black shadow-lg rounded-lg p-6">
        {/* Profile View Mode */}
        {!isEditing ? (
          <>
            <div className="border border-white border-opacity-15 rounded-xl px-6 py-5 h-[70vh] w-[40vw]">
              <div className="flex justify-center mb-4">
              <img
                  src={(formData?.companyLogo)}
                  alt="Company Logo"
                  className="w-24 h-24 rounded-full border-2 border-white"
                />
              </div>
              <div className="flex justify-between mt-10 items-center">
                <div className="mb-6 flex items-center justify-center gap-2">
                  <h3 className="text-sm font-semibold">Company Name:</h3>
                  <p>{formData?.companyName}</p>
                </div>
                <div className="mb-6 flex items-center justify-center gap-2">
                  <h3 className="text-sm font-semibold">Contact Person:</h3>
                  <p>{formData?.name}</p>
                </div>
              </div>

              <div className="mb-6 flex items-start justify-start w-full gap-2">
                <h3 className="text-sm font-semibold whitespace-nowrap">
                  Company Description:
                </h3>
                <p className="flex-grow break-words">
                  {formData?.companyDescription}
                </p>
              </div>

              <div className="flex justify-between items-center">
                <div className="mb-6 flex items-center justify-center gap-2">
                  <h3 className="text-sm font-semibold">Location</h3>
                  <p>{formData?.location}</p>
                </div>

                <div className="mb-6 flex items-center justify-center gap-2">
                  <h3 className="text-sm font-semibold">Website</h3>
                  <a
                    href={formData?.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-400 hover:underline"
                  >
                    {formData?.website}
                  </a>
                </div>
              </div>

              <div className="flex justify-start mt-10">
                <button
                  onClick={() => setIsEditing(true)}
                  className="bg-indigo-600 text-white font-semibold px-6 py-2 rounded-md shadow-md hover:bg-indigo-500 transition duration-300"
                >
                  Edit Profile
                </button>
              </div>
            </div>
          </>
        ) : (
          // Profile Edit Mode
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <label className="block text-gray-400 text-sm mb-2">
                Company Name
              </label>
              <input
                type="text"
                 {...register("companyName")}
                className="w-full px-4 py-2 border rounded-md bg-gray-900 text-white focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-400 text-sm mb-2">
                Your Name
              </label>
              <input
                 type="text"
                 {...register("name")}
                className="w-full px-4 py-2 border rounded-md bg-gray-900 text-white focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-400 text-sm mb-2">
                Company Description
              </label>
              <textarea
              {...register("companyDescription")}
                rows={3}
                className="w-full px-4 py-2 border rounded-md bg-gray-900 text-white focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                required
              ></textarea>
            </div>

            <div className="mb-4">
              <label className="block text-gray-400 text-sm mb-2">
                Company Logo URL
              </label>
              <input
                type="text"
                {...register("companyLogo")}
                className="w-full px-4 py-2 border rounded-md bg-gray-900 text-white focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-400 text-sm mb-2">
                Location
              </label>
              <input
                type="text"
                {...register("location")}
                className="w-full px-4 py-2 border rounded-md bg-gray-900 text-white focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-400 text-sm mb-2">
                Website
              </label>
              <input
                 {...register("website")}
                type="url"
                className="w-full px-4 py-2 border rounded-md bg-gray-900 text-white focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                required
              />
            </div>

            <div className="flex justify-between">
              <button
                type="submit"
                className="bg-green-600 text-white font-semibold px-6 py-2 rounded-md shadow-md hover:bg-green-500 transition duration-300"
              >
                Save
              </button>

              <button
                onClick={() => setIsEditing(false)}
                className="bg-red-600 text-white font-semibold px-6 py-2 rounded-md shadow-md hover:bg-red-500 transition duration-300"
              >
                Cancel
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default Profile;
