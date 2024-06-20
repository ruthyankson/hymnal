import { NgModule } from '@angular/core';
import { AppHymnalComponent } from './app-hymnal.component';
import { RouterModule, Routes } from '@angular/router';
import { HymnsComponent } from './hymns/hymns.component';
import { HymnComponent } from './hymn/hymn.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: AppHymnalComponent,
    children: [
      { path: '', component: HomeComponent, data: { title: 'App Hymnal' } },
      { path: 'hymns', component: HymnsComponent, data: { title: 'Hymns' } },
      { path: 'hymn/:hymn_number', component: HymnComponent, data: { title: 'Hymns' } }
      // {
      //   path: "old-user-page",
      //   redirectTo: ({ queryParams }) => {
      //     const userIdParam = queryParams['userId'];
      //     if (userIdParam !== undefined) {
      //       return `/user/${userIdParam}`;
      //     } else {
      //       errorHandler.handleError(new Error('Attempted navigation to user page without user ID.'));
      //       return `/not-found`;
      //     }
      //   },
      // },
    ]
   }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AppHymnalRoutingModule { }
