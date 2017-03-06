import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { HttpComponent } from './http.component';
import { YoutubeComponent  } from './youtube.component';
import { YoutubeService  } from './youtube.service';
import { KeyUpYoutubeComponent  } from './keyup.youtube.component';
import { ObservableYoutubeComponent, SearchResultComponent, SearchBox  } from './observable.youtube.component';


@NgModule({
  imports: [BrowserModule, HttpModule],
  declarations: [AppComponent, HttpComponent, YoutubeComponent, KeyUpYoutubeComponent, ObservableYoutubeComponent, SearchResultComponent, SearchBox,], 
  bootstrap: [AppComponent],
  providers: [YoutubeService]
})
export class AppModule { }