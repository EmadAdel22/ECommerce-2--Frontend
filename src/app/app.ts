import { Component, signal, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProduct } from './shared/Models/Product';
import { Ipagination } from './shared/Models/pagnation';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrls: ['./app.scss']
})
export class App implements OnInit {




  constructor() {}


  ngOnInit(): void {
  }

  title = 'Client';

}