import { Directive, HostListener, EventEmitter, Input, Output } from '@angular/core';

@Directive({
  selector: '[appInfiniteScroll]'
})
export class InfiniteScrollDirective {

  @Input() isLoading: boolean;
  @Output() bottomReached: EventEmitter<boolean> = new EventEmitter<boolean>();
  constructor() { }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    if (this.isLoading) {
      return;
    }
    const distance = this.getDistFromBottom();

    console.log(distance);
    if (distance < 20) {
      this.bottomReached.emit(true);
    }
  }

  getDistFromBottom() {

    const scrollPosition = window.pageYOffset;
    const windowSize = window.innerHeight;
    const bodyHeight = document.body.offsetHeight;

    return Math.max(bodyHeight - (scrollPosition + windowSize), 0);

  }

}
