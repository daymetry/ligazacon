import { Component, OnInit, OnDestroy } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})

export class AppComponent implements OnInit, OnDestroy {
  public title: string;

  constructor(private primengConfig: PrimeNGConfig) {
    this.title = 'ligazacon';
  }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.primengConfig.ripple = true;
  }

  // tslint:disable-next-line:typedef
  ngOnDestroy() {
  }
}
