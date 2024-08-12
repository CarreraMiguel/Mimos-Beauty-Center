import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { KnowmoreComponent } from './knowmore/knowmore.component';
import { PedicureComponent } from './pedicure/pedicure.component';
import { ManicureComponent } from './manicure/manicure.component';
import { EyelashComponent } from './eyelash/eyelash.component';
import { FacialComponent } from './facial/facial.component';
import { DepilacionComponent } from './depilacion/depilacion.component';
import { PresoterapyComponent } from './presoterapy/presoterapy.component';
import { MaderoterapyComponent } from './maderoterapy/maderoterapy.component';
import { LegalComponent } from './legal/legal.component';
import { PoliticaComponent } from './politica/politica.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'contacto', component: ContactComponent },
  { path: 'nosotros', component: KnowmoreComponent },
  { path: 'manicuras', component: ManicureComponent },
  { path: 'pedicuras', component: PedicureComponent },
  { path: 'depilacion', component: DepilacionComponent },
  { path: 'tratamientos', component: FacialComponent },
  { path: 'pestañas', component: EyelashComponent },
  { path: 'presoterapia', component: PresoterapyComponent },
  { path: 'maderoterapia', component: MaderoterapyComponent },
  { path: 'avisolegal', component: LegalComponent },
  { path: 'politicaprivacidad', component: PoliticaComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
