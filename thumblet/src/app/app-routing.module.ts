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
import { BurrowComponent } from './burrow/burrow.component';
import { KazousiteComponent } from './kazousite/kazousite.component';
import { KanariComponent } from './kanari/kanari.component';
import { MatchingAndSourcingComponent } from './matching-and-sourcing/matching-and-sourcing.component';


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
    component: PortfolioComponent,
    data: {title : 'Thumblet.be - portfolio'}
  },
  {
    path: 'aboutme',
    component: AboutmeComponent,
    data: {title : 'Thumblet.be - about me'}
  },
  {
    path: 'contact',
    component: ContactComponent,
    data: {title : 'Thumblet.be - contact'}
  },
  {
    path: 'matching',
    component: MatchingAndSourcingComponent,
    data: {title : 'Thumblet.be - matching'}
  },
  {
    path: 'kanari',
    component: KanariComponent,
    data: {title : 'Thumblet.be - kanari'}
  },
  {
    path: 'currently',
    component: CurrentlyComponent,
    data: {title : 'Thumblet.be - currently'}
  },
  {
    path: 'bakerme',
    component: BakermeComponent,
    data: {title : 'Thumblet.be - bakerme'}
  },
  {
    path: 'kazouapi',
    component: KazouapiComponent,
    data: {title : 'Thumblet.be - kazou api'}
  },
  {
    path: 'hap',
    component: HapComponent,
    data: {title : 'Thumblet.be - hap'}
  },
  {
    path: 'monogamedino',
    component: MonogamedinoComponent,
    data: {title : 'Thumblet.be - monogame'}
  },
  {
    path: 'unityzombie',
    component: UnityzombieComponent,
    data: {title : 'Thumblet.be - unity'}
  },
  {
    path: 'burrow',
    component: BurrowComponent,
    data: {title : 'Thumblet.be - burrow'}
  },
  {
    path: 'kazousite',
    component: KazousiteComponent,
    data: {title : 'Thumblet.be - kazou site'}
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
