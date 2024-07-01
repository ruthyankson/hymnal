import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: 'hymnal', pathMatch: 'full' },
  { path: 'hymnal',
    loadChildren: () => import('./app-hymnal/app-hymnal.module').then(m => m.AppHymnalModule),
    data: { title: 'App Hymnal' }
  }
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {
      scrollPositionRestoration: 'top',
      anchorScrolling: 'enabled',
      scrollOffset: [0, 100]
    }
  )
],
  exports: [RouterModule]
})
export class AppRoutingModule { }
