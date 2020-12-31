import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  screensize: number;
  toggles: boolean=false;

  constructor() { }

  ngOnInit(): void {
   this.sizeChange();
  }
  sizeChange() {
    console.log('Width'+window.innerWidth);
    this.screensize=window.innerWidth;
  }
  toggle(){
    this.toggles=!this.toggles;
  }

}
