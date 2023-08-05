import Routine from './Routine';

export default class Tracker {
  public get routine(): Routine {
    return this._routine;
  }
  public set routine(value: Routine) {
    this._routine = value;
  }

  constructor(private _routine: Routine) {}

  completeReps(reps: number, workout: string) {
    this.routine.workouts[workout].reps -= reps;
  }

  addReps(amount: number, workout: string) {
    this.routine.workouts[workout].reps += amount;
  }

  finishWorkOut(workout: string) {
    this.routine.workouts[workout].reps = 0;
  }

  displayWorkouts() {
    const workouts = this.routine.workouts;
    const button = document.createElement('button')
    for (const k in workouts) console.log(`${k}: ${workouts[k].reps} `);
  }
}
