import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {

  formGroup: FormGroup | undefined;

  constructor(
    private formBuilder: FormBuilder
  ){

  }



  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      name: [undefined, Validators.required],
      surname: [undefined, Validators.minLength(3)]
    })
  }

  // name: string | undefined;
  // surname: string | undefined;

  onFormSubmit(): void {
    console.log(this.formGroup?.valid)
    console.log(this.formGroup?.value);
  }
}
