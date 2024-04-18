import express from 'express';
import { createJob, getJobs, getJobDetails } from '../controllers/Job.controllers.js';

const router = express.Router();

router.post('/', createJob);
router.get('/', getJobs);
router.get('/:id', getJobDetails);

export default router;