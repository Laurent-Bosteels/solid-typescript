export class Cow {
    private _name;

    set name(value) {
        this._name = value;
    }

    get name() {
        return this._name;
    }

    get type() {
        return 'cow';
    }

    public makeSound() : string {
        return 'MOO';
}

}
