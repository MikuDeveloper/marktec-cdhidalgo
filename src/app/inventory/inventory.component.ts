import { Component } from '@angular/core';
import {MatFabButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";
import {Router} from "@angular/router";

@Component({
  selector: 'app-inventory',
  standalone: true,
  imports: [
    MatFabButton,
    MatIcon
  ],
  templateUrl: './inventory.component.html',
  styleUrl: './inventory.component.scss'
})
export class InventoryComponent {
  constructor(private router: Router) {}

  goToAddToInventory() {
    this.router.navigate(['/home/inventory/add']).then();
  }

}
