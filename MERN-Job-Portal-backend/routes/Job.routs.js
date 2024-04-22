import express from 'express';
import { createJob, getJobs, getJobDetails, createProfile, getProfile } from '../controllers/Job.controllers.js';

const router = express.Router();

router.post('/', createJob);
router.get('/', getJobs);
router.get('/:id', getJobDetails);
router.post('/createProfile', createProfile);
router.get('/getProfile/:id', getProfile);

export default router;