const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    displayName: { type: String }
});

// Exportamos la variable User, que tendra el query que creamos ahora llamado 'user'
module.exports = User = mongoose.model('user', userSchema);