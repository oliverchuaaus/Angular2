import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { awsURL } from '../constants';

@Injectable()
export class NewsService {
  private url: string = awsURL;

  constructor(public http: Http, ) { }

  public getNewsDummy(): Observable<News[]> {
    //dummy from file
    return this.http.get("../assets/json/news.json")
      .map((res: any) => res.json());
  }

  public getNews(): Observable<Array<News>> {
    return this.http.get(this.url + "news").map((res: any) => res.json());
  }
  
}

export class News {
  date: string;
  title: string;
  author: string;
  shortDescription: string;
  fullArticle: string;
  expand: boolean = false;
}