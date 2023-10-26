import { Injectable } from '@angular/core';
import { MediaQueryService } from '../media-query/media-query.service';

@Injectable({
  providedIn: 'root',
})
export class ResponsiveValuesService {
  constructor(public mediaQueryService: MediaQueryService) {}

  updateAboutValues(width: string, height: string) {
    let newWidth = width;
    let newHeight = height;

    switch (true) {
      case this.mediaQueryService.isView('mobileS'):
        newWidth = '60vw';
        newHeight = '35vw';
        break;

      case this.mediaQueryService.isView('mobileM') ||
        this.mediaQueryService.isView('mobileL'):
        newWidth = '50vw';
        newHeight = '30vw';
        break;

      case this.mediaQueryService.isView('tablet'):
        newWidth = '30vw';
        newHeight = '20vw';
        break;

      case this.mediaQueryService.isView('desktopM'):
        newWidth = '20vw';
        newHeight = '12vw';
        break;

      case this.mediaQueryService.isView('desktopL'):
        newWidth = '400px';
        newHeight = '240px';
        break;

      default:
        newWidth = '400px';
        newHeight = '240px';
        break;
    }

    return { width: newWidth, height: newHeight };
  }

  updateTechValues(width: string) {
    let newWidth = width;

    switch (true) {
      case this.mediaQueryService.isView('mobile'):
        newWidth = 'calc(100vw - 8px)';
        break;

      case this.mediaQueryService.isView('tablet') ||
        this.mediaQueryService.isView('desktopM'):
        newWidth = '30vw';
        break;

      default:
        newWidth = '20vw';
        break;
    }
    return { width: newWidth };
  }
}
