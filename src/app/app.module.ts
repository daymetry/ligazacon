import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewsComponent } from './component/news/news.component';
import { SliderComponent } from './component/slider/slider.component';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { CarouselModule } from 'primeng/carousel';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VirtualScrollerModule } from 'primeng/virtualscroller';
import { HomeComponent } from './component/home/home.component';
import {AccordionModule} from 'primeng/accordion';
import { NewsRecordComponent } from './component/news-record/news-record.component';
import { CardModule } from 'primeng/card';

@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    SliderComponent,
    HomeComponent,
    NewsRecordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CarouselModule,
    DropdownModule,
    FormsModule,
    VirtualScrollerModule,
    ButtonModule,
    AccordionModule,
    CardModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
