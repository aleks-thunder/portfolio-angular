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
    this.mediaQueryService.getActiveMediaQuery();
    this.isMobile = this.mediaQueryService.isMobileView();
  }

  ngOnInit() {
    this.onResize();
  }

  scrollToElement(elementId: string) {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
