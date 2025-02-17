import { Router } from "express";
import { addSubjectToUser,listStudents, } from "./user.controller.js"; 

const router = Router();

router.post("/add", addSubjectToUser);


router.get("/students", listStudents);
export default router;
