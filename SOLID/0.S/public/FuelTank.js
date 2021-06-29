"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FuelTank = void 0;
class FuelTank {
    constructor(fuel, FUEL_MILEAGE, MAXIMUM_FUEL_CAPACITY) {
        this._fuel = 0;
        this._fuel = fuel;
        this.MAXIMUM_FUEL_CAPACITY = MAXIMUM_FUEL_CAPACITY;
        this._FUEL_MILEAGE = FUEL_MILEAGE;
    }
    set fuel(value) {
        this._fuel = value;
    }
    get fuel() {
        return this._fuel;
    }
    addFuel(fuel) {
        this._fuel = Math.min(fuel + this._fuel, this.MAXIMUM_FUEL_CAPACITY);
    }
    get FUEL_MILEAGE() {
        return this._FUEL_MILEAGE;
    }
}
exports.FuelTank = FuelTank;
