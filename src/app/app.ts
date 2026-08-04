import { Component, signal, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrls: ['./app.scss']
})
export class App implements OnInit {

  BaseUrl = 'https://localhost:7238/api/Categories/get-all';

  // Signal بدل any
  Category = signal<any[]>([]);

  constructor(private http: HttpClient) {}

  getCategories() {
    this.http.get<any[]>(this.BaseUrl).subscribe({
      next: (value) => {
        this.Category.set(value);
        console.log(value);
      }
    });
  }

  ngOnInit(): void {
    this.getCategories();
  }
}