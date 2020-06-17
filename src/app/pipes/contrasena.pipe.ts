import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {
/* 
  transform(value: string, activar:boolean=true): string {
    
    MI SOLUCION:
    let nombre = value;
    if (activar){
      nombre = nombre.replace(/./g,'*');
      return nombre;
    }
    else{
      return nombre;
    } 
    
  }*/
  //SOLUCION DEL PROFE
  transform(value: string, activar:boolean=false): string {
    return (activar) ? '*'.repeat(value.length) : value;
  }
}
