import express from 'express';
const router = express.Router();
import { createForm, getData } from '../controllers/FormController.js';

router.post("/form", createForm)

router.get("/form", getData)

export default router