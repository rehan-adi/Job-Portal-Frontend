import postJobModel from '../models/PostJob.model.js';
import UserModel from '../models/User.js'


// create jobs 

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
            jobDescription,
            email
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
            email
        });

        await newJob.save();

        const users = await UserModel.find();

        users.forEach(async (user) => {
            await sendNotification(user.email, 'New Job Alert', `A new job "${jobTitle}" has been posted by ${companyName}.`);
        });
        
        //  have doute
        await sendNotification(newJob); 
        //  have doute  

        res.status(201).json({ message: "Job post created successfully", job: newJob });
    } catch (error) {
        res.status(500).json({ error: error.message });
        console.log('Failed to create job', error);
    }
};


// Showing all jobs

export const getJobs = async(req, res) => {
    try {
        const jobs = await postJobModel.find();
        return res.status(200).json({ message: 'Showing jobs', jobs });
    } catch (error) {
        res.status(500).json({ error: error.message });
        console.log('Failed to fetch jobs', error);
    }
}

