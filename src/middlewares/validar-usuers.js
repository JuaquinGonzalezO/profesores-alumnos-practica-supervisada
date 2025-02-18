import { body, param } from "express-validator";
import { handleErrors } from "./handle-errors.js";


export const registerUserValidator = [
    body("nombre").notEmpty().withMessage("El nombre es requerido"),
    body("apellido").notEmpty().withMessage("El apellido es requerido"),
    body("email").isEmail().withMessage("El email no es válido"),
    body("password")
        .isStrongPassword({ minLength: 8 })
        .withMessage("La contraseña debe tener mínimo 8 caracteres"),
    body("role")
        .optional()
        .isIn(["STUDENT_ROLE", "TEACHER_ROLE"])
        .withMessage("Rol inválido, debe ser STUDENT_ROLE o TEACHER_ROLE"),
    handleErrors
];

export const updateUserValidator = [
    param("id").isMongoId().withMessage("No es un ID válido de MongoDB"),
    body("nombre").optional().notEmpty().withMessage("El nombre no puede estar vacío"),
    body("apellido").optional().notEmpty().withMessage("El apellido no puede estar vacío"),
    body("email").optional().isEmail().withMessage("El email no es válido"),
    body("role")
        .optional()
        .isIn(["STUDENT_ROLE", "TEACHER_ROLE"])
        .withMessage("Rol inválido, debe ser STUDENT_ROLE o TEACHER_ROLE"),
    handleErrors
];

export const deleteUserValidator = [
    param("id").isMongoId().withMessage("No es un ID válido de MongoDB"),
    handleErrors
];


export const assignMateriaValidator = [
    param("id").isMongoId().withMessage("No es un ID válido de MongoDB"),
    body("materiaId").isMongoId().withMessage("No es un ID válido de materia"),
    handleErrors
];

export const loginValidator = [
    body("email").optional().isEmail().withMessage("Ingrese un correo válido"),
    body("nombre").optional().isString().withMessage("Ingrese un username válido"),
    body("password").isLength({min: 8}).withMessage("La contraseña debe tener al menos 8 caracteres"),
    handleErrors        
]