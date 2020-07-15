const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const auth = require('../middleware/auth');
const User = require('../models/userModel');


router.get('/', auth, async(req, res) => {
    const user = await User.findById(req.user);
    res.json({
        displayName: user.displayName,
        id: user._id
    });
});

router.post('/register', async(req, res) => {
    try {
    let { email, password, displayName } = req.body; //Esto lo podemos hacer gracias a app.use(express.json())

    //Validamos los datos
    if (!email || !password)
        return res
            .status(400)
            .json({ mensaje: "No agregaste todos los campos"});
    
    const existingUser = await User.findOne({email: email});
    if(existingUser)
        return res
            .status(400)
            .json({ mensaje: "Ya existe una cuenta con este email"});

    if(!displayName)
        displayName = email;

    //Encryptamos la password con bcrypt, para que nadie la pueda robar
    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);

    //Creamos el nuevo usuario
    const newUser = new User({
        email,
        password: passwordHash,
        displayName
    });

    //Y lo guardamos
    const savedUser = await newUser.save();
    res.json(savedUser);

    } catch(err) {
        res.status(500).json({error: err.message});
    }
});

router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        //Validamos
        if(!email || !password)
            return res.status(400).json({ msg: "Todos los campos deben estar completos para poder ingresar"});
        //Buscamos el usuario que coincida con el email
        const user = await User.findOne({email: email});
            if(!user)
            return res.status(400).json({ msg: "No existe un usuario registrado con ese email"});
        
        //Ahora vemos si coinciden las contraseñas
        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch)
            return res.status(400).json({ msg: "Password incorrecta"});
        
        //Creamos el token del usuario
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
        res.json({
            token,
            user: {
                id: user._id,
                displayName: user.displayName,
                email: user.email
            }
        });

    } catch(err) {
        res.status(500).json({error: err.message});
    }
});

router.post('/tokenIsValid', async (req, res) => {
    try {
        const token = req.header('x-auth-token');
        if(!token) return res.json(false);

        const verified = jwt.verify(token, process.env.JWT_SECRET);
        if(!verified) return res.json(false);

        const user = await User.findById(verified.id);
        if(!user) return res.json(false);

        return res.json(true);
        
    } catch (err) {
        res.status(500).json({error: err.message});
    }
});

module.exports = router; 