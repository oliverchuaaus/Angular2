import { Component, Injectable, OnInit, ElementRef, EventEmitter } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { YoutubeService, SearchResult } from './youtube.service';

@Component({
  selector: 'youtube',
  template: `
  <input #query placeholder="query" autofocus>
  <button (click)="onClick(query.value)">Search</button>

<ul>
  <li *ngFor="let result of results">
    <div>Id:{{result.id}}</div>
    <div>Title:{{result.title}}</div>
    <div>Desc:{{result.description}}</div>
    <div>URL:{{result.url}}</div>
    <div><img src="{{result.url}}"></div>
  </li>
</ul>

  `,
})
export class YoutubeComponent {
  constructor(public yt: YoutubeService, public el: ElementRef) { }
  results: SearchResult[];

  onClick(query: string) {
    this.yt.searchPromise(query).then((searchResults: SearchResult[]) => {
      this.results = searchResults;
    });
  }
}
