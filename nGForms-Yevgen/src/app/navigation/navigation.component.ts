import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  // Here we create a property for countDonationOnClick method
  clickCounter:number = 0;
  donationAmount:number = 0;
  vipMessage:string = "";

  countDonationOnClick() {
    
    this.clickCounter += 10;
    this.donationAmount = this.clickCounter*10;

    if(this.donationAmount >= 200) {
      this.vipMessage = "***|_ Congratulation! Now you have status of VIP! _|***";
    } 
  }

  constructor() { }

  ngOnInit(): void {
  }
}
