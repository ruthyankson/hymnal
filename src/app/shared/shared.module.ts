import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { SearchComponent } from './components/search/search.component';


@NgModule({
  declarations: [
    HeaderComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    CommonModule,
    FormsModule,
    HeaderComponent,
    SearchComponent
  ],
  providers:[]
})
export class SharedModule { }
