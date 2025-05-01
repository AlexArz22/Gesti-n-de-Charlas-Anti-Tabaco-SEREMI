import { Directive, Input, ViewContainerRef, TemplateRef } from '@angular/core';

@Directive({
  selector: '[appApp]',
  standalone: true
})
export class AppDirective {

  constructor(private templateRef: TemplateRef<any>, private viewContainer: ViewContainerRef) { 
  }

  @Input () set appApp(condicion: boolean){
    if(condicion){
      this.viewContainer.createEmbeddedView(this.templateRef); //Inserta el contenido si es que no se esta mostrando
    } else {
      this.viewContainer.clear(); //Elimina el contenido
    }
  }

}
