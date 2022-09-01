import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit {

  emps!:Employee[];
  errMsg!:string;

  constructor(private empService:EmployeeService) { }

  ngOnInit(): void {
    this.empService.getAll().subscribe({
      next: data => this.emps=data,
      error: err => {console.error(err);this.errMsg="Unable to load. Please retry later!";}
    });
  }

}
