const jwt = require('jsonwebtoken');

const auth = (req, res, next) => {
    try {
        const token = req.header('x-auth-token');
        if(!token)
            return res
                .status(401)
                .json({mensaje: "No hay token de autenticacion"});
                
        //verificamos el token con la password y nos da el objeto decodificado
        const verified = jwt.verify(token, process.env.JWT_SECRET);

        if (!verified)
            return res
                .status(401)
                .json({mensaje: "Verificacion de token fallida"});

        req.user = verified.id;
        next();

    } catch (err) {
        res.status(500).json({error: err.message});    
    }
};

module.exports = auth;