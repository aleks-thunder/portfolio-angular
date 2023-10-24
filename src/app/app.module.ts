import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { HeaderComponent } from '@pages/header/header.component';
import { AboutComponent } from '@pages/about/about.component';
import { TechStackComponent } from '@pages/tech-stack/tech-stack.component';
import { ContactComponent } from '@pages/contact/contact.component';
import { HttpClientModule } from '@angular/common/http';

import { EmailService } from '@services/email/email.service';

import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    TechStackComponent,
    ContactComponent,
  ],
  imports: [BrowserModule, HttpClientModule, SharedModule],
  providers: [EmailService],
  bootstrap: [AppComponent],
})
export class AppModule {}
