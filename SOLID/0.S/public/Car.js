"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Car = void 0;
class Car {
    constructor(musicPlayer, engine, fuelTank) {
        this._miles = 0;
        this._musicPlayer = musicPlayer;
        this._engine = engine;
        this._fuelTank = fuelTank;
    }
    get miles() {
        return this._miles;
    }
    get musicPlayer() {
        return this._musicPlayer;
    }
    get engine() {
        return this._engine;
    }
    get fuelTank() {
        return this._fuelTank;
    }
    drive() {
        if (this._engine.engineStatus === false || this.fuelTank.fuel <= 0) {
            return;
        }
        this.fuelTank.fuel -= 1;
        this._miles += this.fuelTank.FUEL_MILEAGE;
    }
}
exports.Car = Car;
