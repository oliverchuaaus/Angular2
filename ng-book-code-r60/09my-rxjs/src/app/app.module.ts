import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import { User } from './user/user.model';
import { Thread } from './thread/thread.model';
import { Message } from './message/message.model';
import { UserService } from './user/user.service';
import { AppComponent } from './app.component';
import { GithubComponent } from './github/github.component';
import { GitHubService } from './github/github.service';
@NgModule({
  declarations: [
    AppComponent,
    GithubComponent
  ],
  imports: [
    BrowserModule, HttpModule
  ],
  providers: [GitHubService],
  bootstrap: [AppComponent]
})
export class AppModule { }
