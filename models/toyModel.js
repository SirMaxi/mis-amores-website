const mongoose = require('mongoose');

const toySchema = new mongoose.Schema ({
    titulo: {
        type: String,
        required: true        
    },
    descripcion: {
        type: String
    },
    precio: {
        type: Number,
        default: 0
    }
})

// Exportamos la variable User, que tendra el query que creamos ahora llamado 'user'
module.exports = Toy = mongoose.model('toy', toySchema);