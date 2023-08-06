import Routine from './Routine';

export default class Tracker {
  public get routine(): Routine {
    return this._routine;
  }
  public set routine(value: Routine) {
    this._routine = value;
  }

  constructor(private _routine: Routine) {}

  completeReps(reps: number, workout: string):void {
    this.routine.workouts[workout].reps -= reps;
  }

  addReps(amount: number, workout: string):void {
    this.routine.workouts[workout].reps += amount;
  }

  finishWorkOut(workout: string):void {
    this.routine.workouts[workout].reps = 0;
  }

  displayWorkouts():void {
    const workouts = this.routine.workouts;
    for (const k in workouts) console.log(`${k}: ${workouts[k].reps} `);
  }
}
