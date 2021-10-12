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

   //The FormGroup is nothing but the collection or a group of FormControls.
   newCarInfo = new FormGroup({
    modelName: new FormControl('', [Validators.required, Validators.minLength(2)]),
    yearOfProduction: new FormControl('', Validators.required),
    carPower: new FormControl('', Validators.required),
    carPrice:new FormControl('', Validators.required)
  });

  
  
  constructor() { }
  
  ngOnInit(): void {

  }


  onSubmit(){
    // to take the values from the form you can select the property that have the formGroup and then just add .value
    /* if(this.newCarInfo.valid) {
        var a = this.newCarInfo.value;
        a.push(this.cars);
      } else {
        alert("Some input is corrupt");
      }*/

      console.log(this.newCarInfo.value);
    } 
}
