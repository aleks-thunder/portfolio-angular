import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MediaQueryService {
  private breakpoints = {
    mobileS: 320,
    mobileM: 375,
    mobileL: 425,
    tablet: 768,
    desktop: 1024,
    desktopL: 1440,
  };

  readonly mobileS = `(max-width: ${this.breakpoints.mobileS}px)`;
  readonly mobileM = `(max-width: ${this.breakpoints.mobileL}px) and (min-width: ${this.breakpoints.mobileM}px)`;
  readonly mobileL = `(max-width: ${this.breakpoints.tablet}px) and (min-width: ${this.breakpoints.mobileL}px)`;
  readonly tablet = `(max-width: ${this.breakpoints.desktop}px) and (min-width: ${this.breakpoints.tablet}px)`;
  readonly desktop = `(max-width: ${this.breakpoints.desktopL}px) and (min-width: ${this.breakpoints.desktop}px)`;
  readonly desktopL = `(min-width: ${this.breakpoints.desktopL}px)`;

  isDesktopView(): boolean {
    return (
      this.getActiveMediaQuery() === this.desktop ||
      this.getActiveMediaQuery() === this.desktopL
    );
  }

  isTabletView(): boolean {
    return this.getActiveMediaQuery() === this.tablet;
  }

  isMobileView(): boolean {
    return (
      this.getActiveMediaQuery() === this.mobileM ||
      this.getActiveMediaQuery() === this.mobileS ||
      this.getActiveMediaQuery() === this.mobileL
    );
  }

  getActiveMediaQuery(): string {
    const mediaQueries = [
      this.mobileM,
      this.mobileL,
      this.tablet,
      this.desktop,
      this.desktopL,
      this.mobileS,
    ];

    for (const query of mediaQueries) {
      if (window.matchMedia(query).matches) {
        return query;
      }
    }
    return this.mobileS;
  }
}
