import { Component, OnInit, Inject } from '@angular/core';
import { async, inject } from '@angular/core/testing';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(@Inject(DOCUMENT) document) { 
    document.getElementById('navbar-check')
  }

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

  close() {
    (document.getElementById('navbar-check') as HTMLFormElement).checked = false;
  }
}
