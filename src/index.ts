import Routine, { Workouts } from './oop/Routine';
import Workout from './oop/Workout';
import Tracker from './oop/Tracker';
import { createDefaultRoutine } from './default';

const workouts: Workout[] = [];
const routine = new Routine();
const defaultR = createDefaultRoutine();
const tracker = new Tracker(defaultR);
const main = document.getElementsByTagName('main')[0];

tracker.displayWorkouts()
const addForm = document.getElementById('add-workout-form') as HTMLFormElement;
const removeForm = document.getElementById(
  'remove-workout-form'
) as HTMLFormElement;

addForm.addEventListener('submit', (e) => {
  e.preventDefault();
  getFormData(addForm);
});
removeForm.addEventListener('submit', (e) => {
  e.preventDefault();
  getFormData(removeForm);
});

function getFormData(form: HTMLFormElement) {
  const formData = new FormData(form);
  console.log(formData);
  const workoutValue = formData.get(`add-workout`);
  const removeValue = formData.get(`remove-workout`);
  if (workoutValue) {
    const repsValue = parseInt(formData.get(`reps`)!.toString());
    tracker.routine.addWorkout(workoutValue!.toString(), repsValue);
  } else tracker.routine.removeWorkout(removeValue!.toString());
  displayWorkouts(tracker.routine.workouts);
}

displayWorkouts(defaultR.workouts);

function displayWorkouts(workouts: Workouts) {
  main.innerHTML = '';
  for (const workout of Object.values(workouts)) {
    const div = createWorkoutDiv(workout);
    main.appendChild(div);
  }
}

function createWorkoutDiv(workout: Workout): HTMLDivElement {
  const div = document.createElement('div');
  const p = document.createElement('p');
  updatePText(p, workout);
  div.append(p);
  for (const direction of ['-', '+']) {
    const boxContainer = createButtonFlex();
    boxContainer.append(document.createElement('br'));
    for (const label of [10, 5, 1]) {
      const repButton = createRepButtons(direction, label);
      repButton.addEventListener('click', () => {
        adjustReps(workout, parseInt(`${direction}${label}`), p);
      });
      boxContainer.appendChild(repButton);
      div.appendChild(boxContainer);
    }
  }
  return div;
}

function createRepButtons(
  direction: string,
  quantity: number = 1
): HTMLButtonElement {
  const repButton = document.createElement('button');
  repButton.innerText = direction === '+' ? `+${quantity}` : `-${quantity}`;
  return repButton;
}

function adjustReps(workout: Workout, reps: number, p: HTMLParagraphElement) {
  workout.reps += reps;
  updatePText(p, workout);
}

function updatePText(p: HTMLParagraphElement, workout: Workout) {
  p.innerText = `${workout.name} 
  reps: ${workout.reps}`;
}

function createButtonFlex(): HTMLDivElement {
  const boxDiv = document.createElement('div');
  boxDiv.className = 'box-container';
  boxDiv.style.display = 'flex';
  boxDiv.style.justifyContent = 'space-between';
  return boxDiv;
}

function createWorkoutElement() {}

// const addWorkoutInput = document.createElement('input')
// addWorkoutInput.id = 'add-workout'
// const repsInput = document.createElement('input')
// repsInput.id = 'add-reps'
// addForm.insertBefore(addWorkoutInput,addForm.firstChild)
// const removeWorkoutInput = document.createElement('input')
// removeWorkoutInput.id = 'remove-workout'
