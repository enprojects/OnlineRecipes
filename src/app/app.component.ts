import { Component, OnInit } from '@angular/core';

import { Employee } from 'src/Employee';
import { EmpServ } from './EmpServ';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [EmpServ]
})

export class AppComponent implements OnInit {

  title = 'OnlineStore';
  laodedFeture = 'recipe';
  employees: Employee[] = [];

  constructor(private serv: EmpServ) { }
  ngOnInit(): void {
    this.serv.getEmployees().subscribe(result => {

      var employees = [];
      result.forEach(function (value: any) {
 
        employees.push(new Employee(value.id, value.employee_name, value.employee_name));
        //  this.employees.push(new Employee(value.is, value.name, value.age))
      });
      this.employees = employees;

    })
  }

  onNavigate(feature: string) {

    this.laodedFeture = feature;

  }

}
