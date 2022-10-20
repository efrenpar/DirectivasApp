import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[customIf]'
})
export class CustomIfDirective {

  @Input() set customIf(condicion:boolean){
    if(condicion){
      this.viewcontainer.createEmbeddedView(this.templateRef)
    }else{
      this.viewcontainer.clear();
    }
  }

  constructor(
    private templateRef:TemplateRef<HTMLElement>,
    private viewcontainer:ViewContainerRef
  ) { }



}
