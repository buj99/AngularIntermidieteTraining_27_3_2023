import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  ValidationErrors,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-jokes-form',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './jokes-form.component.html',
  styleUrls: ['./jokes-form.component.scss'],
})
export class JokesFormComponent {
  joke: string = '';
  author: string = '';
  newJokeForm: FormGroup = new FormGroup({
    joke: new FormControl('', [Validators.required, Validators.minLength(4)]),
    author: new FormControl('', [
      Validators.required,
      this.customValidator('s'),
    ]),
  });
  onSubmit(newJokeForm: any) {}

  public customValidator(startsWithLetter: string) {
    return (control: AbstractControl) => {
      console.log(control.value);
      if (control.value[0] === startsWithLetter) {
        return null;
      } else {
        return {
          startsWithLetterValidation: `the input doesn't start with ${startsWithLetter}`,
        };
      }
    };
  }
}
