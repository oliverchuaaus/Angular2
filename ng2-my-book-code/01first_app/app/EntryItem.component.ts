import { Component } from '@angular/core';
import { Entry } from './Entry';

@Component({
  selector: 'entry-item',
  template: `
  <h1>Entry Item</h1>
  <div>Title: {{entry.title}} </div>  
  <div>Link: {{entry.link}}</div>
  <div>Votes: {{entry.votes}}</div>
  <button (click)="downVote(entry)">Down Vote</button>
  <button (click)="upVote(entry)">Up Vote</button>
  `,
  inputs: ['entry'],
})
export class EntryItemComponent { 
    upVote(entry:Entry) {
        entry.upVote();
    }

    downVote(entry:Entry) {
        entry.downVote();
    }
}