import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './page-components/header/header.component';
import { AboutComponent } from './page-components/about/about.component';
import { TechStackComponent } from './page-components/tech-stack/tech-stack.component';
import { ContactComponent } from './page-components/contact/contact.component';
import { EmailService } from './services/email.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    TechStackComponent,
    ContactComponent,
  ],
  imports: [BrowserModule],
  providers: [EmailService],
  bootstrap: [AppComponent],
})
export class AppModule {}
