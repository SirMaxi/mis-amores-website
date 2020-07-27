const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

// Configuracion de express
const app = express();

//Middleware (Se activa antes de que intentemos interactuar con alguna ruta con express)
app.use(express.json()); //Este es el body parser, que va a dejar que podamos usar req.body.(lo que queramos sacar en un json)
//Sacar el cors cuando entre a produccion
app.use(cors());
app.use("/uploads", express.static("uploads"));

//Arrancamos el servidor
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`El servidor arranco en el puerto ${PORT}`));

//conectamos el servidor
mongoose.connect(process.env.MONGODB_CONNECTION_STRING,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}, (err) => {
    if (err) throw err;
    console.log('Conexion con MongoDB Atlas establecida');
});

//seteamos las rutas
app.use('/users', require('./routes/userRouter'));
app.use('/toys', require('./routes/toyRouter'));

