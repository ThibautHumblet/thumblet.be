import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { IndexComponent } from './index/index.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { ContactComponent } from './contact/contact.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MglTimelineModule } from 'angular-mgl-timeline';
import { FormsModule }   from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IndexComponent,
    PortfolioComponent,
    AboutmeComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MglTimelineModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
