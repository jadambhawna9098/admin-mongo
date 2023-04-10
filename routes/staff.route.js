import express from "express";
import { verifyToken } from "../middleware/token.js";
import { addStaff ,saveAllStaff,getListOfStaff,removeStaff,updateStaff} from "../controller.js/staff.controller.js";
const router = express.Router();

router.post('/deliverystaff/:email',addStaff)
router.post("/saveAll",body("email").notEmpty() ,verifyToken,saveAllStaff);
router.put("/update/:email",body("email").notEmpty(),updateStaff);
router.delete("/remove/:email",removeStaff);
router.get("/list",getListOfStaff);
export default router;