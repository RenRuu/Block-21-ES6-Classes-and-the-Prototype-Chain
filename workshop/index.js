//created step1

// setting the car elements
function Car(make, model, year){ // step 2
    this.make = make;
    this.model = model;
    this.year = year;
}

//setting the getDescription for the Car types / step 3
Car.prototype.getDescription = function() {
return "This car is a " + `${this.year}` + ' ' + `${this.make}` + ' ' + `${this.model}` + " "
}

//setting the electricCar subclass step 4
class ElectricCar extends Car {
constructor(make, model, year, range) {
super(make, model, year, range);
this.range = range;
}

// step 5
getDescription() {
return super.getDescription() +  " Travel up to " + `${this.range}` + " miles on a single charge. "
}
}

// create an instance per step 6
const firstElectricCar = new ElectricCar("Tesla ", "Model S", 2019, 300);
console.log(firstElectricCar.getDescription());
