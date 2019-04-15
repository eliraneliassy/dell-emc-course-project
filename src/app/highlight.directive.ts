import { Directive, HostListener, ElementRef, OnInit, Renderer2, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit {

  @Input() color = 'black';


  @HostListener('mouseover')
  mouseHover() {
    console.log('Mouse Over Event Trigered');
  }

  @HostListener('mouseleave')
  mouseLeave() {
    console.log('Mouse Leave Event Trigered');
  }

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
    // console.log(this.el);
    this.renderer.setStyle(this.el.nativeElement, 'border', `5px solid ${this.color}`);
    this.renderer.setStyle(this.el.nativeElement, 'background-color', `red`);
  }

}
