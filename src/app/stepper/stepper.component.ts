import { Component, signal } from '@angular/core';
import { StepComponent } from './step/step.component';
import { StepsComponent } from './steps/steps.component';

@Component({
  selector: 'se-stepper',
  imports: [StepsComponent, StepComponent],
  template: `
    <h1>no default selected {{ otherStep }}</h1>
    <se-steps (selectedStepIdChange)="otherStep = $event">
      @for (step of steps; track step.stepNumber) {
        <se-step [stepId]="step.stepNumber">
          <span> {{ step.stepName }}</span>
        </se-step>
      }
      <se-step [stepId]="4" disabled>
        <span>Step 4</span>
      </se-step>
    </se-steps>
    <h1>With selected {{ currentStep() }}</h1>
    <se-steps [(selectedStepId)]="currentStep">
      @for (step of steps; track step.stepNumber) {
        <se-step [stepId]="step.stepNumber">
          <span> {{ step.stepName }}</span>
        </se-step>
      }
    </se-steps>
    <br /><br />
    <h3>Radio buttons</h3>
    <fieldset>
    @for (step of steps; track step.stepNumber) {
      <label (click)="setStep(step.stepNumber)">
        <span>{{ step.stepName }}</span>
        <input name="testGroep" type="radio" [checked]="radioStep() === step.stepNumber" [value]="step.stepNumber" />
      </label>
    }
    </fieldset>
  `,
  styleUrl: './stepper.component.css',
})
export class StepperComponent {
  steps = [
    { stepNumber: 1, stepName: 'Step 1' },
    { stepNumber: 2, stepName: 'Step 2' },
    { stepNumber: 3, stepName: 'Step 3' },
  ];
  currentStep = signal(1);
  radioStep = signal(1);
  otherStep?: number;

  setStep(step: number) {
    console.log('setStep', step);
    this.radioStep.set(step);
  }
}
