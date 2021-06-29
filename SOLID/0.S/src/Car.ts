import { MusicPlayer } from "./MusicPlayer";
import { Engine } from "./Engine";
import { FuelTank } from "./FuelTank";

export class Car {
    private _musicPlayer: MusicPlayer;
    private _engine: Engine;
    private _fuelTank: FuelTank;

    private _miles: number = 0;

    constructor(musicPlayer: MusicPlayer, engine: Engine, fuelTank: FuelTank) {

        this._musicPlayer = musicPlayer;
        this._engine = engine;
        this._fuelTank = fuelTank;
    }

    get miles(): number {
        return this._miles;
    }

    get musicPlayer(): MusicPlayer {
        return this._musicPlayer;
    }

    get engine(): Engine {
        return this._engine;
    }

    get fuelTank(): FuelTank {
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