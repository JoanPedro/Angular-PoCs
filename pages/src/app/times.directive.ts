import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[appTimes]'
})
export class TimesDirective {

  constructor(
    private viewContainer: ViewContainerRef,
    private templateRef: TemplateRef<any>,
  ) { }

  @Input('appTimes') set render(times: number) {
    /*
      Primeiro faz com que o elemento pai, o que está recebendo a diretiva não
      contenha nada dentro dele! um <ul> </ul>, ou seja, Vazio!
    */
    this.viewContainer.clear();

    /*
      Depois, simplesmente recria os componentes. Os que estão dentro do
      componente que está recebendo a diretiva.
    */
    for(let i = 0; i< times; i++) {
      this.viewContainer.createEmbeddedView(this.templateRef, {
        index: i,

      });
    }
  }
}
