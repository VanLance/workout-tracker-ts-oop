import Workout from './Workout';

interface Workouts {
  [key: string]: Workout;
}

// Plans to make abstract -> children in routines file 
export default class Routine {
  private _workouts: Workouts = {};

  public get workouts(): Workouts {
    return this._workouts;
  }
  public set workouts(value: Workouts) {
    this._workouts = value;
  }

  constructor() {}

  addWorkout(workout: string, reps: number) {
    this.workouts[workout] = new Workout(workout, reps);
  }

  removeWorkout(workout: string): void {
    delete this.workouts[workout];
  }

  switchWorkout(
    oldWorkout: string,
    newWorkout: string,
    newWorkoutReps: number
  ) {
    this.removeWorkout(oldWorkout);
    this.addWorkout(newWorkout, newWorkoutReps);
  }

 
}

export {
  Workouts
}