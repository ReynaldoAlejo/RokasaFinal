var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ClienteSchema = Schema({
    
    dni: String,
    nombres: String,
    telefono:String,
    createAt: {type: Date, default: Date.now}
});

module.exports = mongoose.model('cliente',ClienteSchema);