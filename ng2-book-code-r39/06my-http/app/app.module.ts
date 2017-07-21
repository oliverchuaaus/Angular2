import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { GetComponent } from './get.component';
import { SearchBoxComponent, YouTubeComponent, youTubeServiceInjectables, YouTubeService, SearchResultComponent, YouTubeSearchComponent } from './youtube.component';
import { HttpModule } from '@angular/http';


@NgModule({
  imports: [BrowserModule, HttpModule],
  declarations: [AppComponent, GetComponent, YouTubeComponent, SearchBoxComponent, SearchResultComponent, YouTubeSearchComponent],
  bootstrap: [AppComponent],
  providers: [youTubeServiceInjectables, YouTubeService]
})
export class AppModule { }