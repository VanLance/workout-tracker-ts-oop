export default class Workout {
  public get reps(): number {
    return this._reps;
  }
  public set reps(value: number) {
    if (value >= 0) this._reps = value;
    else this._reps = 0;
  }
  public get name() {
    return this._name;
  }
  public set name(value) {
    this._name = value;
  }
  constructor(private _name: string, private _reps: number) {}
}
