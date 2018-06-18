import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TopItemComponent } from './top-item.component';
import { ShopItem } from './top-item.component';
import { PageNotFoundComponent } from './page-not-found.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'topitem' },
  { path: 'topitem', component: TopItemComponent },
  { path: '**', pathMatch: 'full', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routableComponents = [
  TopItemComponent,
  PageNotFoundComponent
];

