import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { SearchComponent } from './components/search/search.component';
import { SongComponent } from './components/song/song.component';
import { ModalComponent } from './components/modal/modal.component';
import { RouterLink } from '@angular/router';

@NgModule({
  declarations: [
    HeaderComponent,
    SearchComponent,
    SongComponent,
    ModalComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterLink
  ],
  exports: [
    CommonModule,
    FormsModule,
    RouterLink,
    HeaderComponent,
    SearchComponent,
    SongComponent
  ],
  providers:[]
})
export class SharedModule { }
