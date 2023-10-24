import { Component, HostListener } from '@angular/core';
import { MediaQueryService } from '@services/media-query/media-query.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {
  isDesktop: boolean = false;
  isMobile: boolean = false;
  responsiveWidth: string;
  responsiveHeight: string;

  imageSrc = [
    { src: 'expl-1' },
    { src: 'expl-2' },
    { src: 'expl-3' },
    { src: 'expl-4' },
    { src: 'expl-5' },
  ];

  private imgDimensionsMap: Map<string, { width: string; height: string }> =
    new Map([
      [this.mediaQueryService.mobileS, { width: '60vw', height: '35vw' }],
      [this.mediaQueryService.mobileM, { width: '50vw', height: '30vw' }],
      [this.mediaQueryService.mobileL, { width: '50vw', height: '30vw' }],
      [this.mediaQueryService.tablet, { width: '29vw', height: '17vw' }],
      [this.mediaQueryService.desktop, { width: '20vw', height: '12vw' }],
      [this.mediaQueryService.desktopL, { width: '360px', height: '220px' }],
    ]);

  constructor(public mediaQueryService: MediaQueryService) {
    this.responsiveWidth =
      this.imgDimensionsMap.get('desktopL')?.width || '400px';
    this.responsiveHeight =
      this.imgDimensionsMap.get('desktopL')?.height || '260px';
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.updateImageDimensions();
    this.isDesktop = this.mediaQueryService.isDesktopView();
    this.isMobile = this.mediaQueryService.isMobileView();
  }

  ngOnInit() {
    this.onResize();
  }

  private updateImageDimensions() {
    const dimensions = this.imgDimensionsMap.get(
      this.mediaQueryService.getActiveMediaQuery()
    );

    if (dimensions) {
      this.responsiveWidth = dimensions.width;
      this.responsiveHeight = dimensions.height;
    }
  }
}
