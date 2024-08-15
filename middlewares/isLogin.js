import { findError } from '../src/api/v1/utils/utils.js';
import jwt from 'jsonwebtoken';


//3
const isLogin = async (req, res, next) => { //3
    try {
        validateHeaders(req, res);
        const token = req.header('Authorization').split(' ')[1]; /* [bearer token]  */
        const tokenData = await validateToken(token);
        req.user = tokenData; // req.user es un objeto que contiene la información del usuario autenticado.
        next();
    } catch (error) {
        const errorFound = findError(error.code);
        return res
            .status(errorFound[0]?.status)
            .json({ error: errorFound[0]?.message });
    }
};


/* [bearer token]  */

//req.header('Authorization') es un método de Express.js que se utiliza para obtener el valor de un encabezado HTTP específico.

// Authorization es el nombre del encabezado HTTP que se utiliza para proporcionar credenciales de autenticación.

// Bearer es un esquema de autenticación específico que se utiliza con tokens JWT (JSON Web Tokens).

const validateToken = async (token) => {
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        return decoded;
    } catch (err) {
        throw createError('auth_04', 'Token no válido');
    }
};

const validateHeaders = (req) => {
    if (!req.header('Authorization')) {
        throw createError('auth_03', 'token no encontrado');
    }
};

const createError = (code, message) => {
    const error = new Error(message);// new Error() crea un nuevo objeto de error. 
    error.code = code;
    return error;
};


export { isLogin };


// un throw es una excepción que se lanza en el código y que se puede capturar en un bloque catch.
// En este caso, se lanza un error si no se encuentra el token en el encabezado de la solicitud o si el token no es válido.