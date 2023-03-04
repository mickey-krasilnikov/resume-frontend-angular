import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  isMenuCollapsed: boolean = true;

  ngOnInit() {
    this.addMenuBackgroundDrawer();
  }

  private addMenuBackgroundDrawer(): void {
    var menu: HTMLElement;
    function init() {
      menu = document.getElementById('menu')!;
      document.addEventListener('scroll', scrollMenu, false);
    }
    function scrollMenu() {
      if (document.documentElement.scrollTop > 50) {
        menu.classList.add('scroll');
        menu.classList.remove('navbar-dark');
        menu.classList.add('navbar-light');
      } else {
        menu.classList.remove('scroll');
        menu.classList.remove('navbar-light');
        menu.classList.add('navbar-dark');
      }
    }
    document.addEventListener('DOMContentLoaded', init, false);
  }
}
