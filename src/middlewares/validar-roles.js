import { validarToken } from "../helpers/generate-jwt.js";

export const validareole = async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ').pop() 
        const tokenData = await validarToken(token) 
        if (tokenData._id) {
            next()
        } else {
            res.status(400)
            res.send({ error: 'NO tienes permiso para el uso de esta funcion  ' })
        }
    } catch (err) {
        console.log("denegado")
    }
}

export default validareole;