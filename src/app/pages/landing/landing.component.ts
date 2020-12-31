import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  title = {
    
  }
  breakpoint: number = 3;
  pages= [
    {url: "/who-we-are", title: 'who we are', subtitle: 'purpost of this website'},
    {url: "/buy-from-us", title: 'buy from us', subtitle: 'support us'},
    {url: "/what-we-did", title: 'what we did', subtitle: 'things we have done'},
  ];

  onResize() {
    if (window.innerWidth<=700) {
      this.breakpoint=1;
    }
    else if (window.innerWidth<=1000) {
      this.breakpoint=2;
    }
    else {
      this.breakpoint=3;
    }
  }


  constructor() { }

  ngOnInit():void {
    this.onResize();
  }

}
