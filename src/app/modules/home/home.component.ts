import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, of, Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent {

  // name: string | undefined;
  // surname: string | undefined;

  formGroup: FormGroup | undefined;

  observable$: Observable<number> = of(1,2,3,4,5);

  subscription: Subscription | undefined;
  formSubscription: Subscription | undefined;


  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ){

  }


  ngOnInit(): void {
    this.displayObservableNumbers();
    this.formGroup = this.formBuilder.group({
      name: [undefined, Validators.required],
      surname: [undefined, Validators.minLength(3)]
    })
    this.observeFormChanges();
  }


  private displayObservableNumbers(): void {
    this.subscription = this.observable$.subscribe((value) => {
      console.log(value);
    })
  }


  onFormSubmit(): void {
    console.log(this.formGroup?.valid)
    console.log(this.formGroup?.value);
  }

  private observeFormChanges():void {
    this.formSubscription = this.formGroup?.valueChanges.subscribe((value) => {
      console.log(value);
    })
  }

  goToProfileAndLogNothing(): void {
    console.log("nothing");
    this.router.navigate(['/profile']);
  }


  // don't forget to unsubscribe!!!
  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
    this.formSubscription?.unsubscribe();
  }
}
