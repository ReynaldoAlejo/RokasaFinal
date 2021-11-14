export class Producto{
    constructor(
        public _id:string,
        public nombre : string,
        public unidad_venta: string,
        public imagen:string,
        public precio_compra :number,
        public precio_venta:number,
        public stock:number,
        public idcategoria:string,  
    ){

    }
}