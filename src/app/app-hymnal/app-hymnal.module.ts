import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { AppHymnalRoutingModule } from './app-hymnal-routing.module';
import { AppHymnalComponent } from './app-hymnal.component';
import { HomeComponent } from './home/home.component';
import { HymnsComponent } from './hymns/hymns.component';
import { HymnComponent } from './hymn/hymn.component';
import { SongComponent } from './song/song.component';
import { CarouselComponent } from '../standalone-components/carousel/carousel.component';



@NgModule({
  declarations: [
    AppHymnalComponent,
    HomeComponent,
    HymnsComponent,
    HymnComponent,
    SongComponent
  ],
  imports: [
    AppHymnalRoutingModule,
    SharedModule,
    CarouselComponent
  ]
})

export class AppHymnalModule { }
