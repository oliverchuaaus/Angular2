import { Component, OnInit } from '@angular/core';
import { NewsService, News } from '../news/news.service';
@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  newsArticles: Array<News>;

  constructor(public newsService: NewsService) { }

  ngOnInit() {
    this.newsService.getNews().subscribe(
      newsArticles => {
        this.newsArticles = newsArticles;
      },
      err => { this.handleError(err) }
    )
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
