import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule,RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor() { }

  URLPost: boolean;
  URLNew: boolean;


  ngOnInit() {
    this.URLPost=true;
    this.URLNew=false;
  }
}
