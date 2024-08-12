import { Directive, ElementRef, Renderer2, OnInit } from '@angular/core';

@Directive({
  selector: '[appIntersectionObserverChildren]'
})
export class IntersectionObserverChildrenDirective implements OnInit {

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.renderer.addClass(entry.target, 'visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1
    });

    // Observar los hijos del elemento
    const children = this.el.nativeElement.querySelectorAll('.mision-img, .vision-img, .valores-img, .text, .text-reverse, .text3');
    children.forEach((child: HTMLElement) => observer.observe(child));
  }
}