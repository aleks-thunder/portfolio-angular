import { Component, HostListener } from '@angular/core';
import { MediaQueryService } from '@services/media-query/media-query.service';
import { ResponsiveValuesService } from '@services/responsive-values/responsive-values.service';
import { imageSrc } from '@shared/constants/src-names';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {
  imageSrc = imageSrc;

  isDesktop: boolean = false;
  isMobile: boolean = false;

  responsiveWidth: string = '400px';
  responsiveHeight: string = '240px';

  constructor(
    private mediaQueryService: MediaQueryService,
    private responsiveValuesService: ResponsiveValuesService
  ) {}

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.updateView();
    this.updateResponsiveValues();
  }

  ngOnInit() {
    this.onResize();
  }

  private updateView() {
    this.isDesktop = this.mediaQueryService.isView('desktop');
    this.isMobile = this.mediaQueryService.isView('mobile');
  }

  private updateResponsiveValues() {
    const { width, height } = this.responsiveValuesService.updateAboutValues(
      this.responsiveWidth,
      this.responsiveHeight
    );
    this.responsiveWidth = width;
    this.responsiveHeight = height;
  }
}
