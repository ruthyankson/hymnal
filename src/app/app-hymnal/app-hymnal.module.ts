import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { AppHymnalRoutingModule } from './app-hymnal-routing.module';
import { HymnHomeComponent } from './hymn-home/hymn-home.component';
import { HymnsssComponent } from './hymnsss/hymnsss.component';
import { AppHymnalComponent } from './app-hymnal.component';
import { HomeComponent } from './home/home.component';
import { HymnsComponent } from './hymns/hymns.component';
import { HymnComponent } from './hymn/hymn.component';
import { SongComponent } from './song/song.component';



@NgModule({
  declarations: [
    AppHymnalComponent,
    HymnHomeComponent,
    HymnsssComponent,
    HomeComponent,
    HymnsComponent,
    HymnComponent,
    SongComponent
  ],
  imports: [
    AppHymnalRoutingModule,
    SharedModule
  ]
})

export class AppHymnalModule { }
