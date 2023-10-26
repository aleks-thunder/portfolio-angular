import { Component, HostListener } from '@angular/core';
import { ResponsiveValuesService } from '@services/responsive-values/responsive-values.service';
import { svgSrc } from '@shared/constants/src-names';

@Component({
  selector: 'app-tech-stack',
  templateUrl: './tech-stack.component.html',
  styleUrls: ['./tech-stack.component.scss'],
})
export class TechStackComponent {
  svgSrc = svgSrc;

  responsiveWidth: string = '20vw';

  constructor(private responsiveValuesService: ResponsiveValuesService) {}

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.updateResponsiveValues();
  }

  ngOnInit() {
    this.onResize();
  }

  private updateResponsiveValues() {
    const { width } = this.responsiveValuesService.updateTechValues(
      this.responsiveWidth
    );
    this.responsiveWidth = width;
  }
}
