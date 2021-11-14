import { Component, OnInit } from '@angular/core';
import { ProveedorService } from 'src/app/services/proveedor.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-proveedor-index',
  templateUrl: './proveedor-index.component.html',
  styleUrls: ['./proveedor-index.component.css']
})
export class ProveedorIndexComponent implements OnInit {
  public proveedores:any;
  public p:number | undefined;

  constructor(
    private _proveedorService: ProveedorService 
  ) { }

  ngOnInit() {
    this._proveedorService.get_proveedores().subscribe(
      response=>{
        this.proveedores = response.proveedores;
        console.log(this.proveedores);
        
      },
      error=>{

      }
    )
  }
  eliminar(id: any){
    Swal.fire({
      title: 'Estas seguro de eliminarlo?',
      text: "Eliminación!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Eliminar!',
      cancelButtonText: 'No, cancelar!',
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
        Swal.fire(
          'Registro eliminado!',
          'Se elimino correctamente.',
          'success'
        )

        this._proveedorService.delete_proveedor(id).subscribe(
          resposen=>{
            this._proveedorService.get_proveedores().subscribe(
              response=>{
                this.proveedores = response.proveedores;
              },
              error=>{

              }
            );
          },
          erro=>{

          }
        );

      } else if (
       
        result.dismiss === Swal.DismissReason.cancel
      ) {
        Swal.fire(
          'Cancelado',
          'Se cancelo la solicitud :)',
          'error'
        )
      }
    })
  } 


}
