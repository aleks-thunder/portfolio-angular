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
  selector: 'action-link',
  template: `<a
    [style.fontWeight]="linkProps.fontWeight"
    [style.fontSize]="linkProps.scale"
    [style.textAlign]="linkProps.textAlign"
    [style.cursor]="linkProps.cursor"
  >
    <ng-content></ng-content>
  </a>`,
})
export class LinkComponent {
  @Input() set fontWeight(fontWeight: FontWeights) {
    this.linkProps.fontWeight = fontWeights[fontWeight];
  }

  @Input() set scale(scale: Scales) {
    this.linkProps.scale = scales[scale];
  }
  @Input() set textAlign(justify: keyof typeof TextAlign) {
    this.linkProps.textAlign = TextAlign[justify];
  }

  linkProps: TextProps = {
    fontWeight: fontWeights['semiBold'],
    scale: scales['m'],
    textAlign: TextAlign.justify,
    cursor: 'pointer',
  };
}
