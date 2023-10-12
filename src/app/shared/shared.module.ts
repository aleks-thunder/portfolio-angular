import { NgModule } from '@angular/core';
import { TextComponent } from './ui-components/text/text.component';
import { FlexComponent } from './ui-components/flex/flex.component';

const SharedModules = [TextComponent, FlexComponent];

@NgModule({
  declarations: [SharedModules],
  exports: [SharedModules],
})
export class SharedModule {}
