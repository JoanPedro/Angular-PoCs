import { Directive, ElementRef, Input} from '@angular/core';

@Directive({
  selector: '[appClass]'
})
export class ClassDirective {

  constructor(private element: ElementRef) {
  }

  @Input('appClass') set classNames(classObj: any) {
    // Key -> Classname passado pelo elemento, que deseja aplicar.
    // classObj -> Valor/Lógica booleano.
    for(let key in classObj) {
      if(classObj[key]) {
        this.element.nativeElement.classList.add(key);
      } else {
        this.element.nativeElement.classList.remove(key);
      }
    }
  }
}
