import { Component, OnInit, Input, HostBinding } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  @HostBinding('attr.class') cssClass = 'rowrowrowyourboat';

  @Input() article;
  constructor() { }

  ngOnInit() {
  }

  voteUp(){
    this.article.voteUp();
    return false;
  }
  voteDown(){
    this.article.voteDown();
    return false;
  }
}
