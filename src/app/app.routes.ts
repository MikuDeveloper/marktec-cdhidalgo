import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { employeeGuard } from '../guards/employee.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InventoryComponent } from './inventory/inventory.component';
import { CustomersComponent } from './customers/customers.component';
import { EmployeesComponent } from './employees/employees.component';
import { SalesComponent } from './sales/sales.component';
import { DebtsComponent } from './debts/debts.component';
import { ReportsComponent } from './reports/reports.component';
import { CustomerRegisterComponent } from './customers/customer-register/customer-register.component';
import { InventoryAddComponent } from './inventory/inventory-add/inventory-add.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent, canActivate: [employeeGuard],
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'inventory', component: InventoryComponent },
      { path: 'inventory/add', component: InventoryAddComponent },
      { path: 'customers', component: CustomersComponent },
      { path: 'customers/register', component: CustomerRegisterComponent },
      { path: 'employees', component: EmployeesComponent },
      { path: 'sales', component: SalesComponent },
      { path: 'debts', component: DebtsComponent },
      { path: 'reports', component: ReportsComponent },
    ]
  }
];
