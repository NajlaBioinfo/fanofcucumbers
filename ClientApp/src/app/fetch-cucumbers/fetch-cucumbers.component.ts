import { Component, Inject,ViewChild, HostListener, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {HttpClient} from '@angular/common/http';
//import { Http } from '@angular/http';  

/**
 * @title Data table with sorting, pagination, and filtering.
 */


export interface Vegetables {
  sampleplan: string;
  datesampled: string;
  systemid: string;
}


@Component({
  selector: 'app-fetch-cucumbers',
  templateUrl: './fetch-cucumbers.component.html',
  styleUrls: ['./fetch-cucumbers.component.scss']
})

export class FetchCucumbersComponent implements OnInit {
  opened = true;
  public displayedColumns = ['sampleplan', 'datesampled', 'systemid'];
  public dataSource = new MatTableDataSource<Vegetables>();
  //public dataSource: MatTableDataSource<Vegetables>;

  //constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string){
  //  http.get<Vegetables[]>(baseUrl + 'vegetables').subscribe(result => {
  //  this.dataSource.data = result as Vegetables[];
  //constructor(http: Http, @Inject('BASE_URL') baseUrl: string) {  
  //   http.get(baseUrl + 'vegetables').subscribe(result => {  
  //    this.dataSource.data = result.json() as Vegetables[];  
  //  }, error => console.error(error));
  //}

  public row: Vegetables[];

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
      http.get<Vegetables[]>(baseUrl + 'vegetables').subscribe(result => {
        this.dataSource.data = result;
        this.row = result;
      }, error => console.error(error));
  }

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild('sidenav', {static: true }) sidenav: MatSidenav;


  ngOnInit() {  
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    console.log(window.innerWidth)

    if (window.innerWidth < 768) {
      this.sidenav.fixedTopGap = 55;
      this.opened = false;

      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    } else {
      this.sidenav.fixedTopGap = 55;
      this.opened = true;

      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }
  }
  
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
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
