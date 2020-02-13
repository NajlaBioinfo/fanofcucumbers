import { Component, Inject, ViewChild, HostListener, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { HttpClient } from '@angular/common/http';

/**
 * @title Data table with sorting, pagination, and filtering.
 */
@Component({
  selector: 'app-fetch-cucumbers',
  templateUrl: './fetch-cucumbers.component.html',
  styleUrls: ['./fetch-cucumbers.component.scss']
})

export class FetchCucumbersComponent implements OnInit {
  opened = true;

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