import { Directive, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[error-msg]'
})
export class ErrorMsgDirective implements OnInit{

  private _color:string = "red"
  private _mensaje:string = "Este campo es requerido"

  htmlElement:ElementRef<HTMLElement>;

  @Input() set color(valor:string){
    this._color = valor;
    this.setColor();
  };

  // @Input() mensaje:string = "este campo es requerido"

  @Input() set mensaje(valor:string){
    this._mensaje = valor;
    this.setMensaje();
  };

  @Input() set valido(valor:boolean){
    if(valor){
      this.htmlElement.nativeElement.classList.add("hidden");
    }else{
      this.htmlElement.nativeElement.classList.remove("hidden");
    }
  };

  constructor(private el:ElementRef<HTMLElement>) {

    this.htmlElement = el;

  }

  ngOnInit(): void {
    this.setColor(); // no se usa porque en este punto me setea los valores a undefined
    this.setMensaje(); // no se usa porque en este punto me setea los valores a undefined
    this.setStyle();
  }

  setStyle(){
    this.htmlElement.nativeElement.classList.add("form-text");
  }

  setColor(){
    this.htmlElement.nativeElement.style.color=this._color;
  }

  setMensaje(){
    this.htmlElement.nativeElement.innerText = this._mensaje;
  }

}
