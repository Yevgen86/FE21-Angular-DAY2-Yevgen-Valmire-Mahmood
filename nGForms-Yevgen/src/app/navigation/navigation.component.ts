import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  // Here we create a property for counter of clicks
  clickCounter:number = 0;

  countDonationOnClick() {
    this.clickCounter+10;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
