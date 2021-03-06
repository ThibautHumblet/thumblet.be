import { BrowserModule, Title } from '@angular/platform-browser';
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
import { FormsModule } from '@angular/forms';
import { CurrentlyComponent } from './currently/currently.component';
import { BakermeComponent } from './bakerme/bakerme.component';
import { KazouapiComponent } from './kazouapi/kazouapi.component';
import { HapComponent } from './hap/hap.component';
import { MonogamedinoComponent } from './monogamedino/monogamedino.component';
import { UnityzombieComponent } from './unityzombie/unityzombie.component';
import { BurrowComponent } from './burrow/burrow.component';
import { KazousiteComponent } from './kazousite/kazousite.component';
import { KanariComponent } from './kanari/kanari.component';
import { MatchingAndSourcingComponent } from './matching-and-sourcing/matching-and-sourcing.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IndexComponent,
    PortfolioComponent,
    AboutmeComponent,
    ContactComponent,
    CurrentlyComponent,
    BakermeComponent,
    KazouapiComponent,
    HapComponent,
    MonogamedinoComponent,
    UnityzombieComponent,
    BurrowComponent,
    KazousiteComponent,
    KanariComponent,
    MatchingAndSourcingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MglTimelineModule,
    FormsModule
  ],
  providers: [Title],
  bootstrap: [AppComponent]
})
export class AppModule { }
