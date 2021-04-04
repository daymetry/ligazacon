import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { NewsService } from '../../service/news.service';
import { News } from '../../interface/news';

@Component({
  selector: 'app-news-record',
  templateUrl: './news-record.component.html',
  styleUrls: ['./news-record.component.sass']
})
export class NewsRecordComponent implements OnInit {

  public item: News;
  private sub: any;

  constructor(
    // tslint:disable-next-line:variable-name
    private m_rote: ActivatedRoute,
    // tslint:disable-next-line:variable-name
    private m_NewsService: NewsService
  ) {
      this.item = {};
  }

  ngOnInit(): void {
    this.sub = this.m_rote.params.subscribe(params => {
      this.m_NewsService.getRecord(params.id).then((item) => {
        this.item = item;
      });
    });
  }
}
