import { Component, Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';


const URL = 'https://www.googleapis.com/youtube/v3/search';

@Injectable()
export class YoutubeService {

    constructor(public http: Http) { }

    search(query: string): Observable<SearchResult[]> {
        let params = [
            `q=${query}`,
            "key=AIzaSyDOfT_BO81aEZScosfTYMruJobmpjqNeEk",
            "part=snippet",
            "type=video",
            "maxResults=10"
        ].join('&');
        let url = URL + '?' + params;
        return this.http.get(url)
            .map((resp: Response) => {
                return resp.json().items.map((item) => {
                    return new SearchResult(item.id.videoId, item.snippet.title, item.snippet.description, item.snippet.thumbnails.high.url);
                });
            });
    }

    searchPromise(query: string): Promise<SearchResult[]> {
        let params = [
            `q=${query}`,
            "key=AIzaSyDOfT_BO81aEZScosfTYMruJobmpjqNeEk",
            "part=snippet",
            "type=video",
            "maxResults=10"
        ].join('&');
        let url = URL + '?' + params;
        return this.http.get(url).toPromise()
            .then((resp: Response) => {
                return resp.json().items.map((item) => {
                    return new SearchResult(item.id.videoId, item.snippet.title, item.snippet.description, item.snippet.thumbnails.high.url);
                });
            });   
    }
}

export class SearchResult {
    vidurl:string;
    constructor(public id: string, public title: string, public description: string, public url: string) { 
        this.vidurl = `https://www.youtube.com/watch?v=${this.id}`;
    }
}