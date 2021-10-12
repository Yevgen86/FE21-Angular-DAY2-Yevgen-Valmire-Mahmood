import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  // Creating an Array of Objects which contain Cars
  cars = [
    {
      model: "Aston Martin",
      year: 2021,
      power: 560,
      price: 130000
    },
    {
      model: "Bentley GT",
      year: 2020,
      power: 600,
      price: 120000
    },
    {
      model: "Lada",
      year: 1981,
      power: 80,
      price: 4000
    },
    {
      model: "Maserati",
      year: 2021,
      power: 560,
      price: 130000
    }
  ];

   // The FormGroup is nothing but the collection or a group of FormControls.
   newCarInfo = new FormGroup({
    model: new FormControl('', [Validators.required, Validators.minLength(2)]),
    year: new FormControl('', Validators.required),
    power: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required)
  });

  constructor() { }
  
  ngOnInit(): void {

  }

  onSubmit(){
    // to take the values from the form you can select the property that have the formGroup and then just add .value
      if(this.newCarInfo.valid) {
        this.cars.push(this.newCarInfo.value);
        this.newCarInfo.reset()
      }
    } 
}
