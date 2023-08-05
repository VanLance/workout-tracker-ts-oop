
export default class Workout {
  
  public get reps(): number {
    return this._reps;
  }
  public set reps(value: number) {
    this._reps = value;
  }
  public get name() {
    return this._name;
  }
  public set name(value) {
    this._name = value;
  }
  constructor(private _name:string, private _reps: number){}

}


