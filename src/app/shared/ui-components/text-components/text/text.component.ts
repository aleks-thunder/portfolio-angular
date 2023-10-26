import { Component, Input } from '@angular/core';
import {
  FontWeights,
  Scales,
  TextAlign,
  TextProps,
  fontWeights,
  scales,
} from '../types';

@Component({
  selector: 'text',
  template: `<p [ngStyle]="getStyles()"><ng-content></ng-content></p>`,
})
export class TextComponent {
  @Input() fontWeight: FontWeights = 'medium';
  @Input() scale: Scales = 'm';
  @Input() textAlign: keyof typeof TextAlign = 'justify';

  getStyles() {
    return {
      'font-weight': fontWeights[this.fontWeight],
      'font-size': scales[this.scale],
      'text-align': TextAlign[this.textAlign],
    };
  }
}
