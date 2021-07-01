"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NoDiscount = void 0;
class NoDiscount {
    constructor() {
        this._value = 0;
    }
    apply(price) {
        return price;
    }
    showCalculation(price) {
        return "No discount";
    }
}
exports.NoDiscount = NoDiscount;
