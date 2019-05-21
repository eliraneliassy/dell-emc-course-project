import { MatSort } from '@angular/material/sort';
import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];



@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit, AfterViewInit {
  
  dataSource: MatTableDataSource<PeriodicElement>;
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild('input') input: ElementRef;
  constructor() { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource(ELEMENT_DATA);
    this.dataSource.sort = this.sort;
  }

  addRow() {
    const row = { position: 11, name: 'Carmel', weight: 15.1797, symbol: 'Cl' };
    this.dataSource = new MatTableDataSource([...ELEMENT_DATA, row]);
    this.dataSource.sort = this.sort;
  }

  sortData(event) {
    console.log(event);
  }

  filter(term: string) {
    this.dataSource.filter = term.trim().toLocaleLowerCase();
  }

  ngAfterViewInit(): void {
    console.log(this.input);
  }

}
