import Routine from './oop/Routine';
import Workout from './oop/Workout';
import Tracker from './oop/Tracker';

const workouts: Workout[] = [
  new Workout('pushups', 50),
  new Workout('pullups', 10),
  new Workout('swing', 75),
  new Workout('squats', 15),
  new Workout('carries', 1),
];

export function createDefaultRoutine() {
  const daily = new Routine();
  for (const workout of workouts) daily.addWorkout(workout.name, workout.reps);
  return daily;
}

// tracker.routine
// // tracker.complete(10, 'pushups')
// tracker.displayWorkouts()
// daily.workouts.complete(10,'push ups')
