const mongoose = require('mongoose');

const conectar = (url) => {
    return mongoose.connect(url);
}

module.exports = conectar;