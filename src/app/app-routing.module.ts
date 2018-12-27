import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: 'filterSamp',
    loadChildren: 'src/app/filter-samp/filter-samp.module#FilterSampModule'
  },
  { path: 'modalSamp', loadChildren: 'src/app/modal-samp/modal-samp.module#ModalSampModule'},
  { path: 'mixinSamp', loadChildren: 'src/app/mixins/mixins.module#MixinsModule'},
  {path: 'htmlLoad', loadChildren: 'src/app/html-load/html-load.module#HtmlLoadModule'},
  { path: 'home', component: HomeComponent },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
