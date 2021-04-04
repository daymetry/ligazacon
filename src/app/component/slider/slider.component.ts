import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../service/news.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.sass']
})
export class SliderComponent implements OnInit {

  public sliders: any;
  public responsiveOptions: any;

  // tslint:disable-next-line:variable-name
  constructor(private m_NewsService: NewsService) {
    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 3
      },
      {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 2
      },
      {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1
      }
    ];
  }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.m_NewsService.getList().then(data => {
      this.sliders = data.slice(0, 5);
    });
  }
}
