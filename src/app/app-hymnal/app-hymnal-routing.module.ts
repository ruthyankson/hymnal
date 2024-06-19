import { NgModule } from '@angular/core';
import { AppHymnalComponent } from './app-hymnal.component';
import { RouterModule, Routes } from '@angular/router';
import { HymnHomeComponent } from './hymn-home/hymn-home.component';
import { HymnsssComponent } from './hymnsss/hymnsss.component';

const routes: Routes = [
  // {
  //   path: '', component:HomeComponent,
  //   children: [
  //     // { path: 'hymns', component:HymnsComponent, data: {title: 'Hymns' } },
  //     { path: 'hymns',
  //       loadChildren: () => import('./hymns/hymns.module').then(m => m.HymnsModule),
  //       data: { title: 'Hymns' }
  //     }
  //   ]
  // }
  { path: '', component: AppHymnalComponent,
    children: [
      { path: '', component: HymnHomeComponent, data: { title: 'App Hymnal' } },
      { path: 'hymnsss', component:HymnsssComponent, data: { title: 'Hymns' } }
      // { path: 'hymns', component: HymnsComponent,
      //   children: [
      //     { path: 'hymn/:id', component: HymnComponent, data: { title: 'Hymn' } }
      //   ]
      // }
    ]
   },
  // { path: 'app.hymnal', component: HomeComponent },
  // // { path: 'hymns', component: HymnsComponent, data: { title: 'Hymns' } },
  // { path: 'hymns',
  //   loadChildren: () => import('./hymns/hymns.module').then(m => m.HymnsModule),
  //   data: { title: 'Hymns' }
  // }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AppHymnalRoutingModule { }
