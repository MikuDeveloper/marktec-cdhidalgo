import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Customer } from '../../entities/customer';
import { collection, Firestore, getDocs, FirestoreError } from '@angular/fire/firestore';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

@Component({
  selector: 'app-customers',
  standalone: true,
  imports: [
    RouterOutlet,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  templateUrl: './customers.component.html',
  styleUrl: './customers.component.scss'
})
export class CustomersComponent implements OnInit {
  private firestore = inject(Firestore);
  protected CUSTOMERS: Customer[] = [];

  displayedColumns: string[] = ['voterKey', 'name', 'status'];
  customersData: MatTableDataSource<Customer> = new MatTableDataSource<Customer>(this.CUSTOMERS);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private router: Router) {}

  ngOnInit(): void {
    getDocs(collection(this.firestore, 'customers'))
      .then((data) => {
        data.forEach(doc => this.CUSTOMERS.push(<Customer> doc.data()));
        this.customersData.paginator = this.paginator;
      })
      .catch((error: FirestoreError) => {
        console.log(error.message)
      })
      .finally();
  }

  goToRegister(): void {
    this.router.navigate(['home/customers/register']).then();
  }

}
