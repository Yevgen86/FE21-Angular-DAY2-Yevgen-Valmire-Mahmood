import { Component } from '@angular/core';

@Component({
  selector: 'app-car-form',
  templateUrl: './car-form.component.html',
  styleUrls: ['./car-form.component.scss']
})

export class CarFormComponent {

  fuel = ['Benzin', 'Diesel', 'Elektro', 'Bio'];

  cars = [{
    modelName: "Maserati",
    year: 2020,
    power: 123,
    fuel: "Diesel",
    price: 32344
  }];

  submitted = false;

  onSubmit(formObj:any) { 
    
    this.submitted = true;
    this.cars.push(formObj.value)
    console.table(this.cars);
  
  }

  pushToArrayCars(obj:any) {
    this.cars.push(obj);
  }

}
