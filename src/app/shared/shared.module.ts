import { NgModule } from '@angular/core';
import { TextComponent } from './ui-components/text/text.component';

const SharedModules = [TextComponent];

@NgModule({
  declarations: [SharedModules],
  exports: [SharedModules],
})
export class SharedModule {}
