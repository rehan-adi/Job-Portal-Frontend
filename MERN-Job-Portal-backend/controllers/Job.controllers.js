import postJobModel from "../models/PostJob.model.js";
import UserModel from "../models/User.js";
import profile from "../models/profile.js";
import mongoose from "mongoose";
// import sendNotification from '../service/notificationService.js'

// create jobs

export const createJob = async (req, res) => {
  try {
    z;
    const {
      jobTitle,
      companyName,
      minSalary,
      maxSalary,
      salaryType,
      jobLocation,
      postingDate,
      experienceLevel,
      employmentType,
      requiredSkills,
      companyLogo,
      jobDescription,
      email,
    } = req.body;

    const newJob = new postJobModel({
      jobTitle,
      companyName,
      minSalary,
      maxSalary,
      salaryType,
      jobLocation,
      postingDate,
      experienceLevel,
      employmentType,
      requiredSkills,
      companyLogo,
      jobDescription,
      email,
    });

    await newJob.save();

    const users = await UserModel.find();

    // users.forEach(async (user) => {
    //     await sendNotification(user.email, 'New Job Alert', `A new job "${jobTitle}" has been posted by ${companyName}.`);
    // });

    res
      .status(201)
      .json({ message: "Job post created successfully", job: newJob });
  } catch (error) {
    res.status(500).json({ error: error.message });
    console.log("Failed to create job", error);
  }
};

// Showing all jobs

export const getJobs = async (req, res) => {
  try {
    const jobs = await postJobModel.find();
    return res.status(200).json({ message: "Showing jobs", jobs });
  } catch (error) {
    res.status(500).json({ error: error.message });
    console.log("Failed to fetch jobs", error);
  }
};

// Showing single job details
export const getJobDetails = async (req, res) => {
  const id = req.params.id;

  try {
    const job = await postJobModel.findById(id);

    if (!job) {
      return res.status(404).json({ error: "Job not found" });
    }

    res.json(job);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const createProfile = async (req, res) => {
  try {
    const newProfile = new profile(req.body);
    await newProfile.save();
    return res.status(200).json({
      success: true,
      message: "Profile saved successfully",
      profileId: newProfile._id 
    });
  } catch (error) {
    console.log("Failed to create profile", error);
  }
};


export const getProfile = async (req, res) => {
  const id = req.params.id;
  try {
    const userprofile = await profile.findById(id);
    if (!userprofile) {
      return res.status(404).json({ message: "Profile not found" });
    }
    return res.status(200).json({ message: "Showing profile", userprofile });
  } catch (error) {
    res.status(500).json({ error: error.message });
    console.log("Failed to fetch profile", error);
  }
}