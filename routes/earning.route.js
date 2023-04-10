import express from 'express';
import router from './admin.route';
import { verifyToken } from '../middleware/token.js';
import { getEarning } from '../controller.js/earning.controller.js';

const  route = express.Router();


router.get('/getEarning',verifyToken,getEarning);


export default router;