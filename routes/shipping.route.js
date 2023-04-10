import express from 'express';
const router = express.Router();
import { allshiping,addshippings,updateShipping,deleteShipping,getShipping } from '../controller.js/shipping.controller.js';
router.get('/shippings', allshiping);
  
router.post('/shippings/:id', getShipping);

router.post('/addshippings',addshippings);


router.patch('/updateshippings/:id', updateShipping);

router.delete('/deleteshippings/:id',deleteShipping);

export default router;
