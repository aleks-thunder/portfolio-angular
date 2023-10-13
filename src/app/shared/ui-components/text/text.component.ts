import { Component, Input } from '@angular/core';

@Component({
  selector: 'text',
  template: `<p
    [style.fontWeight]="textProps.fontWeight"
    [style.fontSize]="textProps.scale"
  >
    <ng-content></ng-content>
  </p>`,
  styleUrls: [],
})
export class TextComponent {
  @Input() set fontWeight(fontWeight: keyof typeof this.fontWeights) {
    this.textProps.fontWeight = this.fontWeights[fontWeight];
  }

  @Input() set scale(fontSize: keyof typeof this.fontSizes) {
    this.textProps.scale = this.fontSizes[fontSize];
  }

  fontWeights = {
    light: 200,
    medium: 400,
    bold: 600,
  };

  fontSizes = {
    xs: '16px',
    m: '20px',
    xl: '24px',
    h1: '36px',
  };

  textProps = {
    fontWeight: this.fontWeights.medium,
    scale: this.fontSizes.m,
  };
}
