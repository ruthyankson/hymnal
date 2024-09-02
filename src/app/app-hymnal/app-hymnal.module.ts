import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { AppHymnalRoutingModule } from './app-hymnal-routing.module';
import { AppHymnalComponent } from './app-hymnal.component';
import { HomeComponent } from './home/home.component';
import { HymnsComponent } from './hymns/hymns.component';
import { HymnComponent } from './hymn/hymn.component';
import { SongComponent } from './song/song.component';
import { CarouselComponent } from '../standalone-components/carousel/carousel.component';
import { HymnVideoComponent } from './hymn-video/hymn-video.component';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { MoreSectionComponent } from './more-section/more-section.component';



@NgModule({
  declarations: [
    AppHymnalComponent,
    HomeComponent,
    HymnsComponent,
    HymnComponent,
    SongComponent,
    HymnVideoComponent,
    MoreSectionComponent
  ],
  imports: [
    AppHymnalRoutingModule,
    SharedModule,
    CarouselComponent,
    YouTubePlayerModule
  ]
})

export class AppHymnalModule { }
