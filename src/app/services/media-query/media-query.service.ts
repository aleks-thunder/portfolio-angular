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
    desktopM: 1024,
    desktopL: 1440,
  };

  private mediaQueries: Record<string, string> = {
    mobileS: `(max-width: ${this.breakpoints.mobileS}px)`,
    mobileM: `(max-width: ${this.breakpoints.mobileL}px) and (min-width: ${this.breakpoints.mobileM}px)`,
    mobileL: `(max-width: ${this.breakpoints.tablet}px) and (min-width: ${this.breakpoints.mobileL}px)`,
    tablet: `(max-width: ${this.breakpoints.desktopM}px) and (min-width: ${this.breakpoints.tablet}px)`,
    desktopM: `(max-width: ${this.breakpoints.desktopL}px) and (min-width: ${this.breakpoints.desktopM}px)`,
    desktopL: `(min-width: ${this.breakpoints.desktopL}px)`,
  };

  private activeMediaQuery: string = this.mediaQueries['mobileS'];

  constructor() {
    this.updateActiveMediaQuery();
    window.addEventListener('resize', this.updateActiveMediaQuery.bind(this));
  }

  private updateActiveMediaQuery() {
    for (const query of Object.values(this.mediaQueries)) {
      if (window.matchMedia(query).matches) {
        this.activeMediaQuery = query;
        return;
      }
    }
  }

  isView(mediaQuery: string): boolean {
    const desktop =
      this.activeMediaQuery === this.mediaQueries['desktopM'] ||
      this.activeMediaQuery === this.mediaQueries['desktopL'];

    const mobile =
      this.activeMediaQuery === this.mediaQueries['mobileS'] ||
      this.activeMediaQuery === this.mediaQueries['mobileM'] ||
      this.activeMediaQuery === this.mediaQueries['mobileL'];

    const singleQueryCheck =
      this.activeMediaQuery === this.mediaQueries[mediaQuery];

    return mediaQuery === 'desktop'
      ? desktop
      : mediaQuery === 'mobile'
      ? mobile
      : singleQueryCheck;
  }
}
