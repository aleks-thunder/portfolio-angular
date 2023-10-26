import { Component, HostListener } from '@angular/core';
import { MediaQueryService } from '@services/media-query/media-query.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  isMobile: boolean = false;

  constructor(public mediaQueryService: MediaQueryService) {}
  @HostListener('window:resize', ['$event'])
  onResize() {
    this.isMobile = this.mediaQueryService.isView('mobile');
  }

  ngOnInit() {
    this.onResize();
  }

  scrollToElement(elementId: string) {
    const element = document.getElementById(elementId);
    if (element) {
      const headerHeight = 100;
      const scrollPosition =
        element.getBoundingClientRect().top + window.scrollY - headerHeight;

      window.scrollTo({
        top: scrollPosition,
        behavior: 'smooth',
      });
    }
  }
}
