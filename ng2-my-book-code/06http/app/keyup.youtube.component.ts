import { Component, Injectable, OnInit, ElementRef, EventEmitter,  } from '@angular/core';
import { Http, Response } from '@angular/http';
import { YoutubeService, SearchResult } from './youtube.service';
import { Subject }           from 'rxjs/Subject';
import { Observable }        from 'rxjs/Observable';
import 'rxjs/Rx';

@Component({
  selector: 'keyup-youtube',
  template: `
  <input #query placeholder="query" autofocus (keyup)="onClick(query.value)"> 

<ul>
  <li *ngFor="let result of results |async">
    <div>Id:{{result.id}}</div>
    <div>Title:{{result.title}}</div>
    <div>Desc:{{result.description}}</div>
    <div>URL:{{result.url}}</div>
    <div><img src="{{result.url}}"></div>
  </li>
</ul>

  `,
})
export class KeyUpYoutubeComponent implements OnInit {
  constructor(public yt: YoutubeService, public el: ElementRef) { }
  results: Observable<SearchResult[]>;
  private searchTerms = new Subject<string>();

  onClick(query: string){
     this.searchTerms.next(query);
  }

  search(query: string) {

  }

  ngOnInit(){
    this.results = this.searchTerms
      .debounceTime(300)        // wait 300ms after each keystroke before considering the term
      .distinctUntilChanged()   // ignore if next search term is same as previous
      .switchMap(term => term   // switch to new observable each time the term changes
        // return the http search observable
        ?  this.yt.search(term)
        // or the observable of empty heroes if there was no search term
        : Observable.of<SearchResult[]>([]))
      .catch(error => {
        // TODO: add real error handling
        console.log(error);
        return Observable.of<SearchResult[]>([]);
      }); 
  }


}
