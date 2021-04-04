import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../service/news.service';
import { ActivatedRoute } from '@angular/router';
import { LazyLoadEvent, SelectItem } from 'primeng/api';
import { PrimeNGConfig } from 'primeng/api';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.sass']
})
export class NewsComponent implements OnInit {
  items: any;
  virtualProducts: any;
  sortOptions: any;
  public newsTitle: any;
  public products: any;
  public profileForm: FormGroup;

  constructor(
    // tslint:disable-next-line:variable-name
    private m_NewsService: NewsService,
    private fb: FormBuilder
  ) {
    this.newsTitle = 'Новини';
    this.products = [];
    this.profileForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  // tslint:disable-next-line:typedef
  showDesc(id: any) {
    const link = document.getElementById(id);
    // @ts-ignore
    if (link.style.display === 'flex') {
      // @ts-ignore
      link.style.display = 'none';
    } else {
      // @ts-ignore
      link.style.display = 'flex';
    }
  }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.m_NewsService.getList()
      .then((data) => {
        if (this.items && this.items.tags && this.items.tags[0]) {
          this.items.tag = this.items.tags[0];
        }
        this.items = data;
    });
  }

  // tslint:disable-next-line:typedef
  onSubmit() {
    this.profileForm.value.ID = this.m_NewsService.generateId();
    this.profileForm.value.virtual = true;
    this.items = [this.profileForm.value, ...this.items];
    this.profileForm.reset();
  }
}
