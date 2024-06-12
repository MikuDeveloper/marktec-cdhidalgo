import {Component, inject} from '@angular/core';
import {MatButton} from "@angular/material/button";
import {MatError, MatFormField, MatHint, MatLabel, MatPrefix} from "@angular/material/form-field";
import {MatIcon} from "@angular/material/icon";
import {MatInput} from "@angular/material/input";
import {MatProgressBar} from "@angular/material/progress-bar";
import {MatStep, MatStepLabel, MatStepper, MatStepperNext, MatStepperPrevious} from "@angular/material/stepper";
import {FormBuilder, FormControl, FormGroupDirective, ReactiveFormsModule, Validators} from "@angular/forms";
import {doc, Firestore, FirestoreError, setDoc} from "@angular/fire/firestore";
import {Customer} from "../../../entities/customer";
import {MatSnackBar, MatSnackBarModule} from "@angular/material/snack-bar";

@Component({
  selector: 'app-customer-register',
  standalone: true,
    imports: [
      MatButton,
      MatError,
      MatFormField,
      MatHint,
      MatIcon,
      MatInput,
      MatLabel,
      MatPrefix,
      MatProgressBar,
      MatStep,
      MatStepLabel,
      MatStepper,
      MatStepperNext,
      MatStepperPrevious,
      ReactiveFormsModule,
      MatSnackBarModule,
    ],
  templateUrl: './customer-register.component.html',
  styleUrl: './customer-register.component.scss'
})
export class CustomerRegisterComponent {
  private firestore = inject(Firestore);

  isLoading: boolean = false;

  voterKeyControl = new FormControl('', Validators.required);
  firstnameControl = new FormControl('', Validators.required);
  lastname1Control = new FormControl('', Validators.required);
  lastname2Control = new FormControl('');
  addressControl = new FormControl('', Validators.required);
  phoneNumberControl = new FormControl('', [Validators.required, Validators.pattern(/^\d{10}$/)]);
  facebookControl = new FormControl('', Validators.required);
  emailControl = new FormControl('', [Validators.required, Validators.email]);

  personalDataGroup = this._formBuilder.group({
    voterKey: this.voterKeyControl,
    firstname: this.firstnameControl,
    lastname1: this.lastname1Control,
    lastname2: this.lastname2Control,
    address: this.addressControl
  });

  contactDataGroup = this._formBuilder.group({
    phoneNumber: this.phoneNumberControl,
    facebook: this.facebookControl,
    email: this.emailControl,
  });

  constructor(private _formBuilder: FormBuilder, private _snackBar: MatSnackBar) {}

  saveData(registerStepper: MatStepper, form1: FormGroupDirective, form2: FormGroupDirective) {
    this.isLoading = true;

    const personalData = this.personalDataGroup.getRawValue();
    const contactData = this.contactDataGroup.getRawValue();
    const newCustomer: Customer = {
      voterKey: (personalData.voterKey ?? '').trim(),
      firstname: (personalData.firstname ?? '').trim(),
      lastname1: (personalData.lastname1 ?? '').trim(),
      lastname2: (personalData.lastname2 ?? '').trim(),
      address: (personalData.address ?? '').trim(),
      phoneNumber: (contactData.phoneNumber ?? '').trim(),
      facebook: (contactData.facebook ?? '').trim(),
      email: (contactData.email ?? '').trim(),
      status: 'Sin adeudos'
    };

    setDoc(doc(this.firestore, 'customers', newCustomer.voterKey), newCustomer)
      .then(() => {
        form1.resetForm();
        form2.resetForm();
        registerStepper.reset();
        this._snackBar.open('Cliente registrado con éxito.', 'Aceptar', { duration: 3000 });
      })
      .catch((error: FirestoreError) => {
        console.log(`Error: ${error.code}`);
      })
      .finally(() => this.isLoading = false);
  }
}
