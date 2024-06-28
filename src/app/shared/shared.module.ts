import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { SearchComponent } from './components/search/search.component';
import { ModalComponent } from './components/modal/modal.component';
import { HymnDetailComponent } from './components/hymn-detail/hymn-detail.component';
import { HymnService } from './services/hymn.service';
import { MessageService } from './services/message.service';
import { CapitalizePipe } from './pipes/capitalize.pipe';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@NgModule({
  declarations: [
    HeaderComponent,
    SearchComponent,
    HymnDetailComponent,
    ModalComponent,
    CapitalizePipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
  ],
  exports: [
    CommonModule,
    FormsModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    HeaderComponent,
    SearchComponent,
    HymnDetailComponent,
    CapitalizePipe
  ],
  providers:[
    HymnService,
    MessageService
  ]
})
export class SharedModule { }
