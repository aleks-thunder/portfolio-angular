import { Component, Input } from '@angular/core';

import { TextComponent } from '../text/text.component';

@Component({
  selector: 'action-link',
  template: `<a [ngStyle]="getStyles()"><ng-content></ng-content></a>`,
})
export class LinkComponent extends TextComponent {
  @Input() cursor = 'pointer';

  override getStyles() {
    const parentStyles = super.getStyles();
    return {
      ...parentStyles,
      cursor: this.cursor,
    };
  }
}
