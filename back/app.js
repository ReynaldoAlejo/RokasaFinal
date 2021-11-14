const express = require("express");

const bodyparser = require("body-parser");

const moongose = require("mongoose");

const port = process.env.PORT || 4201;

//Routes
const user_routes = require('./routes/user');
const cliente_routes = require('./routes/cliente');
const proveedor_routes = require('./routes/proveedor');
const producto_routes = require('./routes/producto');
const pedido_routes = require('./routes/pedido');
const categoria_routes = require('./routes/categoria');
const venta_routes = require('./routes/venta'); 
const entrega_routes = require('./routes/entrega');

const app = express();



moongose.connect(
  "mongodb://localhost:27017/rokasadb",
  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false,
  },
  (err, res) => {
    if (err) {
      throw err;
    } else {
      console.log("Corriendo Servidor Rokasa");
      app.listen(port, function () {
        console.log("Servidor conectado en " + port);
      });
    }
  }
);    

app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());
//agregué :
app.use(express.json());

app.use((req,res,next)=>{
  res.header('Content-Type: application/json');
  res.header('Access-Control-Allow-Origin','*'); 
  res.header('Access-Control-Allow-Headers','Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Access-Control-Allow-Request-Method');
  res.header('Access-Control-Allow-Methods','GET, PUT, POST, DELETE, OPTIONS');
  res.header('Allow','GET, PUT, POST, DELETE, OPTIONS');
  next();
}); 

app.use('/api',user_routes);
app.use('/api',cliente_routes);
app.use('/api',proveedor_routes);
app.use('/api',producto_routes);
app.use('/api',producto_routes);
app.use('/api',pedido_routes);
app.use('/api',categoria_routes);
app.use('/api',venta_routes); 
app.use('/api',entrega_routes);
module.exports = app;