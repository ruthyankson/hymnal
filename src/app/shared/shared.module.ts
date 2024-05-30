import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { SearchComponent } from './components/search/search.component';
import { SongComponent } from './components/song/song.component';
import { ModalComponent } from './components/modal/modal.component';

@NgModule({
  declarations: [
    HeaderComponent,
    SearchComponent,
    SongComponent,
    ModalComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    HeaderComponent,
    SearchComponent,
    SongComponent
  ],
  providers:[]
})
export class SharedModule { }
