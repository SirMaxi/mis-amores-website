const mongoose = require('mongoose');

const toySchema = new mongoose.Schema ({
    titulo: {
        type: String,
        required: true        
    },
    imagenes: {
        type: Array,
        default: []
    },
    descripcion: {
        type: String
    },
    precio: {
        type: Number,
        default: 0
    }
}, { timestamps: true });

// Exportamos la variable User, que tendra el query que creamos ahora llamado 'user'
module.exports = Toy = mongoose.model('toy', toySchema);