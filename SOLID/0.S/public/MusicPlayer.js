"use strict";
//class
Object.defineProperty(exports, "__esModule", { value: true });
exports.MusicPlayer = void 0;
class MusicPlayer {
    constructor(_musicLevel, _oldMusicLevel) {
        this._musicLevel = _musicLevel;
        this._oldMusicLevel = _oldMusicLevel;
    }
    //getters
    get musicLevel() {
        return this._musicLevel;
    }
    set musicLevel(value) {
        this._musicLevel = value;
        this._oldMusicLevel = value;
    }
    turnMusicOn() {
        this._musicLevel = this._oldMusicLevel;
    }
    turnMusicOff() {
        this._musicLevel = 0;
    }
}
exports.MusicPlayer = MusicPlayer;
