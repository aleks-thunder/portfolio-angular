import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TextComponent } from './ui-components/text/text.component';
import { FlexComponent } from './ui-components/flex/flex.component';
import { SvgIconComponent } from './ui-components/svg/svg-icon.component';

const SharedModules = [TextComponent, FlexComponent, SvgIconComponent];

@NgModule({
  imports: [CommonModule],
  declarations: [SharedModules],
  exports: [SharedModules],
})
export class SharedModule {}
