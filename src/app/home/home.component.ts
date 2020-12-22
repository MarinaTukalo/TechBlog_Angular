import { Component, OnInit } from '@angular/core';
import { topics } from '../topics';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	topics = topics;

  constructor() { }

  ngOnInit(): void {
  }

}
