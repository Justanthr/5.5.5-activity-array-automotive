//this includes the vehicle class as a module
const VehicleModule = require("./vehicle")

//My code 
class Car extends VehicleModule {
    constructor(make, model, year, color, milage){
        super(make, model, year, color, milage)
    this.maxPassangers = 5
    this.passanger = 0
    this.numberOfWheels = 4
    this.maxSpeed = 160
    this.fuel = 10
    this.scheduleService = false
    }
    loadPassanger(num){
        if (num + this.passanger === this.maxPassangers){
            console.log(this.model + ' ' + this.make + ' is full')
        }
        if (num + this.passanger < this.maxPassangers){
            console.log(this.make + ' ' + this.model + ' has room')
        }
    }
    start(){
        if (this.fuel < 0){
            start === true
        }
        if (this.fuel === 0){
            start === false
        }
    }
    scheduleService(milage){
        milage = this.milage
        if (this.milage >= 30000){
            timeForMaintenance === true
        }
        if (this.milage < 30000){
            timeForMaintenance === false
        }
    }
}

//this shows how to call from this module...
let v = new VehicleModule.Vehicle("Mecury", "Sedan", "1965", "color", "mileage");
console.log(v.make)