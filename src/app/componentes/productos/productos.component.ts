import { Component, OnInit } from '@angular/core';
import { ProductosService } from '@app/shared/services/productos.service';
import { productos } from '@app/shared/interfaces/productos.interface';


@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit {

  cartas:productos[]=[];
  //arreglo:Array<[productos]>=[];
  constructor(private api:ProductosService) { }

  ngOnInit(): void {
    

  }

   buscarProductos(value:string){
    
    if(value){
      this.api.searchProductos(value).subscribe(data => {this.cartas=data});
      
      console.log(this.cartas);
    }
    
  }
}

  


