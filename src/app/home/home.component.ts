import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  category:string = '';
  constructor() { }

  ngOnInit() {
  }
  showProduct(param){
    this.category=param;
  }

}
