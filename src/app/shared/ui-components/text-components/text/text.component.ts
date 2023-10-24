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
  template: `<p
    [style.fontWeight]="textProps.fontWeight"
    [style.fontSize]="textProps.scale"
    [style.textAlign]="textProps.textAlign"
  >
    <ng-content></ng-content>
  </p>`,
})
export class TextComponent {
  @Input() set fontWeight(fontWeight: FontWeights) {
    this.textProps.fontWeight = fontWeights[fontWeight];
  }

  @Input() set scale(scale: Scales) {
    this.textProps.scale = scales[scale];
  }
  @Input() set textAlign(justify: keyof typeof TextAlign) {
    this.textProps.textAlign = TextAlign[justify];
  }

  textProps: TextProps = {
    fontWeight: fontWeights['medium'],
    scale: scales['m'],
    textAlign: TextAlign.justify,
  };
}
