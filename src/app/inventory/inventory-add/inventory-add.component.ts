import {Component, inject} from '@angular/core';
import {MatStep, MatStepperModule} from "@angular/material/stepper";
import {MatFormFieldModule, MatLabel} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {ReactiveFormsModule} from "@angular/forms";
import {MatIconModule} from "@angular/material/icon";
import {Firestore} from "@angular/fire/firestore";

@Component({
  selector: 'app-inventory-add',
  standalone: true,
  imports: [
    MatStepperModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
  ],
  templateUrl: './inventory-add.component.html',
  styleUrl: './inventory-add.component.scss'
})
export class InventoryAddComponent {
  private firestore: Firestore = inject(Firestore);


}
