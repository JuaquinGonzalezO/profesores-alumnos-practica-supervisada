import Curso from '../models/course.model.js';  
import Usuario from '../models/user.model.js';  

export const eliminarCurso = async (req, res) => {
    try {
        const { id } = req.params; 
        const userId = req.usuario.id; 

       
        const curso = await Curso.findById(id);
        if (!curso) {
            return res.status(404).json({ message: "Curso no encontrado" });
        }

        
        if (req.usuario.role !== "TEACHER_ROLE" || curso.teacher.toString() !== userId) {
            return res.status(403).json({
                message: "No tienes permisos para eliminar este curso"
            });
        }

       
        await Usuario.updateMany(
            { _id: { $in: curso.students } }, 
            { $pull: { courses: curso._id } } 
        );

       
        await Curso.findByIdAndDelete(id);

        return res.status(200).json({
            message: "Curso eliminado correctamente y estudiantes desasignados"
        });

    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: "Error al eliminar el curso",
            error: error.message
        });
    }
};