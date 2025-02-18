import { Schema, model } from "mongoose";

const CursoSchema = new Schema(
    {
        nombre: {
            type: String,
            required: [true, "El nombre del curso es obligatorio"]
        },
        descripcion: {
            type: String,
            required: false
        },
        profesor: {
            type: String,
            required: true
        },
        alumnos: {
            type: [String],
            default: []
        }
    },
    {
        timestamps: true,  
        versionKey: false
    }
);

export default model("Curso", CursoSchema);