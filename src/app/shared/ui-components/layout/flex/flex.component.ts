import { Component, Input } from '@angular/core';
import {
  AlignContent,
  AlignItems,
  FlexDirection,
  FlexProps,
  FlexWrap,
  JustifyContent,
} from './types';

@Component({
  selector: 'flex',
  template: `<div [ngStyle]="getStyles()">
    <ng-content></ng-content>
  </div>`,
})
export class FlexComponent {
  // flex position
  @Input() flex = '';
  @Input() flexWrap: FlexWrap = 'no-wrap';
  @Input() flexDirection: FlexDirection = 'row';
  @Input() justifyContent: JustifyContent = 'normal';
  @Input() alignContent: AlignContent = 'normal';
  @Input() alignItems: AlignItems = 'normal';

  // dimensions
  @Input() width = '';
  @Input() maxWidth = '';
  @Input() height = '';
  @Input() maxHeight = '';

  // spacing
  @Input() m = '';
  @Input() mx = '';
  @Input() my = '';
  @Input() mt = '';
  @Input() mr = '';
  @Input() mb = '';
  @Input() ml = '';

  @Input() p = '';
  @Input() px = '';
  @Input() py = '';
  @Input() pt = '';
  @Input() pr = '';
  @Input() pb = '';
  @Input() pl = '';

  getStyles() {
    const styles: { [key: string]: string } = {
      display: 'flex',
      flex: this.flex,
      'flex-direction': this.flexDirection,
      'justify-content': this.justifyContent,
      'align-items': this.alignItems,
      'align-content': this.alignContent,
      'flex-wrap': this.flexWrap,
      width: this.width,
      'max-width': this.maxWidth,
      height: this.height,
      'max-height': this.maxHeight,
    };

    styles['margin-top'] = this.mt || this.my || this.m;
    styles['margin-right'] = this.mr || this.mx || this.m;
    styles['margin-bottom'] = this.mb || this.my || this.m;
    styles['margin-left'] = this.ml || this.mx || this.m;
    styles['padding-top'] = this.pt || this.py || this.p;
    styles['padding-right'] = this.pr || this.px || this.p;
    styles['padding-bottom'] = this.pb || this.py || this.p;
    styles['padding-left'] = this.pl || this.px || this.p;

    // Remove styles with empty values
    Object.keys(styles).forEach(key => {
      if (styles[key] === '') {
        delete styles[key];
      }
    });

    return styles;
  }

  flexProps: FlexProps = {
    flex: '',
    flexWrap: 'no-wrap',
    flexDirection: 'row',
    alignContent: 'normal',
    justifyContent: 'normal',
    alignItems: 'normal',
  };
}
