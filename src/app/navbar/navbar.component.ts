import { DOCUMENT } from '@angular/common';
import { Component, ElementRef, Inject, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  showMenu = false;

  constructor(
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document,
    private elementRef: ElementRef
  ) {}

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }

  handleClick(event: Event) {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.showMenu = false;
    }
  }
  ngOnInit(): void {
    this.renderer.listen(this.document, 'click', (event: Event) => {
      this.handleClick(event);
    });
  }
}
