import Routine, { Workouts } from './tracker/Routine';
import Workout from './tracker/Workout';
import Tracker from './tracker/Tracker';
import { createDefaultRoutine } from './default';

class WorkoutApp {
  private addForm: HTMLFormElement;
  private removeForm: HTMLFormElement;
  private main: HTMLElement;
  private tracker: Tracker;

  constructor() {
    this.addForm = document.getElementById(
      'add-workout-form'
    ) as HTMLFormElement;
    this.removeForm = document.getElementById(
      'remove-workout-form'
    ) as HTMLFormElement;
    this.main = document.getElementsByTagName('main')[0];

    this.tracker = new Tracker(createDefaultRoutine());

    this.tracker.displayWorkouts();
    this.addForm.addEventListener('submit', this.getFormData.bind(this));
    this.removeForm.addEventListener('submit', this.getFormData.bind(this));
    this.displayWorkouts(createDefaultRoutine().workouts);
  }

  private getFormData(e: Event) {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const workoutValue = formData.get(`add-workout`);
    const removeValue = formData.get(`remove-workout`);
    if (workoutValue) {
      const repsValue = parseInt(formData.get(`reps`)!.toString());
      this.tracker.routine.addWorkout(workoutValue!.toString(), repsValue);
    } else {
      this.tracker.routine.removeWorkout(removeValue!.toString());
    }
    this.displayWorkouts(this.tracker.routine.workouts);
    form.reset();
  }

  private displayWorkouts(workouts: Workouts) {
    this.main.innerHTML = '';
    for (const workout of Object.values(workouts)) {
      const div = this.createWorkoutDiv(workout);
      this.main.appendChild(div);
    }
  }

  private createWorkoutDiv(workout: Workout): HTMLDivElement {
    const div = document.createElement('div');
    const p = document.createElement('p');
    this.updatePText(p, workout);
    div.append(p);
    const boxContainer = this.addButtonstoContainer(workout, p);
    div.appendChild(boxContainer);

    return div;
  }

  addButtonstoContainer(
    workout: Workout,
    p: HTMLParagraphElement
  ): HTMLDivElement {
    const boxContainer = document.createElement('div');
    for (const direction of ['-', '+']) {
      const boxRow = this.createButtonFlex();
      for (const label of [10, 5, 1]) {
        const repButton = this.createRepButtons(direction, label);
        repButton.addEventListener('click', () => {
          this.adjustReps(workout, parseInt(`${direction}${label}`), p);
        });
        boxRow.appendChild(repButton);
      }
      boxContainer.appendChild(boxRow);
    }
    return boxContainer;
  }

  private createRepButtons(
    direction: string,
    quantity: number = 1
  ): HTMLButtonElement {
    const repButton = document.createElement('button');
    repButton.className = `rep-button rep${direction}`;
    repButton.innerText = direction === '+' ? `+${quantity}` : `-${quantity}`;
    return repButton;
  }

  private adjustReps(workout: Workout, reps: number, p: HTMLParagraphElement) {
    workout.reps += reps;
    this.updatePText(p, workout);
  }

  private updatePText(p: HTMLParagraphElement, workout: Workout) {
    p.innerText = `${workout.name} 
  reps: ${workout.reps}`;
  }

  private createButtonFlex(): HTMLDivElement {
    const boxDiv = document.createElement('div');
    boxDiv.className = 'box-container';
    boxDiv.style.display = 'flex';
    boxDiv.style.justifyContent = 'space-between';
    return boxDiv;
  }
}

const app = new WorkoutApp();
