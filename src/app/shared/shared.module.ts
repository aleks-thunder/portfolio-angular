import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TextComponent, LinkComponent } from './ui-components/text-components';
import { FlexComponent } from './ui-components/layout';
import { SvgIconComponent } from './ui-components/svg/svg-icon.component';
import { ImageComponent } from './ui-components/image/image.component';

const SharedModules = [
  TextComponent,
  LinkComponent,
  FlexComponent,
  SvgIconComponent,
  ImageComponent,
];

@NgModule({
  imports: [CommonModule],
  declarations: [SharedModules],
  exports: [SharedModules],
})
export class SharedModule {}
