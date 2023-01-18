import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') signupForm: NgForm;
  defaultQuestion = 'pet';
  answer = '';
  genders = ['male', 'female'];
  submitted = false;

  user= {
    username: '',
    email: '',
    secretQuestion:'',
    answer: '',
    gender: ''
  }
  suggestUserName() {
    const suggestedName = 'Superuser';
    /* this.signupForm.setValue({
      userData: {
        username: suggestedName,
        email: ''
      },
      secret: 'pet',
      questionAnswer:'',
      gender: 'male'
    }
    ); */

    /* What is in the top is nott the most convenient way, we can use the method below */
    //We will override with patch the specific value we want
    this.signupForm.form.patchValue({
      userData: {
        username: suggestedName
      }
    }); 
  }

  onSubmit() {
    this.submitted = true;
    console.log(this.signupForm);
    this.user.username = this.signupForm.value.userData.username;
    this.user.email = this.signupForm.value.userData.email;
    this.user.secretQuestion = this.signupForm.value.secret;
    this.user.answer = this.signupForm.value.questionAnswer;
    this.user.gender = this.signupForm.value.gender;

    this.signupForm.reset();
  }
}
