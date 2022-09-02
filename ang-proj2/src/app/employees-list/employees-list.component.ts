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
    this.loadData();
  }

  del(id:number){
    this.empService.deleteById(id).subscribe({
      next: () => this.loadData(),
      error: err => {console.error(err);this.errMsg="Unable to delete. Please retry later!";}
    });
  }

  loadData(){
    this.empService.getAll().subscribe({
      next: data => this.emps=data,
      error: err => {console.error(err);this.errMsg="Unable to load. Please retry later!";}
    });
  }
}
