import { NgModule } from '@angular/core';
import { AppHymnalComponent } from './app-hymnal.component';
import { RouterModule, Routes } from '@angular/router';
import { HymnsComponent } from './hymns/hymns.component';
import { HymnComponent } from './hymn/hymn.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: AppHymnalComponent,
    children: [
      { path: '', component: HomeComponent, data: { title: 'Hymnal' } },
      { path: 'hymns', component: HymnsComponent, data: { title: 'Hymns' } },
      { path: 'hymn/:hymn_number', component: HymnComponent, data: { title: 'Hymn' } }
    ]
   }
]

// , animation: 'HymnsPage'
// , animation: 'HomePage'

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AppHymnalRoutingModule { }
