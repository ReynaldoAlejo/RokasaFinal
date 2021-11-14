var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProductoSchema = Schema({
    nombre: String,
    unidad_venta: String,
    imagen: String,
    precio_compra: Number,
    precio_venta: Number,
    stock: Number,
    idcategoria: {type: Schema.ObjectId, ref: 'categoria'},
});

module.exports = mongoose.model('producto',ProductoSchema);