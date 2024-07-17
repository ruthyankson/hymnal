import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  // { path: '', redirectTo: '', pathMatch: 'full' },
  { path: '',
    loadChildren: () => import('./app-hymnal/app-hymnal.module').then(m => m.AppHymnalModule),
    data: { title: 'Hymnal', animation: 'HymnalPage' }
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {
      scrollPositionRestoration: 'top',
      anchorScrolling: 'enabled', // For scrolling between chorus and stanza links on hymn page
      scrollOffset: [0, 110]
    }
  )
],
  exports: [RouterModule]
})
export class AppRoutingModule { }
