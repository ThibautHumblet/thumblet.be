import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { ContactComponent } from './contact/contact.component';
import { CurrentlyComponent } from './currently/currently.component';
import { BakermeComponent } from './bakerme/bakerme.component';
import { KazouapiComponent } from './kazouapi/kazouapi.component';
import { HapComponent } from './hap/hap.component';
import { MonogamedinoComponent } from './monogamedino/monogamedino.component';
import { UnityzombieComponent } from './unityzombie/unityzombie.component';


const routes: Routes = [
  {
    path: 'index',
    component: IndexComponent
  },
  {
    path: '',
    redirectTo: 'index',
    pathMatch: 'full'
  },
  {
    path: 'portfolio',
    component: PortfolioComponent
  },
  {
    path: 'aboutme',
    component: AboutmeComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'currently',
    component: CurrentlyComponent
  },
  {
    path: 'bakerme',
    component: BakermeComponent
  },
  {
    path: 'kazouapi',
    component: KazouapiComponent
  },
  {
    path: 'hap',
    component: HapComponent
  },
  {
    path: 'monogamedino',
    component: MonogamedinoComponent
  },
  {
    path: 'unityzombie',
    component: UnityzombieComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
