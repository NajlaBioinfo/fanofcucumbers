import { Component, Inject, ViewChild, HostListener, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { HttpClient } from '@angular/common/http';

/**
 * @title Data table with sorting, pagination, and filtering.
 */
@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.scss']
})

export class DashBoardComponent implements OnInit {
  opened = true;
  public forecasts: Cucumbers[];

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
      http.get<Cucumbers[]>(baseUrl + 'cucumbers').subscribe(result => {
        this.forecasts = result;
      }, error => console.error(error));
  }

  @ViewChild('sidenav', { static: true }) sidenav: MatSidenav;

  ngOnInit() {
    console.log(window.innerWidth)
    if (window.innerWidth < 768) {
      this.sidenav.fixedTopGap = 55;
      this.opened = false;

    } else {
      this.sidenav.fixedTopGap = 55;
      this.opened = true;
    }
  }


  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if (event.target.innerWidth < 768) {
      this.sidenav.fixedTopGap = 55;
      this.opened = false;
    } else {
      this.sidenav.fixedTopGap = 55
      this.opened = true;
    }
  }

  isBiggerScreen() {
    const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    if (width < 768) {
      return true;
    } else {
      return false;
    }
  }

}

export interface Cucumbers {
  date: string;
  temperatureC: number;
  temperatureF: number;
  summary: string;
}