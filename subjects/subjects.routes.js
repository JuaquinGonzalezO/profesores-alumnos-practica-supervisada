import { Router } from "express";
import { addSubjects, deleteSubject,listSubjects, } from "./subjects.controller.js";
import {validareole} from "../middlewares/validar-roles.js"
import{validarPermiso}from  "../middlewares/validar-permisos.js"

const router = Router();

router.post("/add", addSubjects);
router.delete("/:id", validareole,validarPermiso(['TEACHER_ROLE']), deleteSubject);
router.get("/", listSubjects);


export default router;