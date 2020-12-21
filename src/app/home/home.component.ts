import { Component, OnInit } from '@angular/core';
import { products } from '../products';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	products = products;

  constructor() { }

  ngOnInit(): void {
  }

}
