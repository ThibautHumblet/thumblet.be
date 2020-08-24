import { Component, OnInit } from '@angular/core';
import { async } from '@angular/core/testing';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  expandTitle() {
    var items:any = document.getElementsByClassName('titleAnimation');
    for (let i = 0; i < items.length; i++) {
        let element = items[i];
        element.style.display ="inline";
    }

    var items:any = document.getElementsByClassName('navbar-title');
    for (let i = 0; i < items.length; i++) {
      let element = items[i];
      element.style.margin = "0 0 0 0"
    }
  }

  shrinkTitle() {
    var items:any = document.getElementsByClassName('titleAnimation');
    for (let i = 0; i < items.length; i++) {
        let element = items[i];
        element.style.display ="none";
    }

    var items:any = document.getElementsByClassName('navbar-title');
    for (let i = 0; i < items.length; i++) {
      let element = items[i];
      element.style.margin = "0 4vw 0 0"
    }
  }
}
