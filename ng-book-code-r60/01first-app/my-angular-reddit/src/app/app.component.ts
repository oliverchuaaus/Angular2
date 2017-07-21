import { Component } from '@angular/core';
import { Article } from './article/article.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  articles:Article[]=[];

  addArticle(title:HTMLInputElement, link:HTMLInputElement):boolean{
    console.log(`Adding title: ${title.value}`);
    this.articles.push(new Article(title.value, link.value, 0));
    return false;
  }

  sortedArticles(){
    return this.articles.sort((a:Article, b:Article) => {
      return b.votes - a.votes;
    });
  }
}
