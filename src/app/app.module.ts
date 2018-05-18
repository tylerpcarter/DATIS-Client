import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { appRoutes } from './routerConfig';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { SalariesComponent } from './components/salaries/salaries.component';
import { SalaryComponent } from './components/salary/salary.component';
import { BonusesComponent } from './components/bonuses/bonuses.component';
import { BonusComponent } from './components/bonus/bonus.component';
import { DeductionsComponent } from './components/deductions/deductions.component';
import { DeductionComponent } from './components/deduction/deduction.component';
import { AboutComponent } from './components/about/about.component';

import { ApiService } from './services/api.service';
import { EmployeeService } from './services/employee.service';
import { SalaryService } from './services/salary.service';
import { BonusService } from './services/bonus.service';
import { DeductionService } from './services/deduction.service';
import { ErrorComponent } from './components/error/error.component';
import { NewComponent } from './components/new/new.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EmployeesComponent,
    AboutComponent,
    EmployeeComponent,
    SalariesComponent,
    SalaryComponent,
    BonusesComponent,
    BonusComponent,
    DeductionsComponent,
    DeductionComponent,
    ErrorComponent,
    NewComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpModule,
    FormsModule
  ],
  providers: [
    ApiService,
    EmployeeService,
    SalaryService,
    BonusService,
    DeductionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
