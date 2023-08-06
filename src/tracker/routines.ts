import Routine from './Routine';
import Workout from './Workout';

// Plans for built out routines to inherit from abstract Routine

const workouts: Workout[] = [
  new Workout('pushups', 50),
  new Workout('pullups', 10),
  new Workout('swing', 75),
  new Workout('squats', 15),
  new Workout('carries', 1),
];

export class FullBodyRoutine extends Routine {
  constructor() {
    super();
    for (const workout of workouts) this.addWorkout(workout.name, workout.reps);
  }
}
