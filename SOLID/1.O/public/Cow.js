"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cow = void 0;
class Cow {
    set name(value) {
        this._name = value;
    }
    get name() {
        return this._name;
    }
    get type() {
        return 'cow';
    }
    makeSound() {
        return 'MOO';
    }
}
exports.Cow = Cow;
