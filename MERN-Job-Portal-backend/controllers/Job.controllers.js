import postJobModel from '../models/PostJob.model.js';

export const createJob = async (req, res) => {
    try {
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
            jobDescription
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
            jobDescription
        });

        await newJob.save();

        res.status(201).json({ message: "Job post created successfully", job: newJob });
    } catch (error) {
        res.status(500).json({ error: error.message });
        console.log('Failed to create job', error);
    }
};

export const getJobs = async(req, res) => {
    try {
        const jobs = await postJobModel.find();
        return res.status(200).json({ message: 'Showing jobs', jobs });
        console.log(jobs);
    } catch (error) {
        res.status(500).json({ error: error.message });
        console.log('Failed to fetch jobs', error);
    }
}

