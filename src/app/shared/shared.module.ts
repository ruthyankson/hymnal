import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { SearchComponent } from './components/search/search.component';
import { ModalComponent } from './components/modal/modal.component';
import { HymnService } from './services/hymn.service';
import { MessageService } from './services/message.service';
import { CapitalizePipe } from './pipes/capitalize.pipe';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { PageHeadingComponent } from './components/page-heading/page-heading.component';

@NgModule({
  declarations: [
    HeaderComponent,
    SearchComponent,
    ModalComponent,
    FooterComponent,
    PageHeadingComponent,
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
    FooterComponent,
    PageHeadingComponent,
    CapitalizePipe
  ],
  providers:[
    HymnService,
    MessageService
  ]
})
export class SharedModule { }
