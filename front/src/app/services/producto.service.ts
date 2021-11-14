import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { GLOBAL } from "./GLOBAL";

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  public url;

  constructor(
    private _http: HttpClient,
  ) { 
    this.url = GLOBAL.url;
  }

  get_productos(filtro: any):Observable<any>{
    let headers = new HttpHeaders().set('Content-Type','application/json');
    return this._http.get(this.url+'productos/'+filtro,{headers:headers});
  }

  get_categorias():Observable<any>{
    let headers = new HttpHeaders().set('Content-Type','application/json');
    return this._http.get(this.url+'categorias',{headers:headers});
  }

  insert_producto(data:any){
    const fd = new FormData();
    fd.append('nombre',data.nombre);
    fd.append('unidad_venta',data.unidad_venta);
    fd.append('imagen',data.imagen);
    fd.append('precio_compra',data.precio_compra);
    fd.append('precio_venta',data.precio_venta);
    fd.append('stock',data.stock);
    fd.append('idcategoria',data.idcategoria);

    return this._http.post(this.url + 'producto/registrar',fd);
  }


  get_producto(id:any):Observable<any>{
    let headers = new HttpHeaders().set('Content-Type','application/json');
    return this._http.get(this.url+'producto/'+id,{headers:headers});
  }

  update_producto(data:any){
    const fd = new FormData();
    fd.append('nombre',data.nombre);
    fd.append('unidad_venta',data.unidad_venta);
    fd.append('imagen',data.imagen);
    fd.append('precio_compra',data.precio_compra);
    fd.append('precio_venta',data.precio_venta);
    fd.append('idcategoria',data.idcategoria);

    return this._http.put(this.url + 'producto/editar/'+data._id+'/'+data.img_name,fd);
  }

  insert_categoria(data:any):Observable<any>{
    let headers = new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.url+'categoria/registrar',data,{headers:headers});
  }

  delete_producto(id:any):Observable<any>{
    let headers = new HttpHeaders().set('Content-Type','application/json');
    return this._http.delete(this.url+'producto/'+id,{headers:headers});
  }

  stock_producto(data:any):Observable<any>{
    let headers = new HttpHeaders().set('Content-Type','application/json');
    return this._http.put(this.url+'producto/stock/'+data._id,data,{headers:headers});
  }


}
