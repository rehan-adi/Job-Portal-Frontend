import mongoose from "mongoose";

const postJobSchema = mongoose.Schema({
  jobTitle: { type: String, required: true },
  companyName: { type: String, required: true },
  minSalary: { type: Number, required: true },
  maxSalary: { type: Number, required: true },
  salaryType: {
    type: String,
    enum: ["Hourly", "Monthly", "Yeray",],
    required: true,
  },
  jobLocation: { type: String, required: true },
  postingDate: { type: Date, default: Date.now },
  experienceLevel: {
    type: String,
    enum: ["Entry Level", "Mid Level", "Senior Level"],
    required: true,
  },
  employmentType: {
    type: String,
    enum: ["Full-time", "Part-time", "internship", "Freelance"],
    required: true,
  },
  requiredSkills: { type: [String], required: true },
  companyUrl: { type: String, required: true },
  jobDescription: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
},
{ timestamps: true });

const PostJob = mongoose.model("PostJob", postJobSchema);

export default PostJob;
