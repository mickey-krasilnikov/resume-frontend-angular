import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isMenuCollapsed: boolean = true;

  ngOnInit() {
    drawBackgroundOnScroll();
    handleMenuOnMobileView();
  }

}

function drawBackgroundOnScroll() {
  var menuId:HTMLElement;
      function init () {
        menuId = document.getElementById("menu")!;
        document.addEventListener("scroll",scrollMenu,false);
      }
      function scrollMenu () {
        if (document.documentElement.scrollTop > 50) {
          menuId.classList.add("scroll");
          console.log('scroll');
        }
        else {
          menuId.classList.remove("scroll");
          console.log('no-scroll');
        }
      }
      document.addEventListener("DOMContentLoaded",init,false);
}

function handleMenuOnMobileView() {
     var mobBtn:HTMLElement, topMenu:HTMLElement;

      function init() {
        mobBtn = document.getElementById("mobile-btn")!;
        topMenu = document.getElementById("top-menu")!;
        mobBtn.addEventListener("click",mobileMenu,false);
      }

      function mobileMenu() {
        if(topMenu.classList.contains("mobile-open")) {
          topMenu.classList.remove("mobile-open");
        }
        else {
          topMenu.classList.add("mobile-open");
        }

        if (mobBtn.classList.contains("hamburger-cross")) {
          mobBtn.classList.remove("hamburger-cross");
        }
        else {
          mobBtn.classList.add("hamburger-cross");
        }
      }

      document.addEventListener("DOMContentLoaded",init);
}

