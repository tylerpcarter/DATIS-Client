import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { ErrorComponent } from './components/error/error.component';
import { NewComponent } from './components/new/new.component';

export const appRoutes: Routes = [
  { path: '', 
    component: HomeComponent 
  },
  {
    path: 'about',
    component: AboutComponent
  },
  { path: 'employees',
    component: EmployeesComponent
  },
  { path: 'employees/new', 
    component: NewComponent 
  },
  { path: 'employees/:id', 
    component: EmployeeComponent 
  },
  {
    path: '**',
    component: ErrorComponent
  }
];