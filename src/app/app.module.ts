import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule, InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { CarouselComponent } from './standalone-components/carousel/carousel.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { InMemoryDataService } from './in-memory-data.service';
import { AppHymnalModule } from './app-hymnal/app-hymnal.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'



@NgModule({
  declarations: [
        AppComponent,
        PageNotFoundComponent
  ],
  bootstrap: [AppComponent],
  imports: [
      BrowserModule,
      BrowserAnimationsModule,
      AppRoutingModule,
      AppHymnalModule,
      SharedModule,
      CarouselComponent,
      NgbModule,
      HttpClientModule,
      // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
      // and returns simulated server responses.
      // Remove it when a real server is ready to receive requests.
      HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { dataEncapsulation: false })
      // InMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  providers: []
})

export class AppModule {}
