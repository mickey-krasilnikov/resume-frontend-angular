import { Component, ElementRef, Input, Renderer2 } from '@angular/core';
import { Certification } from './certification.model';

@Component({
  selector: 'app-certification',
  templateUrl: './certification.component.html',
  styleUrls: ['./certification.component.css'],
})
export class CertificationComponent {
  @Input() certification!: Certification[];

  constructor(private renderer: Renderer2, private el: ElementRef) {}

  ngOnInit() {
    const filters: NodeList =
      this.el.nativeElement.querySelectorAll('.cert-filter');

    let currentSortIndex = 1;
    let sortDirection = 'desc';

    // adding initial desc filter on impotance
    this.renderer.addClass(filters[currentSortIndex], sortDirection);

    filters.forEach((filter, index) => {
      this.renderer.listen(filter, 'click', () => {
        filters.forEach((f) => {
          this.renderer.removeClass(f, 'asc');
          this.renderer.removeClass(f, 'desc');
        });

        if (currentSortIndex === index && sortDirection === 'desc') {
          sortDirection = 'asc';
          currentSortIndex = index;
        } else {
          sortDirection = 'desc';
          currentSortIndex = index;
        }

        this.sortCertification(index, sortDirection);
        this.renderer.addClass(filter, sortDirection);
      });
    });
  }

  sortCertification(index: number, sortDirection: string) {
    switch (index) {
      case 0:
        this.certification = this.certification.sort((a, b) =>
          sortDirection === 'asc'
            ? a.issuer.localeCompare(b.issuer)
            : b.issuer.localeCompare(a.issuer)
        );
        break;
      case 1:
        this.certification = this.certification.sort((a, b) =>
          sortDirection === 'asc'
            ? a.importance - b.importance
            : b.importance - a.importance
        );
        break;
      case 2:
        this.certification = this.certification.sort((a, b) => {
          const x: number =
            a.expirationDate != null
              ? new Date(a.expirationDate).getTime()
              : new Date(2999, 0, 0).getTime();
          const y: number =
            b.expirationDate != null
              ? new Date(b.expirationDate).getTime()
              : new Date(2999, 0, 0).getTime();
          return sortDirection === 'asc' ? x - y : y - x;
        });
        break;
      default:
        break;
    }
  }
}
